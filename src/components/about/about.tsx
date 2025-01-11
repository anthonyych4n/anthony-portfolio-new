import { CiLinkedin, CiMail } from 'react-icons/ci';
import { IoIosPaper, IoLogoGithub } from "react-icons/io";

export default function About() {
    const contactLinks = [
        { href: "mailto:anthonyych4n@gmail.com", icon: <CiMail className='size-6 text-white hover:text-neutral-200' /> },
        { href: "https://www.linkedin.com/in/anthonyych4n/", icon: <CiLinkedin className='size-6 text-white hover:text-neutral-200' /> },
        { href: "https://github.com/anthonyych4n", icon: <IoLogoGithub className='size-6 text-white hover:text-neutral-200' /> },
        { href: "resume2025.docx", icon: <IoIosPaper className='size-6 text-white hover:text-neutral-200' />, download: "Resume101.pdf" }
    ];

    return (
        <div className="text-white max-w-sm space-y-5">
            <div className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold'>
                <h1 className=''>Hi, I&apos;m Anthony Chan</h1>
            </div>
            <p>I&apos;m a third year student at the University of Calgary studying Computer Science.
                In my free time, I enjoy creating web applications and learning new technologies,
                playing volleyball, hiking, and working out.
            </p>
            <a href="/more-about-me" className='underline'>More about me</a>
            <div className='flex flex-row space-x-2'>
                {contactLinks.map((link, index) => (
                    <a key={index} href={link.href} download={link.download || undefined}>
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}