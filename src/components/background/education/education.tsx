export default function Education() {
    const education = [
        {
            school: "University of Calgary",
            degree: "Bachelors of Science in Computer Science",
            graduation: "Expected Graduation 2027"
        }
    ];

    return (
        <div className="flex flex-col space-y-5 text-white">
            <h1>Education</h1>
            {education.map((edu, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <h2 className="text-lg">{edu.school}</h2>
                    <p className="italic">{edu.degree}</p>
                    <div className="flex">
                        <span className="bg-neutral-800 px-3 py-1 rounded-full text-sm hover:duration-200 hover:scale-125 hover:bg-neutral-600 transition ease-in-out">{edu.graduation}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}