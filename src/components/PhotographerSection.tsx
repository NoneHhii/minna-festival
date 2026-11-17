import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { photographers, type Photographer } from '../data/photographers';
import { ImageModal } from './ImageModal';

export const PhotographerSection: React.FC = () => {
    const [selectedPhotographer, setSelectedPhotographer] = useState<Photographer | null>(null);

    return (
        <section className="bg-transparent py-10 px-4 relative z-10 w-full" id="pt">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="p-3 text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-200 via-rose-300 to-emerald-300 bg-clip-text text-transparent mb-4">
                        🎄 Photographer ❄️
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        Gặp gỡ những nhiếp ảnh gia tài năng sẽ lưu giữ những khoảnh khắc Giáng Sinh tuyệt vời nhất của bạn.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photographers.map((pt, index) => (
                        <motion.div
                            key={pt.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#0b181d]/85 backdrop-blur-md rounded-2xl p-6 border border-amber-200/15 hover:border-amber-400/50 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center shadow-lg hover:shadow-red-500/20 relative"
                            onClick={() => setSelectedPhotographer(pt)}
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#152830] group-hover:border-amber-400 transition-colors duration-300">
                                <img
                                    src={pt.avatar}
                                    alt={pt.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                                {pt.name}
                            </h3>
                            <p className="text-emerald-300 font-medium text-sm uppercase tracking-wider">
                                {pt.specialty}
                            </p>
                            <div className="mt-auto mb-4">
                                <p className="text-amber-200/80 text-sm font-medium">
                                    Giá: {pt.cost}
                                </p>
                            </div>
                            <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                                {pt.description}
                            </p>

                            {/* Nút liên kết Facebook */}
                            {pt.fanpage && (
                                <a
                                    href={pt.fanpage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-red-600/20 text-amber-200 border border-amber-400/30 hover:bg-gradient-to-r hover:from-red-600 hover:to-amber-500 hover:text-white transition-all duration-300 text-sm font-semibold"
                                >
                                    <svg 
                                        className="w-4 h-4 fill-current" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    <span>Facebook Profile</span>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ImageModal
                isOpen={!!selectedPhotographer}
                onClose={() => setSelectedPhotographer(null)}
                images={selectedPhotographer?.samples || []}
                artistName={selectedPhotographer?.name || ""}
            />
        </section>
    );
};
