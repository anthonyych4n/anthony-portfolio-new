"use client"
const languages = ["Python", "Java", "C/C++", "Golang", "Bash/Shell", "Swift", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "MongoDB"];
const frameworks = ["Git", "GitHub", "React", "Next.js", "Tailwind CSS", "Node.js", "AWS Amplify", "Supabase", "Docker", "Kubernetes", "Vector Databases (ChromaDB)", "Unit Testing", "Integration Testing", "Linux", "Unix", "Figma", "Framer Motion"];

export default function Skills() {
    return (
        <section>
            <h2 className='text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6'>
                Skills
            </h2>
            <div className="space-y-6">
                <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Languages</p>
                    <div className="flex flex-wrap gap-2">
                        {languages.map((language, index) => (
                            <span 
                                key={language}
                                style={{ animationDelay: `${index * 0.03}s` }}
                                className="bg-neutral-800/80 text-neutral-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/80 hover:scale-105 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 cursor-default"
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Frameworks & Tools</p>
                    <div className="flex flex-wrap gap-2">
                        {frameworks.map((framework, index) => (
                            <span 
                                key={framework}
                                style={{ animationDelay: `${index * 0.03}s` }}
                                className="bg-neutral-800/80 text-neutral-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/80 hover:scale-105 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 cursor-default"
                            >
                                {framework}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}