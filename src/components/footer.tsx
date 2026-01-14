export default function Footer() {
    return (
        <footer className="pt-8 pb-12 border-t border-neutral-800/50">
            <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} Anthony Chan
            </p>
        </footer>
    )
}