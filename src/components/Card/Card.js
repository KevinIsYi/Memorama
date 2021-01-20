import { useState } from 'react';
import PropTypes from 'prop-types'
import './card.css';

export const Card = ({ image }) => {

    const [ flipValue, setFlipValue ] = useState(1);
    const flipClasses = ['', 'is-flipped'];

    const flipCard = () => {
        setFlipValue((flipValue + 1) % 2);
    }

    return (
        <div className="scene scene--card center-x">
            <div
                className={ `card ${ flipClasses[flipValue] }` }
                onClick={ flipCard }
            >
                <div className="card__face card__face--front round-border">
                    <img
                        src={ `/assets/images/${ image }.jpg` }
                        alt={image}
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
