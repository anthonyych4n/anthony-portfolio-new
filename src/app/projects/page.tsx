
export default function Projects() {
    return (
        <div className='flex items-center justify-center h-screen bg-neutral-900 space-x-20 text-slate-300'>
            <h1>Projects</h1>
            <p>Here are some of my projects:</p>
            <ul>
                <li>
                    <a href="/projects/1">Project 1</a>
                </li>
                <li>
                    <a href="/projects/2">Project 2</a>
                </li>
            </ul>
        </div>
    );
}