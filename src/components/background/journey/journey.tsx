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
        title: "Student Developer",
        company: "Code the Change YYC",
        period: "Oct 2024 - Present",
        description: "Currently working on the Hackathon management tool which uses Next.js, Tailwind CSS, and AWS. The tool is used to manage the Code the Change Hackathon.",
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
            <h2 className='text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6'>
                Experience
            </h2>
            <div className="space-y-2">
                {jobs.map((job, index) => (
                    <div 
                        key={index} 
                        className="group p-4 -mx-4 rounded-lg hover:bg-neutral-800/40 transition-all duration-200"
                    >
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-white font-medium">{job.title}</h3>
                                    <span className="text-neutral-500 text-xs">·</span>
                                    <span className="text-neutral-400 text-sm">{job.company}</span>
                                </div>
                                <p className="text-neutral-500 text-xs mb-2">{job.period}</p>
                                <p className="text-neutral-400 text-sm leading-relaxed">{job.description}</p>
                            </div>
                            <div className="flex-shrink-0">
                                <Image
                                    src={job.logoUrl}
                                    alt={`${job.company} logo`}
                                    width={36}
                                    height={36}
                                    className="rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}