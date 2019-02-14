import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';

let news = null;

function setNews(receivedNews) {
    news = receivedNews;
}

function emitChange() {
    NewsStore.emit('change');
}

const NewsStore = Object.assign({}, EventEmitter.prototype, {

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    },

    getNews() {
        return news;
    }
});

function handleAction(action) {
    if (action.type === 'receive_news') {
        setNews(action.news);
        emitChange();
    }
}

NewsStore.dispatchToken = AppDispatcher.register(handleAction);

export default NewsStore;
