import { types } from "../types/types";

const initialState = {
    isClockRunning: false,
    time: '00:00:00',
    rows: 0,
    columns: 0,
    name: '',
    enableCustom: false
};

export const gridOptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.startClock:
            const { payload: { name, rows, columns } } = action;
            return {
                ...state,
                isClockRunning: true,
                name,
                rows,
                columns,
                enableCustom: true
            }
        case types.stopClock: 
            return {
                ...state,
                isClockRunning: false,
            }
        case types.updateTime: 
            return {
                ...state,
                time: action.payload
            }
        default:
            return state;
    }
}