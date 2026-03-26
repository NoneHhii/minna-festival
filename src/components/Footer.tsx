import type React from "react";
import parcmall from "../assets/images/parcmall.png";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#16171d] py-16 px-6 md:px-20 border-t border-white/5">
            {/* - flex-col: Xếp dọc trên mobile
                - md:flex-row: Xếp ngang trên desktop
                - items-start: Căn lề trái cho các cột
            */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-8 w-full">

                {/* Khối Thông tin chung */}
                <div className="flex-2 flex flex-col gap-6">
                    <h3 className="text-[#77a8fa] font-bold text-3xl tracking-tight">
                        MINNA FESTIVAL
                    </h3>
                    <p className="w-full md:w-[70%] text-sm text-[#7d8791] leading-relaxed">
                        Một trung tâm giải trí nhằm nâng cao nhận thức và sự trân trọng của công chúng đối với TẤT CẢ CÁC SỞ THÍCH.
                    </p>
                    <img src={parcmall} alt="Parc Mall Logo" className="w-16 h-auto grayscale opacity-50 hover:opacity-100 transition-opacity" />
                </div>

                {/* Khối Liên kết nhanh */}
                <div className="flex-1">
                    <h4 className="text-white font-bold mb-6">Liên kết nhanh</h4>
                    <ul className="flex flex-col gap-4 text-sm">
                        <li>
                            <a href="#home" className="text-[#7d8791] hover:text-[#77a8fa] transition-colors">Trang chủ</a>
                        </li>
                        <li>
                            <a href="#partner" className="text-[#7d8791] hover:text-[#77a8fa] transition-colors">Đối tác</a>
                        </li>
                        <li>
                            <a href="#experience" className="text-[#7d8791] hover:text-[#77a8fa] transition-colors">Sự kiện</a>
                        </li>
                        <li>
                            <a href="#faq" className="text-[#7d8791] hover:text-[#77a8fa] transition-colors">FAQ</a>
                        </li>
                    </ul>
                </div>

                {/* Khối Mạng xã hội */}
                <div className="flex-1 flex flex-col items-start md:items-center">
                    <h4 className="text-white font-bold mb-6">Connect with us</h4>
                    <div className="flex gap-4">
                        {/* Facebook */}
                        <a
                            href="https://facebook.com/minnafestival"
                            target="_blank"
                            className="group relative p-4 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-blue-500 transition-colors">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>

                        {/* TikTok */}
                        <a
                            href="https://tiktok.com/@minnafestival"
                            target="_blank"
                            className="group relative p-4 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-pink-500 transition-colors">
                                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1 .01 3.32.01 6.64 0 9.95 0 .31-.02.63-.09.93-.48 2.33-2.13 4.39-4.39 5.05-1.14.33-2.34.41-3.5.22-2.15-.35-4.13-1.63-5.26-3.51-.69-1.14-1.01-2.47-.94-3.8.05-1.99.92-3.93 2.45-5.2 1.41-1.17 3.23-1.83 5.06-1.83.13 0 .26.01.4.01v4.11c-.53-.08-1.08-.06-1.61.03-1.1.2-2.1 1.01-2.5 2.06-.31.83-.24 1.83.21 2.59.45.74 1.25 1.21 2.1 1.3.93.1 1.88-.13 2.61-.71.55-.44.88-1.11.96-1.81.01-4.7 0-9.4 0-14.1z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bản quyền ở dưới cùng */}
            <div className="mt-16 pt-8 border-t border-white/5 text-center">
                <p className="text-[#7d8791] text-xs">
                    © 2026 Minna Festival. All rights reserved. Designed by Khoa.
                </p>
            </div>
        </footer>
    );
}