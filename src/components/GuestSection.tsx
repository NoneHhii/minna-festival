import { motion } from "framer-motion";
import type { Guest } from "../data/guest";

const GuestSection: React.FC<{ guest: Guest; index: number }> = ({ guest, index }) => {
    return (
        <motion.div
            className={`flex flex-col ${guest.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
                       items-center justify-center px-6 sm:px-10 gap-10 sm:gap-12 py-12 sm:py-16 rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-[#0c1d22]/75 via-[#091317]/75 to-[#1a0b10]/70 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.4)] hover:border-amber-300/40 transition-colors duration-300`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
        >
            {/* Image Section */}
            <motion.div
                className="flex-1 flex justify-center max-w-[400px] md:max-w-[500px]"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative group">
                    <img
                        src={guest.image}
                        alt={guest.name}
                        className="w-full h-[380px] md:h-[450px] object-cover rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.4)] border border-amber-200/20
                                   group-hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                                   opacity-0 group-hover:opacity-100 transition-all duration-500 
                                   rounded-3xl flex items-end p-6">
                        <span className="text-amber-100 font-bold text-lg drop-shadow-lg">
                            🎄 {guest.name}
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="flex-1 max-w-lg flex flex-col gap-4 md:gap-6 text-left md:text-left items-start"
                initial={{ x: guest.reverse ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="space-y-1 md:space-y-3">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-black bg-gradient-to-r 
                                  from-white via-amber-200 to-rose-300 bg-clip-text text-transparent">
                        {guest.name}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-emerald-300/90">{guest.title}</p>
                </div>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
                    {guest.description}
                </p>

                <div className="space-y-2 w-full">
                    <p className="font-semibold text-amber-100 text-base md:text-lg">🎁 Thành tích nổi bật:</p>
                    <ul className="space-y-2.5 md:space-y-1.5">
                        {guest.achievements.map((achievement, idx) => (
                            <motion.li
                                key={idx}
                                className="flex items-start gap-2 text-xs sm:text-sm md:text-base text-slate-300 pl-4 md:pl-6 relative before:absolute 
                                           before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 md:before:w-2 md:before:h-2 before:bg-amber-400/80 
                                           before:rounded-full"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <span className="inline-block flex-shrink-0">-</span>
                                <span>{achievement}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <motion.button
                    className="group relative w-fit bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 
                               text-white px-6 py-2.5 md:px-8 md:py-3 rounded-2xl font-semibold overflow-hidden 
                               shadow-lg shadow-red-900/30 hover:shadow-amber-400/30 border border-amber-200/25 transition-all duration-300
                               self-start text-sm md:text-base cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        window.location.href = guest.link!; 
                    }}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Xem Profile
                        <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/25 
                                   transform -skew-x-12 -translate-x-[120%] group-hover:translate-x-[120%] 
                                   transition-transform duration-700" />
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default GuestSection;
