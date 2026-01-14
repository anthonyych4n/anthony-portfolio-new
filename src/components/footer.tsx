export default function Footer() {
    return (
        <footer className="pt-12 pb-12 border-t border-neutral-800/30">
            <p className="text-neutral-500 text-sm flex items-center gap-2">
                <span>© {new Date().getFullYear()} Anthony Chan</span>
            </p>
        </footer>
    )
}