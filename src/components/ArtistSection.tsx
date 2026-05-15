import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { artists, type Artist } from '../data/artists';
import { ImageModal } from './ImageModal';

export const ArtistSection: React.FC = () => {
    const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

    return (
        <section className="bg-[#12131a] py-20 px-4" id="art">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="p-3 text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        Gian hàng
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Khám phá các gian hàng với những tác phẩm fanart và merchandise độc đáo nhất.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artists.map((artist, index) => (
                        <motion.div
                            key={artist.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1a1b23] rounded-2xl p-6 border border-white/5 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/20"
                            onClick={() => setSelectedArtist(artist)}
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#242632] group-hover:border-blue-500 transition-colors duration-300">
                                <img
                                    src={artist.avatar}
                                    alt={artist.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {artist.name}
                            </h3>
                            <p className="text-blue-400 font-medium mb-4 text-sm uppercase tracking-wider">
                                {artist.specialty}
                            </p>
                            <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                                {artist.description}
                            </p>

                            <button className="mt-auto px-6 py-2 bg-white/5 group-hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-colors duration-300 w-full">
                                Xem tác phẩm
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
