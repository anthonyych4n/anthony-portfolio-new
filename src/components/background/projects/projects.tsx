import Link from "next/link";

const projects = [
    {
        title: "Rate My Study Spot",
        description: "An app to study spots around the UBC campus"
    },
    {
        title: "Gambling Friends",
        description: "Poker winning and losing tracker"
    },
    {
        title: "Sustainabite",
        description: "2023 Code the Change Hackathon Project"
    }
];

export default function Projects() {
    return (
        <section>
            <h2 className='text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6'>
                Projects
            </h2>
            <div className="space-y-4">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className="group p-4 -mx-4 rounded-lg hover:bg-neutral-800/40 transition-all duration-200"
                    >
                        <h3 className="text-white font-medium group-hover:text-emerald-400 transition-colors duration-200">
                            {project.title}
                        </h3>
                        <p className="text-neutral-400 text-sm mt-1">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
            <Link 
                href="/projects" 
                className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white mt-4 group transition-colors duration-200"
            >
                View all projects
                <span className='group-hover:translate-x-0.5 transition-transform duration-200'>→</span>
            </Link>
        </section>
    );
}
