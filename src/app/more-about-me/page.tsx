"use client"
import BackButton from '@/components/buttons/backbutton';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { IoIosPaper, IoLogoGithub } from 'react-icons/io';

export default function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    
    const contactLinks = [
        { href: "mailto:anthonyych4n@gmail.com", icon: <CiMail className='size-6' /> },
        { href: "https://www.linkedin.com/in/anthonyych4n/", icon: <CiLinkedin className='size-6' /> },
        { href: "https://github.com/anthonyych4n", icon: <IoLogoGithub className='size-6' /> },
        { href: "resume2025summer.pdf", icon: <IoIosPaper className='size-6' />, download: "resume2025.pdf" }
    ];

    const images = [
        { src: "/images/hiking.png", alt: "Hiking", width: 500, height: 500 },
        { src: "/images/me.png", alt: "me", width: 500, height: 500 },
        { src: "/images/myself.png", alt: "Myself", width: 500, height: 500 },
    ];

    const aboutMeParagraphs = [
        "Hi, I'm Anthony Chan, a third-year Computer Science student at the University of Calgary. I have a passion for web development and enjoy creating web applications using the latest technologies.",
        "In my free time, I love to explore new technologies, play volleyball, hike, workout, and trade stocks. I am always eager to learn and take on new challenges, whether it's a new programming language or a complex project.",
        "I have experience working with various programming languages and frameworks, including Python, Java, JavaScript, React, and Next.js. I am also familiar with tools like Git, GitHub, and AWS.",
        "Feel free to check out my projects and get in touch with me through my contact links."
    ];

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen bg-neutral-900'>
                <svg className='animate-spin h-16 w-16' viewBox='0 0 800 800'>
                    <circle cx="400" cy="400" fill="none" r="375" strokeWidth="40" stroke="#ffffff" strokeDasharray="1200 1400" strokeLinecap="round" />
                </svg>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <div className='max-w-6xl mx-auto px-8'>
                <div className='flex gap-24'>
                    <div className='w-[420px] flex-shrink-0 sticky top-0 h-screen py-24'>
                        <div className='flex items-center gap-4 mb-6'>
                            <BackButton />
                            <h1 className='text-2xl font-semibold'>About Me</h1>
                        </div>
                        <div className='space-y-4'>
                            {aboutMeParagraphs.map((paragraph, index) => (
                                <p key={index} className='text-neutral-300 leading-relaxed text-sm'>{paragraph}</p>
                            ))}
                            <div className='flex gap-1 pt-4'>
                                {contactLinks.map((link, index) => (
                                    <a 
                                        key={index} 
                                        href={link.href} 
                                        download={link.download || undefined}
                                        className='p-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-200'
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 py-24'>
                        <div className="space-y-6">
                            {images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    quality={100}
                                    className="rounded-xl hover:opacity-90 transition-opacity duration-300"
                                />
                            ))}
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}