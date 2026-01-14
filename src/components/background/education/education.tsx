"use client"
const education = [
    {
        school: "University of Calgary",
        degree: "Bachelors of Science in Computer Science",
        graduation: "Expected Graduation 2027"
    }
];

export default function Education() {
    return (
        <section>
            <h2 className='text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6'>
                Education
            </h2>
            <div className="space-y-2">
                {education.map((edu, index) => (
                    <div 
                        key={index} 
                        className="group relative p-4 -mx-4 rounded-xl hover:bg-gradient-to-r hover:from-neutral-800/80 hover:to-neutral-800/40 transition-all duration-300 hover-lift"
                    >
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />
                        <div className="relative">
                            <h3 className="text-white font-medium group-hover:translate-x-0.5 transition-transform duration-300">{edu.school}</h3>
                            <p className="text-neutral-400 text-sm mt-1">{edu.degree}</p>
                            <span className="inline-block mt-3 bg-neutral-800/80 text-neutral-300 px-3 py-1.5 rounded-full text-xs font-medium border border-neutral-700/50 group-hover:border-neutral-600/50 transition-colors duration-300">
                                {edu.graduation}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}