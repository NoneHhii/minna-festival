import { useEffect, useState } from "react";
import { mascotPositions, messages } from "../data/chibi";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import dragonAnimation from "../assets/images/fly.json"
import DragonAnimation from "./DragonAnimation";

const ChibiMascot: React.FC = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
    // console.log(dragonAnimation);

    // Auto cycle messages
    useEffect(() => {
        const messageInterval = setInterval(() => {
            setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }, messages[currentMessageIndex]?.duration || 4000);
        return () => clearInterval(messageInterval);
    }, [currentMessageIndex]);

    // Auto move mascot
    useEffect(() => {
        const moveInterval = setInterval(() => {
            setCurrentPositionIndex((prev) => (prev + 1) % mascotPositions.length);
        }, 7000);
        return () => clearInterval(moveInterval);
    }, []);

    const currentPosition = mascotPositions[currentPositionIndex];
    const currentMessage = messages[currentMessageIndex];

    return (
        <motion.div
            className="fixed z-40 pointer-events-none select-none"
            style={{
                left: `${currentPosition.x}vw`,
                top: `${currentPosition.y}vh`,
                transform: `translate(-50%, -50%)`,
                width: "150px", // 2. Điều chỉnh kích thước khung chứa Lottie
            }}
            animate={{
                y: [0, -10, 0], // Tạo hiệu ứng bay lên xuống nhẹ nhàng
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {/* 3. Thay thế toàn bộ code vẽ div cũ bằng Lottie Component */}
            <div className="relative w-full h-full drop-shadow-2xl">
                <DragonAnimation />
            </div>

            {/* 4. Speech Bubble (Giữ nguyên phần này) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentMessageIndex}
                    className="absolute -top-12 -left-1/2 transform translate-x-1/2 w-48 md:w-64 p-3 bg-white/95 backdrop-blur-xl 
                               rounded-2xl shadow-2xl border border-white/50 text-center text-xs md:text-sm font-semibold 
                               text-gray-800 flex items-center justify-center min-h-[50px] md:min-h-[60px]
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
    );
};

export default ChibiMascot;