import type React from "react";
import { motion } from "framer-motion";

export const ListSection : React.FC = (props: {list: []}) => {
    return <ul className="space-y-1">
        {guest.achievements.map((achievement, idx) => (
            <motion.li
                key={idx}
                className="flex items-center gap-3 text-slate-400 pl-6 relative before:absolute 
                            before:left-0 before:w-2 before:h-2 before:bg-slate-400/70 
                            before:rounded-full before:-translate-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
                - {achievement}
            </motion.li>
        ))}
    </ul>
}