"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton: React.FC = () => {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <button 
            onClick={handleBackClick} 
            aria-label="back" 
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-200"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
    );
};

export default BackButton;