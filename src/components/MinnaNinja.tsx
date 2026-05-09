import React, { useEffect, useRef } from 'react';
import * as Phaser from 'phaser';

export const MinnaNinja: React.FC = () => {
    const gameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gameRef.current) return;

        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            parent: gameRef.current,
            width: window.innerWidth,
            height: window.innerHeight,
            transparent: true,
            physics: {
                default: 'arcade',
                arcade: { gravity: { x: 0, y: 500 }, debug: false }
            },
            input: { activePointers: 3 },
            scene: { preload, create }
        };

        function preload(this: Phaser.Scene) {
            // Load nhiều loại trái cây khác nhau
            this.load.image('apple', 'https://labs.phaser.io/assets/sprites/apple.png');
            this.load.image('melon', 'https://labs.phaser.io/assets/sprites/melon.png');
            this.load.image('orange', 'https://labs.phaser.io/assets/sprites/orange.png');
            this.load.image('bomb', 'https://labs.phaser.io/assets/sprites/mine.png'); // Thêm bom cho kịch tính
            this.load.image('gift', 'https://labs.phaser.io/assets/sprites/treasure_chest.png');
            this.load.image('particle', 'https://labs.phaser.io/assets/particles/red.png');
        }

        function create(this: Phaser.Scene) {
            const fruits = this.physics.add.group();
            const fruitTypes = ['apple', 'melon', 'orange']; // Danh sách trái cây thường

            const slashFruit = (item: any) => {
                if (item.isSliced) return;
                item.isSliced = true;

                this.add.particles(item.x, item.y, 'particle', {
                    speed: 200, scale: { start: 0.6, end: 0 }, lifespan: 400, duration: 100
                });

                if (item.texture.key === 'bomb') {
                    console.log("BOOM! Bạn bị trừ điểm");
                } else if (item.texture.key === 'gift') {
                    console.log("TRÚNG QUÀ!");
                }

                item.destroy();
            };

            this.time.addEvent({
                delay: 1500,
                callback: () => {
                    const numToSpawn = Phaser.Math.Between(2, 4);
                    for (let i = 0; i < numToSpawn; i++) {
                        const x = Phaser.Math.Between(100, window.innerWidth - 100);

                        // Quyết định loại trái cây tung lên
                        let type = Phaser.Utils.Array.GetRandom(fruitTypes);
                        const rand = Phaser.Math.Between(1, 100);
                        if (rand <= 10) type = 'gift'; // 10% ra quà
                        if (rand > 90) type = 'bomb';  // 10% ra bom

                        const item = fruits.create(x, window.innerHeight, type);
                        item.setCircle(30);
                        item.setVelocityX(Phaser.Math.Between(-150, 150));
                        item.setVelocityY(Phaser.Math.Between(-750, -950));
                        item.setInteractive();
                        item.on('pointerover', () => slashFruit(item));
                    }
                },
                loop: true
            });

            this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
                if (pointer.isDown) {
                    const bodies = this.physics.overlapRect(pointer.x - 20, pointer.y - 20, 40, 40);
                    bodies.forEach((body: any) => {
                        if (body.gameObject && fruits.contains(body.gameObject)) {
                            slashFruit(body.gameObject);
                        }
                    });
                }
            });
        }

        const game = new Phaser.Game(config);
        const handleResize = () => game.scale.resize(window.innerWidth, window.innerHeight);
        window.addEventListener('resize', handleResize);

        return () => {
            game.destroy(true);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            ref={gameRef}
            className="fixed inset-0 z-[1002] pointer-events-none"
        >
            <style>{`
                /* CHỖ NÀY QUAN TRỌNG: Chỉ cho phép click/vuốt TRÊN trái cây, 
                   còn lại cho phép cuộn trang xuyên qua canvas */
                canvas { 
                    pointer-events: none !important; 
                }
            `}</style>
        </div>
    );
};