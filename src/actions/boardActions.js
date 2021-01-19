import { data } from '../data/data';
import { types } from '../types/types';

const pickPlaces = (places, board, card) => {
    
    const positions = [];
    for (let i = 0; i < 2; ++i) {
        const place = Math.floor(Math.random() * places.length);
        board[places[place]] = card; // places[place] will be the position of the card
        positions[i] = places[place];
        places.splice(place, 1); // Deleting that position from the availablePositions array
    }
    return positions;
};

export const fillBoard = (rows, columns) => {
    const availablePlaces = Array.from(Array(rows * columns).keys()); // Fill array with numbers from 0 to n
    const availableCards = [...data]; //copy of cards
    const board = [];
    const cardPositions = {};

    let numberOfCards = (rows * columns) / 2;

    while (numberOfCards-- > 0) {
        const cardPosition = Math.floor(Math.random() * availableCards.length);
        const card = availableCards[cardPosition];

        availableCards.splice(cardPosition, 1);

        const positions = pickPlaces(availablePlaces, board, card);
        
        cardPositions[card] = positions;
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
            cardPositions
        }
    };
}