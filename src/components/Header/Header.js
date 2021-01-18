import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
    return (
        <header className="header text-center bg-light-blue">
            <Link
                to="/"
                className="yellow-text lobster"
            >
                Memorama
            </Link>
        </header>
    )
}
