import { useEffect, useState } from "react";
import { mascotPositions, messages } from "../data/chibi";
import { AnimatePresence, motion } from "framer-motion";
import fly1 from "../assets/images/fly1.png";
import fly2 from "../assets/images/fly2.png";
import fly3 from "../assets/images/fly3.png";
import fly4 from "../assets/images/fly4.png";
import fly5 from "../assets/images/fly5.png";
import fly6 from "../assets/images/fly6.png";
import fly7 from "../assets/images/fly7.png";
import fly8 from "../assets/images/fly8.png";
import fly9 from "../assets/images/fly9.png";
import fly10 from "../assets/images/fly10.png";

const dragonFrames = [
    fly1, fly2, fly3, fly4, fly5, fly6, fly7, fly8, fly9, fly10
];

const ChibiMascot: React.FC = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
    const [frameIndex, setFrameIndex] = useState(0);

    // 1. Logic chạy animation 10 khung hình
    useEffect(() => {
        const frameInterval = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % dragonFrames.length);
        }, 150);
        return () => clearInterval(frameInterval);
    }, []);

    // 2. Logic đổi tin nhắn
    useEffect(() => {
        const messageInterval = setInterval(() => {
            setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }, messages[currentMessageIndex]?.duration || 4000);
        return () => clearInterval(messageInterval);
    }, [currentMessageIndex]);

    // 3. Logic đổi vị trí Mascot
    useEffect(() => {
        const moveInterval = setInterval(() => {
            setCurrentPositionIndex((prev) => (prev + 1) % mascotPositions.length);
        }, 7000);
        return () => clearInterval(moveInterval);
    }, []);

    const currentPosition = mascotPositions[currentPositionIndex];
    const currentMessage = messages[currentMessageIndex];

    return (
        <div
            className="fixed z-40 pointer-events-none select-none"
            style={{
                left: `${currentPosition.x}vw`,
                top: `${currentPosition.y}vh`,
                transform: `translate(-50%, -50%)`,
                transition: `left 3s ease-in-out, top 3s ease-in-out`
            }}
        >
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [-30, 30, -30],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <img
                        src={dragonFrames[frameIndex]}
                        alt="Dragon Mascot"
                        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                    />
                </div>

                {/* Speech Bubble mang sắc màu lễ hội Giáng Sinh */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentMessageIndex}
                        className="absolute -top-16 -left-1/2 transform translate-x-1/2 w-48 md:w-64 p-3 bg-white/95 backdrop-blur-xl 
                                   rounded-2xl shadow-[0_8px_25px_rgba(220,38,38,0.25)] border-2 border-red-400/60 text-center text-xs md:text-sm font-semibold 
                                   text-red-950 flex items-center justify-center min-h-[50px]
                                   before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 
                                   before:w-0 before:h-0 before:border-l-4 before:border-r-4 before:border-t-4 
                                   before:border-transparent before:border-t-white"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {currentMessage.text}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default ChibiMascot;
