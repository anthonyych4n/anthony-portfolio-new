
export default function Skills() {

    const languages = ["Python", "Java", "C/C++", "HTML", "CSS", "JavaScript", "Typescript", "SQL", "MongoDB"];
    const frameworks = ["Git", "GitHub", "React", "Next.js", "Tailwind CSS", "Node.js", "AWS Amplify Gen 2", "Figma", "Framer Motion"];

    return (
        <div className="text-white flex flex-col space-y-5">
            <h1>Skills</h1>
            <div className="space-y-2">
                <div className=""> Languages</div>
                <div className="flex flex-wrap gap-3 mb-6">
                    {languages.map((language =>
                        <span key={language} className="bg-neutral-800 px-3 py-1 rounded-full text-sm hover:duration-200 hover:scale-125 hover:bg-neutral-600 transition ease-in-out">{language}</span>
                    ))}
                </div>
            </div>
            <div className="space-y-2">
                <div> Framework, Tools, and Libraries</div>
                <div className="flex flex-wrap gap-3 mb-6">
                    {frameworks.map((framework =>
                        <span key={framework} className="bg-neutral-800 px-3 py-1 rounded-full text-sm hover:duration-200 hover:scale-125 hover:bg-neutral-600 transition ease-in-out">{framework}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}