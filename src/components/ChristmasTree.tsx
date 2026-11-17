import React from 'react';
import { Sparkles } from 'lucide-react';
import christmasTreeImg from '../assets/images/christmas_tree.png';

// Các đốm đèn nháy & tia sáng lấp lánh phủ theo dáng tán cây thông
const FAIRY_LIGHTS = [
    // Đỉnh & Tầng 1
    { top: '12%', left: '49%', size: 8, color: '#fef08a', glow: 'rgba(253,224,71,0.95)', delay: '0s' },
    { top: '19%', left: '44%', size: 7, color: '#ff4d4d', glow: 'rgba(239,68,68,0.95)', delay: '0.4s' },
    { top: '21%', left: '55%', size: 8, color: '#ffffff', glow: 'rgba(255,255,255,0.95)', delay: '0.9s' },
    // Tầng 2
    { top: '29%', left: '39%', size: 9, color: '#fde047', glow: 'rgba(250,204,21,0.95)', delay: '0.2s' },
    { top: '32%', left: '50%', size: 8, color: '#ff4d4d', glow: 'rgba(239,68,68,0.95)', delay: '1.1s' },
    { top: '30%', left: '61%', size: 9, color: '#bae6fd', glow: 'rgba(186,230,253,0.95)', delay: '0.7s' },
    { top: '37%', left: '44%', size: 7, color: '#ffffff', glow: 'rgba(255,255,255,0.95)', delay: '1.5s' },
    { top: '38%', left: '57%', size: 8, color: '#fef08a', glow: 'rgba(253,224,71,0.95)', delay: '0.3s' },
    // Tầng 3
    { top: '46%', left: '33%', size: 9, color: '#ff4d4d', glow: 'rgba(239,68,68,0.95)', delay: '0.8s' },
    { top: '48%', left: '46%', size: 10, color: '#fde047', glow: 'rgba(250,204,21,0.95)', delay: '0.1s' },
    { top: '49%', left: '54%', size: 8, color: '#ffffff', glow: 'rgba(255,255,255,0.95)', delay: '1.3s' },
    { top: '45%', left: '67%', size: 9, color: '#ff4d4d', glow: 'rgba(239,68,68,0.95)', delay: '0.5s' },
    { top: '55%', left: '38%', size: 8, color: '#6ee7b7', glow: 'rgba(110,231,183,0.95)', delay: '1.0s' },
    { top: '56%', left: '62%', size: 9, color: '#fde047', glow: 'rgba(250,204,21,0.95)', delay: '1.6s' },
    // Tầng 4
    { top: '63%', left: '26%', size: 10, color: '#fde047', glow: 'rgba(250,204,21,0.95)', delay: '0.6s' },
    { top: '65%', left: '41%', size: 9, color: '#ff4d4d', glow: 'rgba(239,68,68,0.95)', delay: '1.2s' },
    { top: '64%', left: '52%', size: 10, color: '#ffffff', glow: 'rgba(255,255,255,0.95)', delay: '0.4s' },
    { top: '66%', left: '64%', size: 9, color: '#ff4d4d', glow: 'rgba(239,68,68,0.95)', delay: '1.4s' },
    { top: '62%', left: '74%', size: 10, color: '#fef08a', glow: 'rgba(253,224,71,0.95)', delay: '0.2s' },
    // Tầng 5 (Tán rộng dưới đáy)
    { top: '75%', left: '22%', size: 9, color: '#ff4d4d', glow: 'rgba(239,68,68,0.95)', delay: '0.9s' },
    { top: '77%', left: '35%', size: 10, color: '#fef08a', glow: 'rgba(253,224,71,0.95)', delay: '0.3s' },
    { top: '79%', left: '48%', size: 9, color: '#bae6fd', glow: 'rgba(186,230,253,0.95)', delay: '1.1s' },
    { top: '78%', left: '60%', size: 10, color: '#fde047', glow: 'rgba(250,204,21,0.95)', delay: '0.5s' },
    { top: '74%', left: '76%', size: 9, color: '#ff4d4d', glow: 'rgba(239,68,68,0.95)', delay: '1.5s' },
    { top: '85%', left: '30%', size: 8, color: '#ffffff', glow: 'rgba(255,255,255,0.95)', delay: '0.7s' },
    { top: '87%', left: '53%', size: 9, color: '#fef08a', glow: 'rgba(253,224,71,0.95)', delay: '0.1s' },
    { top: '84%', left: '69%', size: 8, color: '#ffffff', glow: 'rgba(255,255,255,0.95)', delay: '1.3s' },
];

// Các tia sao kim cương 4 cánh lấp lánh trên tán lá
const DIAMOND_SPARKLES = [
    { top: '15%', left: '52%', size: 16, color: 'text-amber-200', delay: '0.2s', duration: '2.2s' },
    { top: '26%', left: '42%', size: 14, color: 'text-white', delay: '1.1s', duration: '2.8s' },
    { top: '34%', left: '59%', size: 18, color: 'text-yellow-200', delay: '0.5s', duration: '2.4s' },
    { top: '44%', left: '36%', size: 16, color: 'text-amber-100', delay: '1.6s', duration: '2.6s' },
    { top: '51%', left: '51%', size: 20, color: 'text-white', delay: '0.8s', duration: '2.1s' },
    { top: '58%', left: '68%', size: 15, color: 'text-amber-200', delay: '0.3s', duration: '2.9s' },
    { top: '68%', left: '29%', size: 18, color: 'text-yellow-100', delay: '1.4s', duration: '2.5s' },
    { top: '72%', left: '57%', size: 17, color: 'text-white', delay: '0.6s', duration: '2.3s' },
    { top: '81%', left: '41%', size: 19, color: 'text-amber-200', delay: '1.2s', duration: '2.7s' },
    { top: '80%', left: '72%', size: 16, color: 'text-white', delay: '0.9s', duration: '2.4s' },
];

export const ChristmasTree: React.FC = () => {
    return (
        <div className="relative w-64 h-80 sm:w-96 sm:h-[460px] md:w-[480px] md:h-[560px] flex items-center justify-center select-none">
            {/* Hào quang Giáng Sinh rực rỡ phía sau cây thông */}
            <div className="absolute -inset-10 sm:-inset-16 rounded-full bg-emerald-500/20 blur-[65px] sm:blur-[105px] animate-pulse" />
            <div className="absolute inset-6 rounded-full bg-red-500/15 blur-[55px] sm:blur-[85px] animate-pulse" />
            <div className="absolute -top-4 w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-amber-300/25 blur-[45px] sm:blur-[70px]" />

            {/* Ngôi sao đỉnh cây thông phát sáng lấp lánh */}
            <div className="absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="absolute w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-amber-300/60 blur-md animate-pulse" />
                <svg
                    viewBox="0 0 64 64"
                    className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-[0_0_16px_rgba(253,224,71,1)] animate-bulb"
                >
                    <polygon
                        points="32,2 38,22 58,24 42,36 47,56 32,44 17,56 22,36 6,24 26,22"
                        fill="#fef08a"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                    />
                    <circle cx="32" cy="30" r="5" fill="#ffffff" />
                </svg>
            </div>

            {/* Hình ảnh Cây Thông mới bạn vừa tải lên */}
            <img
                src={christmasTreeImg}
                alt="Christmas Tree"
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(16,185,129,0.45)] filter brightness-105 contrast-105"
            />

            {/* Lớp đèn đom đóm đa sắc nhấp nháy trên tán lá */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {FAIRY_LIGHTS.map((bulb, idx) => (
                    <span
                        key={`bulb-${idx}`}
                        className="absolute rounded-full animate-bulb"
                        style={{
                            top: bulb.top,
                            left: bulb.left,
                            width: `${bulb.size}px`,
                            height: `${bulb.size}px`,
                            backgroundColor: bulb.color,
                            boxShadow: `0 0 10px 3px ${bulb.glow}, 0 0 22px 6px ${bulb.glow}`,
                            animationDelay: bulb.delay,
                        }}
                    />
                ))}

                {/* Lớp tia sao kim cương lấp lánh (Sparkles) */}
                {DIAMOND_SPARKLES.map((sp, idx) => (
                    <Sparkles
                        key={`sparkle-${idx}`}
                        className={`absolute ${sp.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.95)] animate-sparkle`}
                        style={{
                            top: sp.top,
                            left: sp.left,
                            width: `${sp.size}px`,
                            height: `${sp.size}px`,
                            animationDelay: sp.delay,
                            animationDuration: sp.duration,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChristmasTree;

