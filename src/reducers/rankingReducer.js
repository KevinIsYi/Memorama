import { types } from "../types/types";

export const rankingReducer = (state = [], action) => {
    switch (action.type) {
        case types.addToRanking:
            return {};
        case types.getRanking:
            return {};
        default:
            return state;
    }
}
