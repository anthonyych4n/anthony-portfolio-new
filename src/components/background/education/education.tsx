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
            <h2 className='text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6'>
                Education
            </h2>
            <div className="space-y-4">
                {education.map((edu, index) => (
                    <div 
                        key={index} 
                        className="p-4 -mx-4 rounded-lg hover:bg-neutral-800/40 transition-all duration-200"
                    >
                        <h3 className="text-white font-medium">{edu.school}</h3>
                        <p className="text-neutral-400 text-sm mt-1">{edu.degree}</p>
                        <span className="inline-block mt-3 bg-neutral-800/80 text-neutral-300 px-3 py-1 rounded-full text-xs font-medium">
                            {edu.graduation}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}