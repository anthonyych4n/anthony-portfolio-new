import Link from "next/link";

export default function Projects() {
    return (
        <div className='text-white flex flex-col space-y-5'>
            <h1 className="">Projects</h1>
            <ul className="space-y-5">
                <li>
                    <div>Rate My Study Spot</div>
                    <p>An app to study spots around the UBC campus</p>
                </li>
                <li>
                    <div>Gambling Friends</div>
                    <p>Poker winning and losing tracker</p>
                </li>
                <li>
                    <div>Sustainabite </div>
                    <p>2023 Code the Change Hackathon Project</p>
                </li>
            </ul>
            <div>
                <Link href="/projects" className="hover:text-neutral-200 relative hover:underline" >All Projects →</Link>
            </div>

        </div>
    );
}
