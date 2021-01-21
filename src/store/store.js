import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { boardReducer } from '../reducers/boardReducer';
import { gridOptionsReducer } from '../reducers/gridOptionsReducer';
import { rankingReducer } from '../reducers/rankingReducer';

const componeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ranking: rankingReducer,
    board: boardReducer,
    customGrid: gridOptionsReducer
});

export const store = createStore(
    reducers,
    componeEnhancers(
        applyMiddleware(thunk)
    )
);