"use client"
import Image from 'next/image'

interface Job {
    title: string
    company: string
    period: string
    description: string
    logoUrl: string
}

const jobs: Job[] = [
    {
        title: "Software Engineer Intern",
        company: "Cisco",
        period: "May 2025 - May 2026",
        description: "SBG - Orbital 🦠\nOccasional coffee boy",
        logoUrl: "/images/cisco.svg"
    },
    {
        title: "Tech Lead",
        company: "Code the Change YYC",
        period: "Oct 2024 - Present",
        description: "Managing development of the Code the Change YYC website and other projects.",
        logoUrl: "/images/ctclogo.png"
    },
    {
        title: "Co-Founder",
        company: "Stealth",
        period: "Feb 2023 - Nov 2023",
        description: "Designed and developed a mobile application using React Native, improving user experience and engagement.",
        logoUrl: "/images/stealth.png"
    }
]

export default function Journey() {
    return (
        <section>
            <h2 className='text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6'>
                Experience
            </h2>
            <div className="space-y-2">
                {jobs.map((job, index) => (
                    <div 
                        key={index} 
                        className="group relative p-4 -mx-4 rounded-xl hover:bg-gradient-to-r hover:from-neutral-800/80 hover:to-neutral-800/40 transition-all duration-300 hover-lift"
                    >
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />
                        <div className="relative flex justify-between items-start gap-4">
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-medium group-hover:translate-x-0.5 transition-transform duration-300">{job.title}</h3>
                                <p className="text-neutral-400 text-sm">{job.company}</p>
                                <p className="text-neutral-500 text-xs mb-2">{job.period}</p>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {job.description.split('\n').map((line, i, arr) => (
                                        <span key={i}>
                                            {line}
                                            {i < arr.length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <Image
                                    src={job.logoUrl}
                                    alt={`${job.company} logo`}
                                    width={40}
                                    height={40}
                                    className="rounded-xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}