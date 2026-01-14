"use client"
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
            <h2 className='text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6'>
                Projects
            </h2>
            <div className="space-y-2">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className="group relative p-4 -mx-4 rounded-xl hover:bg-gradient-to-r hover:from-neutral-800/80 hover:to-neutral-800/40 transition-all duration-300 cursor-pointer hover-lift"
                    >
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />
                        <div className="relative">
                            <div className="flex items-center gap-2">
                                <h3 className="text-white font-medium group-hover:translate-x-1 transition-transform duration-300">
                                    {project.title}
                                </h3>
                                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-neutral-400 group-hover:translate-x-1">
                                    →
                                </span>
                            </div>
                            <p className="text-neutral-400 text-sm mt-1">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 p-3 -mx-3 rounded-lg bg-neutral-800/30 border border-neutral-700/30 border-dashed">
                <p className="text-neutral-500 text-sm flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-500 animate-pulse" />
                    More projects coming soon — updating portfolio
                </p>
            </div>
            <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white mt-6 group transition-all duration-300"
            >
                <span className="relative">
                    View all projects
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </span>
                <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
            </Link>
        </section>
    );
}
