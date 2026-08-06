import React, { useMemo } from 'react';
import { Star, Sparkles } from 'lucide-react';

interface StarParticle {
    id: number;
    top: number; // vị trí % theo chiều dọc trang
    left: number; // vị trí % theo chiều ngang trang
    size: number; // kích thước w/h
    delay: number; // độ trễ animation (giúp các sao nhấp nháy lệch nhịp tự nhiên)
    duration: number; // thời gian nhấp nháy
    type: 'star' | 'sparkle';
    color: string;
}

export const SparkleStars: React.FC = () => {
    // Tạo ngẫu nhiên 30 ngôi sao trải dài từ top 0% đến 95% trang web
    const stars = useMemo<StarParticle[]>(() => {
        const colors = [
            'text-cyan-200',
            'text-amber-200',
            'text-sky-300',
            'text-indigo-200',
            'text-[#e2e8f0]',
        ];

        const glowEffects = [
            'drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]',
            'drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]',
            'drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]',
        ];

        return Array.from({ length: 260 }).map((_, i) => ({
            id: i,
            // Rải đều theo từng nấc % từ top 1% đến 98%
            top: Number((Math.random() * 97 + 1).toFixed(2)),
            left: Number((Math.random() * 94 + 3).toFixed(2)),
            size: Math.floor(Math.random() * 10) + 8, // Size vừa vặn từ 8px đến 18px để không bị rối mắt
            delay: Number((Math.random() * 4).toFixed(1)), // Trễ ngắn hơn (0s -> 4s) để sao lên nhanh hơn
            duration: Number((Math.random() * 2.5 + 1.5).toFixed(1)), // Nhấp nháy nhanh nhịp nhàng (1.5s -> 4s)
            type: Math.random() > 0.35 ? 'star' : 'sparkle',
            color: colors[Math.floor(Math.random() * colors.length)],
            glow: glowEffects[Math.floor(Math.random() * glowEffects.length)]
        }));
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            {stars.map((star) => {
                const IconComponent = star.type === 'star' ? Star : Sparkles;
                return (
                    <IconComponent
                        key={star.id}
                        className={`absolute ${star.color} opacity-0 animate-sparkle`}
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.delay}s`,
                            animationDuration: `${star.duration}s`,
                        }}
                    />
                );
            })}
        </div>
    );
};