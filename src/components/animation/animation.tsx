import Image from 'next/image';
import { useState } from 'react';
interface Capybara {
    imageUrl: string
}

const Capybara: Capybara[] = [
    {
        imageUrl: "/images/capy.png"
    }
]

export default function Animation() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="flex pt-20">
            <div className="flex flex-col gap-2">
                <div
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="relative"
                >
                    <Image
                        src={Capybara[0].imageUrl}
                        alt="Capybara"
                        width={350}
                        height={350}
                        className="rounded-lg hover:scale-110 transition ease-in-out duration-200"
                    />
                    {showTooltip && (
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-sm px-2 py-1 rounded-lg">
                            My favorite animal is the Capybara
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}