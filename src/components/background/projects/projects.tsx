import Link from "next/link";

export default function Projects() {
    return (
        <div className='flex flex-col space-y-5  text-white '>
            <h1 className="text-xl font-semibold">Projects</h1>
            <ul className="space-y-5">
                <li>
                    <Link href="/projects/ratemystudyspot" className="underline">Rate My Study Spot</Link>
                    <p>An app to study spots around the UBC campus</p>
                </li>
                <li>
                    <Link href="/projects/gambling-friends" className="underline">Gambling Friends</Link>
                    <p>Poker winning and losing tracker</p>
                </li>
                <li>
                    <Link href="/projects/sustainabite" className="underline">Sustainabite</Link>
                    <p>2023 Code the Change Hackathon Project</p>
                </li>
            </ul>
            <div>
                <Link href="/projects" className="hover:text-neutral-200 relative hover:underline" >All Projects →</Link>
            </div>

        </div>
    );
}
