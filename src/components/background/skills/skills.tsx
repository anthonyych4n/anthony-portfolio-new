const languages = ["Python", "Java", "C/C++", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "MongoDB"];
const frameworks = ["Git", "GitHub", "React", "Next.js", "Tailwind CSS", "Node.js", "AWS Amplify", "Figma", "Framer Motion"];

export default function Skills() {
    return (
        <section>
            <h2 className='text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6'>
                Skills
            </h2>
            <div className="space-y-6">
                <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Languages</p>
                    <div className="flex flex-wrap gap-2">
                        {languages.map((language) => (
                            <span 
                                key={language} 
                                className="bg-neutral-800/60 text-neutral-300 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-neutral-700/60 transition-colors duration-200"
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Frameworks & Tools</p>
                    <div className="flex flex-wrap gap-2">
                        {frameworks.map((framework) => (
                            <span 
                                key={framework} 
                                className="bg-neutral-800/60 text-neutral-300 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-neutral-700/60 transition-colors duration-200"
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