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
            transparent: true, // Quan trọng: Để lấp đầy website mà không che nội dung
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: {
                        x: 0,   // Thêm x: 0 vào đây
                        y: 400
                    }
                }
            },
            scene: {
                preload: preload,
                create: create,
                update: update
            }
        };

        const game = new Phaser.Game(config);

        function preload(this: Phaser.Scene) {
            // Load ảnh trái cây/logo (Thay link ảnh thực tế của bạn)
            this.load.image('fruit', 'https://labs.phaser.io/assets/sprites/apple.png');
            this.load.image('gift', 'https://labs.phaser.io/assets/sprites/treasure_chest.png');
            this.load.image('particle', 'https://labs.phaser.io/assets/particles/red.png');
        }

        function create(this: Phaser.Scene) {
            const fruits = this.physics.add.group();

            // Hàm tạo trái cây bay lên
            const spawnFruit = () => {
                const x = Phaser.Math.Between(100, window.innerWidth - 100);
                const isGift = Phaser.Math.Between(1, 100) <= 10; // 10% tỉ lệ trúng quà

                const item = fruits.create(x, window.innerHeight, isGift ? 'gift' : 'fruit');
                item.setCircle(25);
                item.setCollideWorldBounds(false);

                // Lực tung lên ngẫu nhiên
                item.setVelocityX(Phaser.Math.Between(-100, 100));
                item.setVelocityY(Phaser.Math.Between(-600, -800));

                // Cho phép tương tác
                item.setInteractive();
                item.on('pointerover', () => {
                    // Hiệu ứng hạt khi chém
                    const emitter = this.add.particles(0, 0, 'particle', {
                        speed: 100,
                        scale: { start: 0.5, end: 0 },
                        blendMode: 'ADD',
                        lifespan: 500
                    });
                    emitter.explode(20, item.x, item.y);

                    if (isGift) {
                        console.log("TRÚNG THƯỞNG RỒI BẠN ƠI!");
                        // Bạn có thể gọi hàm callback từ React ở đây để hiện Modal thưởng
                    }

                    item.destroy(); // Chém là mất
                });
            };

            // Tung trái cây mỗi 2 giây
            this.time.addEvent({ delay: 2000, callback: spawnFruit, loop: true });
        }

        function update(this: Phaser.Scene) {
            // Tự động xóa các trái cây rơi khỏi màn hình để nhẹ máy
            // @ts-ignore
            this.children.list.forEach((child: any) => {
                if (child.y > window.innerHeight + 100) {
                    child.destroy();
                }
            });
        }

        // Xử lý khi resize màn hình
        const handleResize = () => {
            game.scale.resize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            game.destroy(true);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            ref={gameRef}
            className="fixed inset-0 z-[9999] pointer-events-none"
            style={{ pointerEvents: 'none' }}
        >
            {/* Mẹo: 'pointer-events-none' ở div cha để click xuyên qua được web,
               nhưng Phaser sẽ tự xử lý 'pointerover' cho các item.
            */}
        </div>
    );
};