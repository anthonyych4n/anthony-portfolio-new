import { CiLinkedin, CiMail } from "react-icons/ci";
import { IoIosPaper, IoLogoGithub } from "react-icons/io";

export default function About() {
  const contactLinks = [
    {
      href: "mailto:anthonyych4n@gmail.com",
      icon: <CiMail className="size-5" />,
      label: "Email"
    },
    {
      href: "https://www.linkedin.com/in/anthonyych4n/",
      icon: <CiLinkedin className="size-5" />,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/anthonyych4n",
      icon: <IoLogoGithub className="size-5" />,
      label: "GitHub"
    },
    {
      href: "resume2025summer.pdf",
      icon: <IoIosPaper className="size-5" />,
      download: "resume2025.pdf",
      label: "Resume"
    },
  ];

  return (
    <div className="text-white max-w-sm space-y-5">
      <div className="opacity-0 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          Hi, I&apos;m Anthony Chan
        </h1>
      </div>
      <p className="opacity-0 animate-fade-in-up stagger-1 text-neutral-300 leading-relaxed">
        I&apos;m a third year student at the University of Calgary studying
        Computer Science. In my free time, I enjoy creating web applications and
        learning new technologies, playing volleyball, hiking, and working out.
      </p>
      <a 
        href="/more-about-me" 
        className="opacity-0 animate-fade-in-up stagger-2 inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-all duration-300 group"
      >
        More about me
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </a>
      <div className="opacity-0 animate-fade-in-up stagger-3 flex flex-row gap-1 pt-2">
        {contactLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            download={link.download || undefined}
            aria-label={link.label}
            className="p-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
