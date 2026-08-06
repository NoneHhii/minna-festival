import React from 'react';
import { PhotographerSection } from '../components/PhotographerSection';

export const PhotographerPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#060814] flex flex-col justify-center overflow-clip">
            <PhotographerSection />
        </div>
    )
}
