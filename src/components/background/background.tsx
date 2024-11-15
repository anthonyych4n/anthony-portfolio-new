import Footer from "../footer";
import Projects from "./projects/projects";



export default function Background() {
    return (
        <div className=' h-screen w-1/2'>
            {<Projects />}
            {/*<Education />*/}
            {/*<Journey />*/}
            {/*<Skills />*/}
            {<Footer />}
        </div>
    );
}