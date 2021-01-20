import { types } from "../types/types";

export const startClock = () => ({
    type: types.startClock
});

export const stopClock = (time) => ({
    type: types.stopClock,
    payload: time
})