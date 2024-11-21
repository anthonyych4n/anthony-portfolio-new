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
        { href: "mailto:anthonyych4n@gmail.com", icon: <CiMail className='size-6 text-white hover:text-neutral-200' /> },
        { href: "https://www.linkedin.com/in/anthonyych4n/", icon: <CiLinkedin className='size-6 text-white hover:text-neutral-200' /> },
        { href: "https://github.com/anthonyych4n", icon: <IoLogoGithub className='size-6 text-white hover:text-neutral-200' /> },
        { href: "Resume101.pdf", icon: <IoIosPaper className='size-6 text-white hover:text-neutral-200' />, download: "Resume101.pdf" }
    ];

    const images = [
        { src: "/images/hiking.png", alt: "Hiking", width: 500, height: 500 },
        { src: "/images/me.png", alt: "me", width: 500, height: 500 },
        { src: "/images/myself.jpg", alt: "Myself", width: 500, height: 500 },

    ];

    const aboutMeParagraphs = [
        "Hi, I’m Anthony Chan, a third-year Computer Science student at the University of Calgary. I have a passion for web development and enjoy creating web applications using the latest technologies.",
        "In my free time, I love to explore new technologies, play volleyball, hike, workout, and trade stocks. I am always eager to learn and take on new challenges, whether it's a new programming language or a complex project.",
        "I have experience working with various programming languages and frameworks, including Python, Java, JavaScript, React, and Next.js. I am also familiar with tools like Git, GitHub, and AWS.",
        "Feel free to check out my projects and get in touch with me through my contact links."
    ];
    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen bg-neutral-900 space-x-5'>
                <svg className='animate-spin h-20 w-20 rounded-full' viewBox='0 0 800 800'>
                    <circle cx="400" cy="400" fill="none" r="375" strokeWidth="50" stroke="#ffffff" strokeDasharray="1200 1400" strokeLinecap="round" />
                </svg>
            </div>
        );
    }

    return (
        <div className="flex justify-center min-h-screen bg-neutral-900 text-white">
            <div className="w-full max-w-7xl flex relative">
                <div className="fixed ml-[150px] w-[500px] pt-40">
                    <div className='relative'>
                        <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                            <BackButton />
                        </div>
                        <h1 className="ml-12">About Me</h1>
                    </div>
                    <div className='flex flex-col space-y-3 mt-5 ml-12'>
                        {aboutMeParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <div className='flex flex-row space-x-2'>
                            {contactLinks.map((link, index) => (
                                <a key={index} href={link.href} download={link.download || undefined}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="ml-[700px] flex-1 pt-40 ">
                    <div className="flex flex-col space-y-10">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                quality={100}
                                className="rounded-lg hover:scale-110 transition ease-in-out duration-300"
                            />
                        ))}
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}