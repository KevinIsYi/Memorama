import { types } from "../types/types";

const initialState = {
    board: [],
    cardPositions: {},
    blockAll: false,
    total: 0,
    firstPicked: '',
    numberOfCards: 0 // Picked cards
}

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.fillBoard: 
            return {
                ...state,
                board: action.payload.board,
                numberOfCards: action.payload.numberOfCards    
            };
        case types.pickFirst: 
            return {
                ...state,
                firstPicked: action.payload.card,
                board: action.payload.board,
                total: 1
            }
        case types.cardsMatch:
            return {
                ...state,
                board: action.payload,
                total: 0,
                blockAll: false,
                numberOfCards: state.numberOfCards - 2
            }
        case types.unPick: 
            return {
                ...state,
                total: 0,
                board: action.payload,
                blockAll: false
            }
        case types.blockAll: 
            return {
                ...state,
                blockAll: true
            }
        case types.unBlockAll: 
            return {
                ...state,
                blockAll: false
            }
        default:
            return state;
    }
}