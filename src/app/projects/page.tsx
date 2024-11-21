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
            <div className='flex justify-center items-center min-h-screen bg-neutral-900 space-x-5'>
                <svg className='animate-spin h-20 w-20 rounded-full' viewBox='0 0 800 800'>
                    <circle cx="400" cy="400" fill="none" r="375" strokeWidth="50" stroke="#ffffff" strokeDasharray="1200 1400" strokeLinecap="round" />
                </svg>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
            <div className="flex-grow flex justify-center">
                <div className="w-full max-w-7xl flex relative">
                    <div className="fixed ml-[150px] w-[500px] pt-40">
                        <div className='relative'>
                            <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                                <BackButton />
                            </div>
                            <h1 className="font-bold ml-12">About My Projects</h1>
                        </div>
                        <div className='flex flex-col space-y-5 mt-5 ml-12'>
                            <p>
                                I have been working on a variety of projects that span different domains and technologies.
                                These projects include web applications, mobile applications, and hackathon projects.
                                I enjoy tackling new challenges and learning new technologies to build innovative solutions.
                            </p>
                            <p>
                                I am currently trying to learn more about machine learning/AI and I am trying to build
                                a trading bot that can predict stock prices and trade for me based off my own trading style!
                            </p>
                            <p>
                                To the right is a list of some of the projects I have worked on. Each project includes a brief description,
                                a link to the GitHub repository, and a link to the live website if available.
                            </p>
                        </div>
                    </div>
                    <div className="ml-[700px] flex-1 pt-40 pl-5 overflow-y-auto">
                        <div className="flex flex-col space-y-10">
                            {projects.map((project, index) => (
                                <div key={index} className="relative flex flex-col space-y-3 max-w-96">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl ">{project.title}</h2>
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            width={40}
                                            height={40}
                                            className="bg-white rounded-lg hover:scale-110 transition ease-in-out duration-300"
                                        />
                                    </div>
                                    <h3 className="text-md italic">{project.role}</h3>
                                    <p>{project.description}</p>
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.skills.map((skill, index) => (
                                            <span key={index} className="bg-neutral-800 px-3 py-1 rounded-full text-sm hover:duration-200 hover:scale-125 hover:bg-neutral-600 transition ease-in-out">{skill}</span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-2">
                                        {project.github && (
                                            <a href={project.github} aria-label="GitHub" className="hover:text-neutral-200">
                                                <IoLogoGithub size={24} />
                                            </a>
                                        )}
                                        {project.website && (
                                            <a href={project.website} aria-label="Website" className="hover:text-neutral-200">
                                                <IoMdGlobe size={24} />
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