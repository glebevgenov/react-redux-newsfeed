import { combineReducers } from 'redux';
import collection from './collection';
import news from './news';

const reducers = combineReducers({
    collection,
    news,
});

export default reducers;
