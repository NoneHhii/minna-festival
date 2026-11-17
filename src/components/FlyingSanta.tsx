import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ALTITUDES = [11, 19, 14, 24];

export const FlyingSanta: React.FC = () => {
    const [passIndex, setPassIndex] = useState(0);

    const isLeftToRight = passIndex % 2 === 0;
    const topVh = ALTITUDES[passIndex % ALTITUDES.length];

    return (
        <div className="fixed inset-x-0 top-0 h-screen pointer-events-none overflow-hidden z-30 select-none">
            <motion.div
                key={passIndex}
                initial={{
                    x: isLeftToRight ? '-32vw' : '108vw',
                    top: `${topVh}vh`,
                }}
                animate={{
                    x: isLeftToRight ? '108vw' : '-32vw',
                    top: `${topVh}vh`,
                }}
                transition={{
                    duration: 19,
                    ease: 'linear',
                    delay: passIndex === 0 ? 0.5 : 1.2,
                }}
                onAnimationComplete={() => {
                    setPassIndex((prev) => prev + 1);
                }}
                className="absolute left-0 w-52 sm:w-72 md:w-88"
            >
                {/* Nhấp nhô lượn sóng trên bầu trời đêm */}
                <motion.div
                    animate={{
                        y: [0, -16, 4, -12, 0],
                        rotate: isLeftToRight ? [-2, 2.5, -1.5, 2, -2] : [2, -2.5, 1.5, -2, 2],
                    }}
                    transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="relative"
                >
                    {/* Lời chào Ho Ho Ho nhỏ xinh (luôn giữ đúng chiều chữ) */}
                    <motion.div
                        animate={{ opacity: [0, 1, 1, 0], y: [4, -4, -4, 2] }}
                        transition={{ duration: 6, repeat: Infinity, repeatDelay: 2.5 }}
                        className={`absolute -top-5 ${
                            isLeftToRight ? 'left-[22%]' : 'right-[22%]'
                        } px-2.5 py-0.5 rounded-full bg-red-950/80 border border-amber-300/50 text-amber-100 text-[10px] sm:text-xs font-bold shadow-[0_0_12px_rgba(251,191,36,0.4)] whitespace-nowrap backdrop-blur-sm`}
                    >
                        Ho Ho Ho! 🎄
                    </motion.div>

                    {/* Lật ngang SVG khi bay chiều ngược lại */}
                    <div
                        style={{
                            transform: isLeftToRight ? 'scaleX(1)' : 'scaleX(-1)',
                        }}
                        className="drop-shadow-[0_6px_20px_rgba(251,191,36,0.3)]"
                    >
                        <svg
                            viewBox="0 0 430 140"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-auto overflow-visible"
                        >
                            <defs>
                                <linearGradient id="magicTrail" x1="0" y1="85" x2="115" y2="85" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#fde68a" stopOpacity="0" />
                                    <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.45" />
                                    <stop offset="100%" stopColor="#fef08a" stopOpacity="0.85" />
                                </linearGradient>
                                <linearGradient id="sleighRed" x1="95" y1="55" x2="195" y2="110" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#ef4444" />
                                    <stop offset="55%" stopColor="#dc2626" />
                                    <stop offset="100%" stopColor="#7f1d1d" />
                                </linearGradient>
                                <linearGradient id="goldTrim" x1="85" y1="60" x2="215" y2="120" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#fef08a" />
                                    <stop offset="50%" stopColor="#f59e0b" />
                                    <stop offset="100%" stopColor="#b45309" />
                                </linearGradient>
                                <radialGradient id="rudolphGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#ff4d4d" stopOpacity="1" />
                                    <stop offset="45%" stopColor="#ef4444" stopOpacity="0.65" />
                                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                                </radialGradient>
                            </defs>

                            {/* === VỆT BỤI PHÉP VÀNG LẤP LÁNH PHÍA SAU CỖ XE === */}
                            <path
                                d="M8 96 Q 50 82, 102 92"
                                stroke="url(#magicTrail)"
                                strokeWidth="6"
                                strokeLinecap="round"
                            />
                            <path
                                d="M22 106 Q 62 96, 106 101"
                                stroke="url(#magicTrail)"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <circle cx="24" cy="90" r="2.5" fill="#fef08a" className="animate-pulse" />
                            <circle cx="48" cy="103" r="2" fill="#ffffff" className="animate-ping" />
                            <circle cx="68" cy="84" r="3" fill="#fde047" className="animate-pulse" />
                            <circle cx="84" cy="106" r="2.2" fill="#bae6fd" />

                            {/* === DÂY CƯƠNG VÀNG NỐI XE VỚI TUẦN LỘC === */}
                            <path
                                d="M192 78 Q 232 88, 272 74 Q 318 88, 366 72"
                                stroke="#fbbf24"
                                strokeWidth="1.8"
                                strokeDasharray="3 2"
                                fill="none"
                                opacity="0.9"
                            />

                            {/* === CỖ XE TRƯỢT TUYẾT & TÚI QUÀ === */}
                            {/* Thanh trượt tuyết bằng vàng */}
                            <path
                                d="M82 114 L198 114 C212 114, 220 103, 214 94 C210 89, 203 93, 206 98"
                                stroke="url(#goldTrim)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                fill="none"
                            />
                            <line x1="114" y1="102" x2="114" y2="114" stroke="url(#goldTrim)" strokeWidth="3.5" />
                            <line x1="172" y1="102" x2="172" y2="114" stroke="url(#goldTrim)" strokeWidth="3.5" />

                            {/* Bao tải quà & hộp quà phía sau */}
                            <ellipse cx="118" cy="72" rx="22" ry="20" fill="#b45309" />
                            <ellipse cx="114" cy="69" rx="18" ry="16" fill="#d97706" />
                            {/* Hộp quà xanh & đỏ nhô lên */}
                            <rect x="102" y="48" width="14" height="13" rx="2" fill="#10b981" stroke="#fef08a" strokeWidth="1.2" />
                            <line x1="109" y1="48" x2="109" y2="61" stroke="#fef08a" strokeWidth="2" />
                            <rect x="118" y="51" width="12" height="11" rx="2" fill="#ec4899" stroke="#ffffff" strokeWidth="1" />

                            {/* === ÔNG GIÀ NOEL === */}
                            {/* Thân áo đỏ */}
                            <ellipse cx="152" cy="74" rx="19" ry="20" fill="#dc2626" />
                            {/* Viền lông trắng trước ngực & thắt lưng */}
                            <rect x="149" y="56" width="6" height="32" rx="3" fill="#f8fafc" />
                            <rect x="135" y="76" width="34" height="5" fill="#1e293b" />
                            <rect x="150" y="75" width="7" height="7" rx="1" stroke="#fbbf24" strokeWidth="1.8" fill="none" />

                            {/* Cánh tay vẫy chào */}
                            <g className="animate-santa-wave">
                                <path d="M145 64 L132 45" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
                                <circle cx="139" cy="55" r="0.1" />
                                <circle cx="131" cy="43" r="4.5" fill="#f8fafc" />
                                <circle cx="130" cy="40" r="3.5" fill="#166534" />
                            </g>

                            {/* Khuôn mặt & Râu trắng bồng bềnh */}
                            <circle cx="155" cy="48" r="10.5" fill="#fed7aa" />
                            {/* Má hồng & Mắt cười */}
                            <circle cx="159" cy="49" r="2.2" fill="#fb7185" opacity="0.7" />
                            <circle cx="158" cy="45.5" r="1.3" fill="#0f172a" />
                            {/* Bộ râu trắng */}
                            <path
                                d="M145 49 C143 60, 152 67, 162 64 C169 62, 169 53, 164 49 Z"
                                fill="#ffffff"
                            />
                            {/* Mũ Giáng Sinh đỏ */}
                            <path
                                d="M144 44 C145 31, 158 28, 165 39 L136 39 C139 34, 144 36, 144 44 Z"
                                fill="#dc2626"
                            />
                            <path d="M146 37 Q 134 32, 130 40 Q 138 41, 147 42 Z" fill="#dc2626" />
                            <rect x="143" y="41" width="23" height="5" rx="2.5" fill="#ffffff" />
                            <circle cx="129" cy="40" r="4" fill="#ffffff" />

                            {/* Thân xe trượt tuyết uốn lượn */}
                            <path
                                d="M92 68 C92 94, 106 104, 132 104 L182 104 C196 104, 204 92, 200 76 C196 78, 190 83, 180 83 L124 83 C112 83, 105 75, 99 66 Z"
                                fill="url(#sleighRed)"
                                stroke="url(#goldTrim)"
                                strokeWidth="2.2"
                            />
                            {/* Hoa văn vàng trên thân xe */}
                            <path
                                d="M112 93 Q 146 99, 184 91"
                                stroke="url(#goldTrim)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                fill="none"
                            />

                            {/* === CHÚ TUẦN LỘC SỐ 1 (PHÍA SAU) === */}
                            <g transform="translate(232, 42)">
                                {/* Chân sau & Chân trước chuyển động */}
                                <g className="animate-leg-a">
                                    <line x1="14" y1="42" x2="6" y2="62" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                                    <line x1="42" y1="42" x2="52" y2="60" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                                </g>
                                <g className="animate-leg-b">
                                    <line x1="20" y1="42" x2="26" y2="62" stroke="#92400e" strokeWidth="4" strokeLinecap="round" />
                                    <line x1="47" y1="42" x2="39" y2="61" stroke="#92400e" strokeWidth="4" strokeLinecap="round" />
                                </g>
                                {/* Đuôi trắng */}
                                <ellipse cx="6" cy="31" rx="5" ry="3.5" transform="rotate(-25 6 31)" fill="#fef3c7" />
                                {/* Thân tuần lộc */}
                                <ellipse cx="30" cy="34" rx="23" ry="11" fill="#92400e" />
                                <ellipse cx="31" cy="38" rx="16" ry="5.5" fill="#fde68a" opacity="0.45" />
                                {/* Cổ & Đầu */}
                                <path d="M44 31 L54 15 L63 20 L51 38 Z" fill="#92400e" />
                                <ellipse cx="60" cy="17" rx="10" ry="7" fill="#a16207" />
                                {/* Gạc sừng */}
                                <path d="M55 11 L51 1 M53 6 L47 5 M59 10 L62 0 M61 5 L67 4" stroke="#fde68a" strokeWidth="2.2" strokeLinecap="round" />
                                {/* Vòng cổ chuông vàng */}
                                <path d="M45 29 L54 34" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
                                <circle cx="51" cy="33" r="2.8" fill="#fbbf24" />
                                {/* Mắt & Mũi */}
                                <circle cx="63" cy="15.5" r="1.4" fill="#0f172a" />
                                <circle cx="70" cy="17" r="2.5" fill="#451a03" />
                            </g>

                            {/* === CHÚ TUẦN LỘC DẪN ĐẦU RUDOLPH (MŨI ĐỎ PHÁT SÁNG) === */}
                            <g transform="translate(322, 36)">
                                {/* Chân phi nước đại lệch nhịp tự nhiên */}
                                <g className="animate-leg-b">
                                    <line x1="14" y1="42" x2="5" y2="62" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                                    <line x1="42" y1="42" x2="54" y2="59" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                                </g>
                                <g className="animate-leg-a">
                                    <line x1="20" y1="42" x2="27" y2="62" stroke="#92400e" strokeWidth="4" strokeLinecap="round" />
                                    <line x1="47" y1="42" x2="38" y2="61" stroke="#92400e" strokeWidth="4" strokeLinecap="round" />
                                </g>
                                {/* Đuôi */}
                                <ellipse cx="6" cy="31" rx="5" ry="3.5" transform="rotate(-25 6 31)" fill="#fef3c7" />
                                {/* Thân */}
                                <ellipse cx="30" cy="34" rx="23" ry="11" fill="#a16207" />
                                <ellipse cx="31" cy="38" rx="16" ry="5.5" fill="#fde68a" opacity="0.5" />
                                {/* Cổ & Đầu */}
                                <path d="M44 31 L54 15 L63 20 L51 38 Z" fill="#a16207" />
                                <ellipse cx="60" cy="17" rx="10" ry="7" fill="#b45309" />
                                {/* Gạc sừng */}
                                <path d="M55 11 L51 0 M53 6 L46 4 M59 10 L63 -1 M61 5 L68 3" stroke="#fef08a" strokeWidth="2.3" strokeLinecap="round" />
                                {/* Vòng cổ chuông vàng */}
                                <path d="M45 29 L54 34" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" />
                                <circle cx="51" cy="33" r="3" fill="#fde047" />
                                {/* Mắt */}
                                <circle cx="63" cy="15.5" r="1.5" fill="#0f172a" />
                                {/* Mũi đỏ Rudolph tỏa sáng dẫn đường */}
                                <circle cx="72" cy="17" r="11" fill="url(#rudolphGlow)" className="animate-pulse" />
                                <circle cx="71.5" cy="17" r="3.6" fill="#ef4444" />
                                <circle cx="70.5" cy="15.8" r="1.2" fill="#fecaca" />
                            </g>
                        </svg>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FlyingSanta;

