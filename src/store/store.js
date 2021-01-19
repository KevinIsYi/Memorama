import { createStore, combineReducers } from 'redux';
import { rankingReducer } from '../reducers/rankingReducer';

const reducers = combineReducers({
    ranking: rankingReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);