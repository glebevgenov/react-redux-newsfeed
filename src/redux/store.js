import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    collection: {
        newsList: {},
        name: 'Новая лента',
    },
    news: null,
};

export default createStore(reducers, initialState);
