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
].reverse()

export default function Journey() {
    return (
        <div className='text-white space-y-5'>
            <h1 className="">
                My Journey
            </h1>
            <div className="relative">
                {jobs.map((job, index) => (
                    <div key={index} className="mb-8 flex">
                        <div className="flex-none w-12 relative">
                            <div className="h-full w-0.5 bg-white absolute left-1/2 transform -translate-x-1/2"></div>
                            <div className="h-4 w-4 rounded-full bg-white border-4  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                        </div>
                        <div className="flex-grow pl-4">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h2 className="font-semibold">{job.title}</h2>
                                    <h3 className="text-md">{job.company}</h3>
                                    <p className="text-sm ">{job.period}</p>
                                </div>
                                <div className="flex-shrink-0 ml-4">
                                    <Image
                                        src={job.logoUrl}
                                        alt={`${job.company} logo`}
                                        width={40}
                                        height={40}
                                        className="rounded-lg hover:scale-125 transition ease-in-out duration-200"
                                    />
                                </div>
                            </div>
                            <p className="">{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}