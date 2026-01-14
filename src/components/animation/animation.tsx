import Image from 'next/image';
import { useState } from 'react';

export default function Animation() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="pt-8 opacity-0 animate-fade-in-up stagger-4">
            <div
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="relative inline-block origin-top-left group"
            >
                <div className="absolute -inset-2 bg-gradient-to-r from-neutral-700/20 via-neutral-600/10 to-neutral-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                    src="/images/capy.png"
                    alt="Capybara"
                    width={320}
                    height={300}
                    className="relative rounded-xl group-hover:scale-[1.02] transition-all duration-500 ease-out"
                />
                <div 
                    className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-800/90 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 border border-neutral-700/50 shadow-xl ${showTooltip ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`}
                >
                    <span className="relative z-10">My favorite animal is the Capybara 🧡</span>
                </div>
            </div>
        </div>
    );
}