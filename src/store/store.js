import { createStore, combineReducers } from 'redux';
import { boardReducer } from '../reducers/boardReducer';
import { rankingReducer } from '../reducers/rankingReducer';

const reducers = combineReducers({
    ranking: rankingReducer,
    board: boardReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);