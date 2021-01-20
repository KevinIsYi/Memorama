import { types } from "../types/types";

export const startClock = (userData) => ({
    type: types.startClock,
    payload: userData
});

export const stopClock = () => ({
    type: types.stopClock
});

export const updateTime = (time) => ({
    type: types.updateTime,
    payload: time
});