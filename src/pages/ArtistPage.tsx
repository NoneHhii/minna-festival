import React from 'react';
import { ArtistSection } from '../components/ArtistSection';

export const ArtistPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#12131a] flex flex-col justify-center overflow-clip">
            <ArtistSection />
        </div>
    )
}
