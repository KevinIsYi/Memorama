import { types } from "../types/types";

const initialState = {
    isClockRunning: false,
    time: '00:00:00'
};

export const gridOptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.startClock:
            return {
                ...state,
                isClockRunning: true
            }
        case types.stopClock: 
            return {
                ...state,
                isClockRunning: false,
                time: action.payload.time
            }
        default:
            return state;
    }
}