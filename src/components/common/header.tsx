import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <h2>Joel News.PH</h2>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export function Footer() {
    return (
        <footer>
            <p>© 2026 Joel News.PH</p>
        </footer>
    );
}