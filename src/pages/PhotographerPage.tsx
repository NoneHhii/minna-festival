import React from 'react';
import { PhotographerSection } from '../components/PhotographerSection';
import { SparkleStars } from '../components/SparkleStars';

export const PhotographerPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#050d11] flex flex-col items-center justify-center relative overflow-clip text-slate-100 px-4 py-16">
            <SparkleStars count={90} />
            <PhotographerSection />
        </div>
    );
};
