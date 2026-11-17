import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from "react";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    artistName: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, images, artistName }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const activeImage =
        isOpen && images.length > 0
            ? selectedImage && images.includes(selectedImage)
                ? selectedImage
                : images[0]
            : null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-[400] backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[410] w-[95%] md:w-[90%] max-w-6xl h-[90vh] bg-[#0b181d] rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-amber-300/20"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 md:p-6 border-b border-amber-300/15 bg-[#071115]">
                            <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-300 to-emerald-300">
                                🎄 {artistName ? `${artistName} - Sample` : "Sample"}
                            </h3>
                            <button
                                onClick={onClose}
                                className="text-slate-400 hover:text-amber-200 transition-colors p-2 rounded-full hover:bg-white/10"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="flex flex-col md:flex-row p-4 md:p-6 overflow-hidden flex-1">
                            {images.length > 0 ? (
                                <>
                                    {/* Main Image */}
                                    <div className="flex-1 md:w-3/4 h-[40vh] md:h-full bg-black/60 rounded-xl overflow-hidden shadow-lg mr-0 md:mr-6 mb-4 md:mb-0 flex items-center justify-center relative border border-white/5">
                                        <AnimatePresence mode="wait">
                                            {activeImage && (
                                                <motion.img
                                                    key={activeImage}
                                                    initial={{ opacity: 0, filter: "blur(4px)" }}
                                                    animate={{ opacity: 1, filter: "blur(0px)" }}
                                                    exit={{ opacity: 0, filter: "blur(4px)" }}
                                                    transition={{ duration: 0.3 }}
                                                    src={activeImage}
                                                    alt="Main sample artwork"
                                                    className="w-full h-full object-contain p-2"
                                                />
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Thumbnail List */}
                                    <div className="md:w-1/4 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto custom-scrollbar scrollbar-hidden md:pr-2 pb-2 md:pb-0 h-[15vh] md:h-full p-2">
                                        {images.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className={`relative flex-shrink-0 group rounded-xl overflow-hidden bg-black/50 shadow-md cursor-pointer transition-all duration-300 w-24 h-24 md:w-full md:h-40 ${activeImage === img
                                                    ? 'ring-2 ring-amber-400 scale-[1.02] opacity-100'
                                                    : 'opacity-50 hover:opacity-100 ring-1 ring-white/10'
                                                    }`}
                                                onClick={() => setSelectedImage(img)}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Sample thumbnail ${idx + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center justify-center w-full h-full text-slate-400">
                                    Chưa có ảnh mẫu
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
