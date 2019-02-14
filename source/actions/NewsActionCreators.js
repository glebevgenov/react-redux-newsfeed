import AppDispatcher from '../dispatcher/AppDispatcher';

function receiveNews(news) {
    const action = {
        type: 'receive_news',
        news
    };
    AppDispatcher.dispatch(action);
}

export { receiveNews };
