import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { artists, type Artist } from '../data/artists';
import { ImageModal } from './ImageModal';
import { BoothMap } from './BoothMap';

export const ArtistSection: React.FC = () => {
    const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
    const [focusedArtistId, setFocusedArtistId] = useState<number | null>(null);
    
    // Refs for scrolling to artist cards
    const artistRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

    const handleSelectArtistFromMap = (id: number) => {
        setFocusedArtistId(id);
        const element = artistRefs.current[id];
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-transparent py-20 px-4 relative z-10" id="art">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="p-3 text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-200 via-rose-300 to-emerald-300 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
                        <span>🎄 Khu Vực Gian Hàng 🎁</span>
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-8">
                        Khám phá sơ đồ gian hàng Giáng Sinh và các tác phẩm fanart, merchandise độc đáo nhất.
                    </p>
                </motion.div>

                {/* Bản đồ 3D */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <BoothMap 
                        artists={artists} 
                        selectedArtistId={focusedArtistId} 
                        onSelectArtist={handleSelectArtistFromMap} 
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artists.map((artist, index) => (
                        <motion.div
                            key={artist.id}
                            ref={(el) => { artistRefs.current[artist.id] = el; }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-[#0b181d]/85 backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 group cursor-pointer flex flex-col items-center text-center shadow-lg ${
                                focusedArtistId === artist.id 
                                    ? 'border-amber-400 shadow-amber-500/25 scale-[1.02]' 
                                    : 'border-amber-200/15 hover:border-amber-400/50 hover:shadow-red-500/20'
                            }`}
                            onClick={() => setSelectedArtist(artist)}
                            onMouseEnter={() => setFocusedArtistId(artist.id)}
                            onMouseLeave={() => setFocusedArtistId(null)}
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#152830] group-hover:border-amber-400 transition-colors duration-300">
                                <img
                                    src={artist.avatar}
                                    alt={artist.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                                {artist.name}
                            </h3>
                            <p className="text-emerald-300 font-medium mb-4 text-sm uppercase tracking-wider">
                                {artist.specialty}
                            </p>
                            <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                                {artist.description}
                            </p>

                            <button className="mt-auto px-6 py-2.5 bg-white/5 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-amber-500 text-white rounded-full text-sm font-semibold transition-all duration-300 w-full flex items-center justify-center gap-2 border border-white/10 group-hover:border-amber-200/30">
                                <Gift className="w-4 h-4" />
                                <span>Xem tác phẩm</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ImageModal
                isOpen={!!selectedArtist}
                onClose={() => setSelectedArtist(null)}
                images={selectedArtist?.samples || []}
                artistName={selectedArtist?.name || ""}
            />
        </section>
    );
};
