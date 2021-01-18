import { Link } from 'react-router-dom';
import './landingScreen.css';

export const LandingScreen = () => {
    return (
        <main className="background center-xy">
            <img src="./assets/logo.png" alt="logo" className="logo-image" />
            <div className="options text-center">
                <Link
                    to="/play"
                    className="roboto bold yellow-text option-button"
                >
                    
                        PLAY
                </Link>
                <Link
                    to="/ranking"
                    className="roboto bold yellow-text option-button"
                >
                    RANKING
                </Link>
            </div>
        </main>
    )
}
