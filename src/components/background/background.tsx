import Footer from "../footer";
import Education from "./education/education";
import Journey from "./journey/journey";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
export default function Background() {
    return (
        <div className='flex flex-col max-w-md gap-y-16'>
            {<Projects />}
            {<Education />}
            {<Journey />}
            {<Skills />}
            {<Footer />}
        </div>
    );
}