import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { type Artist } from '../data/artists';

interface BoothMapProps {
    artists: Artist[];
    selectedArtistId: number | null;
    onSelectArtist: (id: number) => void;
}

// Giả lập sơ đồ vị trí các gian hàng
const boothPositions = [
    { id: 'A1', x: 20, y: 20, width: 60, height: 60 },
    { id: 'A2', x: 120, y: 20, width: 60, height: 60 },
    { id: 'B1', x: 20, y: 120, width: 60, height: 60 },
    { id: 'B2', x: 120, y: 120, width: 60, height: 60 },
];

export const BoothMap: React.FC<BoothMapProps> = ({ artists, selectedArtistId, onSelectArtist }) => {
    return (
        <div className="w-full h-[400px] md:h-[500px] bg-[#0a161b]/90 rounded-2xl border border-amber-300/15 overflow-hidden relative flex items-center justify-center cursor-grab active:cursor-grabbing shadow-inner shadow-black/60 mb-12">
            <div className="absolute top-4 left-4 z-10 text-amber-100/80 text-sm flex items-center gap-4 bg-black/50 border border-amber-300/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-900/50 border border-amber-400/60 shadow-[0_0_8px_rgba(251,191,36,0.35)]"></div>
                    <span>Có Artist</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-white/5 border border-white/15"></div>
                    <span>Trống</span>
                </div>
            </div>

            {/* Vùng map có thể kéo thả */}
            <motion.div
                drag
                dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
                className="w-full h-full flex items-center justify-center origin-center"
            >
                {/* Áp dụng hiệu ứng Isometric (2.5D) bằng CSS */}
                <div
                    className="relative"
                    style={{
                        transform: 'rotateX(60deg) rotateZ(-45deg)',
                        transformStyle: 'preserve-3d',
                        width: '300px',
                        height: '300px'
                    }}
                >
                    {/* Sàn sự kiện mùa đông */}
                    <div
                        className="absolute inset-0 bg-[#102229] border-2 border-emerald-400/20 shadow-2xl rounded-xl overflow-hidden"
                        style={{
                            transform: 'translateZ(-10px)',
                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                    />

                    {/* Render các gian hàng */}
                    {boothPositions.map((booth) => {
                        const artistInBooth = artists.find(a => a.boothId === booth.id);
                        const isSelected = artistInBooth?.id === selectedArtistId;
                        const hasArtist = !!artistInBooth;

                        return (
                            <div
                                key={booth.id}
                                className={`group absolute rounded-lg border-2 flex items-center justify-center transition-colors duration-300 ${isSelected
                                        ? 'bg-amber-500/25 border-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.55)]'
                                        : hasArtist
                                            ? 'bg-red-900/35 border-amber-500/45 hover:bg-red-800/50 cursor-pointer'
                                            : 'bg-white/5 border-white/10'
                                    }`}
                                style={{
                                    left: booth.x,
                                    top: booth.y,
                                    width: booth.width,
                                    height: booth.height,
                                    transformStyle: 'preserve-3d'
                                }}
                                onClick={() => {
                                    if (artistInBooth) {
                                        onSelectArtist(artistInBooth.id);
                                    }
                                }}
                            >
                                {/* Nền gian hàng */}
                                <span className={`text-xl font-bold opacity-40 transition-transform duration-300 ${hasArtist ? 'text-amber-200 group-hover:scale-110' : 'text-slate-500'}`}>
                                    {booth.id}
                                </span>

                                {/* Icon Check-in dựng đứng lên */}
                                <div
                                    className="absolute inset-0 z-10 pointer-events-none"
                                    style={{
                                        transform: 'translateZ(10px) rotateZ(45deg) rotateX(-60deg)',
                                        transformOrigin: 'center center',
                                        transformStyle: 'preserve-3d'
                                    }}
                                >
                                    <motion.div
                                        className="w-full h-full flex flex-col items-center justify-center"
                                        animate={isSelected ? { y: -15, scale: 1.1 } : { y: 0, scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    >
                                        <div
                                            className="flex flex-col items-center relative"
                                            style={{ transform: 'translateZ(20px)' }}
                                        >
                                            {/* Tên Artist (như một cái tooltip) */}
                                            {artistInBooth && (
                                                <div className={`absolute bottom-full mb-2 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shadow-xl transition-all duration-300 origin-bottom pointer-events-none ${isSelected
                                                        ? 'opacity-100 scale-100 bg-gradient-to-r from-red-600 to-amber-500 text-white border border-amber-200/40'
                                                        : 'opacity-0 scale-50 bg-[#172830] text-amber-100 border border-amber-300/30 group-hover:opacity-100 group-hover:scale-100'
                                                    }`}>
                                                    🎄 {artistInBooth.name}
                                                </div>
                                            )}

                                            {/* MapPin Icon */}
                                            <MapPin
                                                size={isSelected ? 36 : 28}
                                                className={`transition-all duration-300 drop-shadow-xl origin-bottom ${isSelected
                                                        ? 'opacity-100 text-amber-300 fill-red-500/40'
                                                        : hasArtist
                                                            ? 'opacity-0 scale-50 text-red-400 fill-red-900/50 group-hover:opacity-100 group-hover:scale-125 group-hover:text-amber-300'
                                                            : 'opacity-0 scale-50 text-slate-400 fill-slate-800 group-hover:opacity-100 group-hover:scale-100'
                                                    }`}
                                                strokeWidth={isSelected ? 2.5 : 2}
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};
