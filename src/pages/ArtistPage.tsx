import React from 'react';
import { ArtistSection } from '../components/ArtistSection';
import { SparkleStars } from '../components/SparkleStars';

export const ArtistPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#050d11] flex flex-col justify-center relative overflow-clip">
            <SparkleStars count={90} />
            <ArtistSection />
        </div>
    );
};
