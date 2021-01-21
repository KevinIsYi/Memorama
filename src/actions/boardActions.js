import { data } from '../data/data';
import { types } from '../types/types';
import { stopClock } from './gridActions';

const pickPlaces = (places, board, card, id) => {
    
    for (let i = 1; i <= 2; ++i) {
        const place = Math.floor(Math.random() * places.length);
        board[places[place]] = {
            card,
            id: `${ id + i }`,
            isCorrect: false,
            isPicked: 1
        }; // places[place] will be the position of the card
        places.splice(place, 1); // Deleting that position from the availablePositions array
    }
};

export const fillBoard = (rows = 0, columns = 0) => {
    const availablePlaces = Array.from(Array(rows * columns).keys()); // Fill array with numbers from 0 to n
    const availableCards = [...data]; //copy of cards
    const board = [];

    let numberOfCards = (rows * columns) / 2;
    let id = 0;

    while (numberOfCards > 0) {
        const cardPosition = Math.floor(Math.random() * availableCards.length);
        const card = availableCards[cardPosition];

        availableCards.splice(cardPosition, 1);

        pickPlaces(availablePlaces, board, card, id);

        id += 2;
        --numberOfCards;
    }

    /*
        board will be an array from 0 to n - 1
        where ith position will be the name of a card.
        Each card will be two times in the array.
    */
    
    return {
        type: types.fillBoard,
        payload: {
            board,
            numberOfCards: rows * columns
        }
    };
};

export const pickCard = (card, id) => {
    return (dispatch, getState) => {
        const {
            board: { total, board, firstPicked, numberOfCards },
        } = getState();
        
        dispatch(firstPick(board, card, id));
        if (total > 0) {
            if (card === firstPicked) {
                dispatch(cardsMatch(board, card));

                if (numberOfCards - 2 === 0) {
                    dispatch(stopClock());
                }
            }
            else {
                dispatch(blockAll());
                setTimeout(() => {
                    dispatch(unPickSelection(board, firstPicked, card));
                }, 2000);
            }
        }

    }
};

export const cardsMatch = (board, cardName) => ({
    type: types.cardsMatch,
    payload: board.map(card => card.card === cardName ? { ...card, isCorrect: true, isPicked: 0 } : card)
});

export const firstPick = (board, name, id) => ({
    type: types.pickFirst,
    payload: {
        board: board.map(card => card.id === id ? { ...card, isPicked: 0 } : card),
        card: name
    }
});

export const unPickSelection = (board, name) => ({
    type: types.unPick,
    payload: board.map(card => card.card === name ? { ...card, isPicked: 1 } : card)
});

export const blockAll = () => ({
    type: types.blockAll
});

export const unBlockAll = () => ({
    type: types.unBlockAll
})