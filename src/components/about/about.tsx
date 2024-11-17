import { CiLinkedin, CiMail } from 'react-icons/ci';
import { IoIosPaper, IoLogoGithub } from "react-icons/io";

export default function About() {
    return (
        <div className="text-white max-w-sm space-y-5">
            <div className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold'>
                <h1 >Hi, I&apos;m Anthony Chan</h1>
            </div>

            <p>I&apos;m a third year student at the University of Calgary studying Computer Science.
                In my free time, I enjoy creating web applications and learning new technologies,
                playing volleyball, hiking, and working out.
            </p>
            <a href="" className=''>More about me...</a>
            <div className='flex flex-row space-x-2'>
                <a href="mailto:anthonyych4n@gmail.com"><CiMail className='size-6 text-white hover:text-neutral-200' /></a>
                <a href="https://www.linkedin.com/in/anthonyych4n/"><CiLinkedin className='size-6 text-white hover:text-neutral-200' /></a>
                <a href="https://github.com/anthonyych4n"><IoLogoGithub className='size-6 text-white hover:text-neutral-200' /></a>
                <a href="Resume101.pdf" download="Resume101.pdf"><IoIosPaper className='size-6 text-white hover:text-neutral-200' /></a>
            </div>

        </div>
    );
}