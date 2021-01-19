import { types } from "../types/types";

const initialState = {
    board: [],
    cardPositions: {}
}

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.fillBoard:
            const { payload:{ board, cardPositions }} = action;
            return {
                ...state,
                board, 
                cardPositions
            };
        default:
            return state;
    }
}