import Image from 'next/image'

type Job = {
    title: string
    company: string
    period: string
    description: string
    imageUrl: string
}

export default function Journey({ jobs = defaultJobs }: { jobs?: Job[] }) {
    return (
        <div className=" text-white min-h-screen ">
            <h1 className=" font-bold mb-8 ">My Professional Journey</h1>
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white" />
                {jobs.map((job, index) => (
                    <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="w-1/2" />
                        <div className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-full z-10" />
                            {index !== jobs.length - 1 && (
                                <div className="h-full w-1 bg-white absolute top-6" />
                            )}
                        </div>
                        <div className="w-1/2 p-4">
                            <div className=" rounded-lg p-6 relative">
                                <div className="absolute top-4 right-4 w-16 h-16 rounded-full overflow-hidden">
                                    <Image
                                        src={job.imageUrl}
                                        alt={`${job.company} logo`}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                                <h3 className="text-lg text-gray-300 mb-1">{job.company}</h3>
                                <p className="text-sm text-gray-400 mb-4">{job.period}</p>
                                <p className="text-gray-300">{job.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const defaultJobs: Job[] = [
    {
        title: "Senior Developer",
        company: "Tech Innovators Inc.",
        period: "2020 - Present",
        description: "Leading development teams in creating cutting-edge web applications using React and Node.js. Implementing microservices architecture and mentoring junior developers.",
        imageUrl: ""
    },
    {
        title: "Full Stack Developer",
        company: "Digital Solutions Ltd.",
        period: "2017 - 2020",
        description: "Developed and maintained various client projects using Angular and Django frameworks. Implemented CI/CD pipelines and improved overall code quality and test coverage.",
        imageUrl: ""
    },
    {
        title: "Junior Developer",
        company: "StartUp Ventures",
        period: "2015 - 2017",
        description: "Assisted in the development of mobile applications using React Native and Firebase. Gained experience in agile methodologies and version control systems.",
        imageUrl: ""
    }
]