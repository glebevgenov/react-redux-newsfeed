import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    collection: {
        newsList: {},
        name: 'New Collection',
    },
    news: null,
};

export default createStore(reducers, initialState);
