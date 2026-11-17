import React, { useMemo } from 'react';
import { Snowflake } from 'lucide-react';

interface FrostFlake {
    id: number;
    top: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
    color: string;
}

interface FallingFlake {
    id: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
    sway: number;
    opacity: number;
    isDot: boolean;
    color: string;
}

interface SparkleStarsProps {
    count?: number;
}

// Hàm sinh số giả ngẫu nhiên thuần khiết (pure deterministic PRNG)
const seededRandom = (seed: number): number => {
    const x = Math.sin(seed * 9999.91) * 10000;
    return x - Math.floor(x);
};

export const SparkleStars: React.FC<SparkleStarsProps> = ({ count = 110 }) => {
    // 1. Các bông tuyết băng giá lấp lánh rải đều khắp chiều dài trang
    const frostFlakes = useMemo<FrostFlake[]>(() => {
        const colors = [
            'text-white',
            'text-sky-100',
            'text-amber-100',
            'text-emerald-100',
            'text-rose-100',
        ];

        const actualCount = Math.min(count, 120);

        return Array.from({ length: actualCount }).map((_, i) => {
            const r1 = seededRandom(i * 7 + 1);
            const r2 = seededRandom(i * 7 + 2);
            const r3 = seededRandom(i * 7 + 3);
            const r4 = seededRandom(i * 7 + 4);
            const r5 = seededRandom(i * 7 + 5);
            const r6 = seededRandom(i * 7 + 6);

            return {
                id: i,
                top: Number((r1 * 97 + 1).toFixed(2)),
                left: Number((r2 * 94 + 3).toFixed(2)),
                size: Math.floor(r3 * 11) + 9, // 9px -> 19px
                delay: Number((r4 * 5).toFixed(1)),
                duration: Number((r5 * 3 + 2.5).toFixed(1)),
                color: colors[Math.floor(r6 * colors.length)],
            };
        });
    }, [count]);

    // 2. Màn mưa tuyết rơi nhẹ nhàng liên tục trên toàn khung nhìn (viewport)
    const fallingFlakes = useMemo<FallingFlake[]>(() => {
        const colors = ['text-white', 'text-sky-100', 'text-amber-50'];

        return Array.from({ length: 42 }).map((_, i) => {
            const s1 = seededRandom(i * 11 + 101);
            const s2 = seededRandom(i * 11 + 102);
            const s3 = seededRandom(i * 11 + 103);
            const s4 = seededRandom(i * 11 + 104);
            const s5 = seededRandom(i * 11 + 105);
            const s6 = seededRandom(i * 11 + 106);
            const s7 = seededRandom(i * 11 + 107);
            const s8 = seededRandom(i * 11 + 108);

            const duration = Number((s1 * 10 + 10).toFixed(1)); // 10s -> 20s
            return {
                id: i,
                left: Number((s2 * 98 + 1).toFixed(2)),
                size: Math.floor(s3 * 13) + 10, // 10px -> 22px
                // Delay âm để ngay khi mở trang tuyết đã phủ đều giữa không trung
                delay: -Number((s4 * duration).toFixed(1)),
                duration,
                sway: Math.floor(s5 * 70) - 35, // -35px -> +35px
                opacity: Number((s6 * 0.5 + 0.3).toFixed(2)),
                isDot: s7 > 0.68,
                color: colors[Math.floor(s8 * colors.length)],
            };
        });
    }, []);

    return (
        <>
            {/* Lớp tuyết rơi liên tục theo khung hình */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
                {fallingFlakes.map((flake) =>
                    flake.isDot ? (
                        <span
                            key={`fall-dot-${flake.id}`}
                            className="absolute top-0 rounded-full bg-white blur-[0.8px] animate-snowfall"
                            style={{
                                left: `${flake.left}%`,
                                width: `${Math.max(4, Math.round(flake.size * 0.35))}px`,
                                height: `${Math.max(4, Math.round(flake.size * 0.35))}px`,
                                animationDelay: `${flake.delay}s`,
                                animationDuration: `${flake.duration}s`,
                                ['--sway' as string]: `${flake.sway}px`,
                                ['--flake-opacity' as string]: flake.opacity,
                            }}
                        />
                    ) : (
                        <Snowflake
                            key={`fall-icon-${flake.id}`}
                            strokeWidth={1.6}
                            className={`absolute top-0 ${flake.color} drop-shadow-[0_0_6px_rgba(255,255,255,0.65)] animate-snowfall`}
                            style={{
                                left: `${flake.left}%`,
                                width: `${flake.size}px`,
                                height: `${flake.size}px`,
                                animationDelay: `${flake.delay}s`,
                                animationDuration: `${flake.duration}s`,
                                ['--sway' as string]: `${flake.sway}px`,
                                ['--flake-opacity' as string]: flake.opacity,
                            }}
                        />
                    )
                )}
            </div>

            {/* Lớp bông tuyết băng giá lấp lánh dọc theo trang */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                {frostFlakes.map((flake) => (
                    <Snowflake
                        key={`frost-${flake.id}`}
                        strokeWidth={1.5}
                        className={`absolute ${flake.color} opacity-0 animate-sparkle`}
                        style={{
                            top: `${flake.top}%`,
                            left: `${flake.left}%`,
                            width: `${flake.size}px`,
                            height: `${flake.size}px`,
                            animationDelay: `${flake.delay}s`,
                            animationDuration: `${flake.duration}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
};
