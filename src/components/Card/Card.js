import { useState } from 'react';
import './card.css';

import PropTypes from 'prop-types'

export const Card = ({ image }) => {

    const [ flipValue, setFlipValue ] = useState(0);
    const flipClasses = ['', 'is-flipped'];

    const flipCard = () => {
        setFlipValue((flipValue + 1) % 2);
    }

    return (
        <div className="scene scene--card">
            <div
                className={ `card ${ flipClasses[flipValue] }` }
                onClick={ flipCard }
            >
                <div className="card__face card__face--front round-border">
                    <img
                        src={ `/assets/images/${ image }.jpg` }
                        alt="apache"
                        className="image-style"
                    />
                </div>
                <div className="card__face card__face--back round-border">
                    <img
                        src="/assets/back-card.jpg"
                        alt="background"
                        className="image-style"
                    />
                </div>
            </div>
        </div> 
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired
}
