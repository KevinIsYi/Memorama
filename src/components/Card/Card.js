import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { pickCard } from '../../actions/boardActions';
import './card.css';

export const Card = ({ id, image, isCorrect, isPicked }) => {

    const dispatch = useDispatch();
    const { board: { blockAll } } = useSelector(state => state);

    const isFlippedClass = isPicked === 0 ? '' : 'is-flipped';

    const flipCard = () => {
        if (!isCorrect && !blockAll && isPicked === 1) {
            console.log("Se va a mandar el id: ", id);
            dispatch(pickCard(image, id));
        }
    }

    return (
        <div className="scene scene--card center-x">
            <div
                className={ `card ${ isFlippedClass }` }
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
