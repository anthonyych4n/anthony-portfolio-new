"use client"
import BackButton from '@/components/buttons/backbutton';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoLogoGithub, IoMdGlobe } from 'react-icons/io';

export default function Projects() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            title: "Rate My Study Spot",
            role: "Full Stack Developer",
            description: "An app made for students to rate and review study spots",
            github: "https://github.com/ratemystudyspot/website",
            website: "https://ratemystudyspot.ca",
            imageUrl: "/images/ratemystudyspot.png",
            skills: ["React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"]
        },
        {
            title: "Gambling Friends",
            role: "Full Stack Developer",
            description: "Poker winning and losing tracker",
            github: "https://github.com/gamblingfriends/website",
            website: "https://main.d2mymh01to4n81.amplifyapp.com/",
            imageUrl: "/images/gambling.png",
            skills: ["React", "Node.js", "AWS Amplify", "Tailwind CSS", "TypeScript"]
        },
        {
            title: "Sustainabite",
            role: "Developer",
            description: "2023 Code the Change Hackathon Project",
            github: "https://github.com/anthonyych4n/Sustainabite",
            website: "https://devpost.com/software/sustainabite",
            imageUrl: "/images/sustainabite.png",
            skills: ["React", "Node.js", "Flask", "HTML/CSS", "JavaScript"],
        },
        {
            title: "Wise Wing",
            role: "UI/UX Designer",
            description: "2022 CalgaryHacks 2nd Place Project",
            website: "https://devpost.com/software/wise-wing",
            imageUrl: "/images/wisewing.png",
            skills: ["Figma"]
        },
        {
            title: "TBA",
            role: "TBA",
            description: "In the workings",
            github: "",
            website: "",
            imageUrl: "/images/tba.png",
            skills: ["TBA"]
        }
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
                            <h1 className='text-2xl font-semibold'>My Projects</h1>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-neutral-300 leading-relaxed text-sm'>
                                I have been working on a variety of projects that span different domains and technologies.
                                These projects include web applications, mobile applications, and hackathon projects.
                                I enjoy tackling new challenges and learning new technologies to build innovative solutions.
                            </p>
                            <p className='text-neutral-300 leading-relaxed text-sm'>
                                I am currently trying to learn more about machine learning/AI and I am trying to build
                                a trading bot that can predict stock prices and trade for me based off my own trading style!
                            </p>
                            <p className='text-neutral-300 leading-relaxed text-sm'>
                                To the right is a list of some of the projects I have worked on. Each project includes a brief description,
                                a link to the GitHub repository, and a link to the live website if available.
                            </p>
                        </div>
                    </div>
                    <div className='flex-1 py-24'>
                        <div className="space-y-4">
                            {projects.map((project, index) => (
                                <div 
                                    key={index} 
                                    className="group p-4 -mx-4 rounded-lg hover:bg-neutral-800/50 transition-all duration-200"
                                >
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <div>
                                            <h2 className="text-white font-medium text-lg">{project.title}</h2>
                                            <p className="text-neutral-500 text-xs">{project.role}</p>
                                        </div>
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            width={36}
                                            height={36}
                                            className="bg-white rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                                        />
                                    </div>
                                    <p className="text-neutral-400 text-sm mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.skills.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex} 
                                                className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md text-xs font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                aria-label="GitHub" 
                                                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-200"
                                            >
                                                <IoLogoGithub size={18} />
                                            </a>
                                        )}
                                        {project.website && (
                                            <a 
                                                href={project.website} 
                                                aria-label="Website" 
                                                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-200"
                                            >
                                                <IoMdGlobe size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}