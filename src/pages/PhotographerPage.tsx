// import React from 'react';
// import { PhotographerSection } from '../components/PhotographerSection';

// export const PhotographerPage: React.FC = () => {
//     return (
//         <div className="w-full min-h-screen bg-[#060814] flex flex-col justify-center overflow-clip">
//             <PhotographerSection />
//         </div>
//     )
// }

import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sparkles } from 'lucide-react';
import { SparkleStars } from '../components/SparkleStars';

export const PhotographerPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#050714] flex flex-col items-center justify-center relative overflow-clip text-slate-100 px-4 py-16">
            {/* Hiệu ứng sao lấp lánh nền */}
            <SparkleStars />

            {/* Hào quang trăng mờ đằng sau */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* Khung Card Coming Soon Glassmorphism */}
            <motion.div 
                className="relative z-10 w-full max-w-2xl rounded-3xl border border-cyan-500/20 bg-slate-900/40 backdrop-blur-md p-8 sm:p-12 md:p-16 text-center shadow-[0_0_50px_rgba(6,8,20,0.6)] flex flex-col items-center justify-center my-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Badge hiệu ứng nhấp nháy */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(56,189,248,0.2)] mb-4">
                    <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 animate-pulse" />
                    <span>Minna Festival Lineup</span>
                </div>

                {/* Tiêu đề chính */}
                <h1 className="text-3xl p-3 sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-100 via-sky-200 to-indigo-300 bg-clip-text text-transparent mb-3 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                    Photographer
                </h1>

                {/* Chữ Coming Soon lớn rực rỡ */}
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-widest uppercase bg-gradient-to-b from-white via-cyan-100 to-slate-500 bg-clip-text text-transparent filter drop-shadow-[0_0_25px_rgba(56,189,248,0.3)] my-2">
                    Coming Soon
                </h2>

                <p className="text-slate-400 font-light text-xs sm:text-base max-w-md mt-2 leading-relaxed">
                    Danh sách các Photographer tham gia Minna Festival đang trong quá trình chuẩn bị. Thông tin chi tiết sẽ sớm xuất hiện tại đây!
                </p>

                {/* Nút quay về trang chủ */}
                <motion.a
                    href="/"
                    className="mt-8 relative group overflow-hidden px-8 py-3 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-slate-950 font-bold rounded-full shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] hover:scale-105 transition-all duration-300 text-xs sm:text-sm inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Quay lại Trang Chủ <Sparkles className="w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </motion.a>
            </motion.div>
        </div>
    );
};
