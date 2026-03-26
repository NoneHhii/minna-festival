import { motion } from "framer-motion";
import type React from "react";

interface prop {
    title: String,
    content: String,
    reverse: boolean,
    src: string
}

export const MotionItems: React.FC<prop> = ({
    title,
    content,
    reverse,
    src
}) => {
    return (
        <motion.div
            className={`flex flex-col-reverse md:flex items-center justify-center px-10 gap-10 md:gap-20 py-16 
                        ${reverse ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex-1 max-w-lg flex flex-col gap-10 text-white">
                <p className="text-2xl font-bold">
                    {title}
                </p>
                <p className="text-sm">
                    {content}
                </p>
                <button
                    className="relative text-white bg-blue-500 px-3 py-1 overflow-hidden group rounded-sm w-[100px] cursor-pointer"
                    onClick={() => {
                        window.location.href = 'https://parcmall.com.vn/about-us/';
                    }}
                >
                    <p className="inline-block text-sm transition-transform duration-300 group-hover:-translate-x-2">
                        Know More
                    </p>
                    <span
                        className="absolute right-4 opacity-0 transition-all
                                                duration-300 translate-x-0 
                                                group-hover:opacity-100 group-hover:translate-x-3"
                    >
                        →
                    </span>
                </button>
            </div>
            <div
                className="
                                justify-center flex-1 flex max-w-[450px]
                                transition-all duration-300 ease-in-out
                                hover:scale-105
                            "
            >
                <img src={src} alt="" className="rounded-full max-w-[250px] object-contain" />
            </div>
        </motion.div>
    )
}