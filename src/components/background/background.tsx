import Projects from "./projects/projects";

export default function Background() {
    return (
        <div className='flex flex-col max-w-md gap-y-16'>
            {<Projects />}
            {/*<Education />}
            {<Journey />}
            {<Skills />*/}
        </div>
    );
}