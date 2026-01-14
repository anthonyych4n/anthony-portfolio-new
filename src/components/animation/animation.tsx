import Image from 'next/image';
import { useState } from 'react';

export default function Animation() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="mt-auto pt-12">
            <div
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="relative inline-block"
            >
                <Image
                    src="/images/capy.png"
                    alt="Capybara"
                    width={320}
                    height={300}
                    className="rounded-xl opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-300"
                />
                <div 
                    className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-800/90 backdrop-blur-sm text-neutral-200 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
                >
                    My favorite animal is the Capybara
                </div>
            </div>
        </div>
    );
}