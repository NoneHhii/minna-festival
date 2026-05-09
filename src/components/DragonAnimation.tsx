import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import dragonAnimation from "../assets/images/fly.json";

const DragonAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: containerRef.current!,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: dragonAnimation,
            
        });

        return () => anim.destroy();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-[150px] h-[150px]"
        />
    );
};

export default DragonAnimation;