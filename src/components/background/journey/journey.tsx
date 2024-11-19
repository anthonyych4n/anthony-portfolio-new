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
        title: "Software Engineer",
        company: "Tech Innovators",
        period: "2021 - Present",
        description: "Leading development of cutting-edge web applications using React and Node.js.",
        logoUrl: ""
    },
    {
        title: "Frontend Developer",
        company: "Creative Solutions",
        period: "2019 - 2021",
        description: "Designed and implemented responsive user interfaces for various client projects.",
        logoUrl: ""
    },
    {
        title: "Junior Developer",
        company: "Startup Ventures",
        period: "2017 - 2019",
        description: "Contributed to the development of mobile apps and gained experience in agile methodologies.",
        logoUrl: ""
    }
]

export default function Journey() {
    return (
        <div className=" text-white min-h-screen ">
            <h1 className="text-3xl font-bold mb-8">My Journey</h1>
            <div className="relative">
                {jobs.map((job, index) => (
                    <div key={index} className="mb-8 flex">
                        <div className="flex flex-col items-center mr-4">
                            <div className={`w-4 h-4 bg-white rounded-full ${index === 0 ? 'mt-5' : ''} ${index === jobs.length - 1 ? 'mb-5' : ''}`}></div>
                            {index < jobs.length - 1 && <div className="w-0.5 bg-white flex-grow"></div>}
                        </div>
                        <div className="flex-grow pt-1">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h2 className="text-xl font-semibold">{job.title}</h2>
                                    <h3 className="text-lg text-gray-300">{job.company}</h3>
                                    <p className="text-sm text-gray-400">{job.period}</p>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <Image
                                        src={job.logoUrl}
                                        alt={`${job.company} logo`}
                                        width={50}
                                        height={50}
                                        className="rounded-full bg-white"
                                    />
                                </div>
                            </div>
                            <p className="text-gray-300">{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}