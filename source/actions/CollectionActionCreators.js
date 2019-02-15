import AppDispatcher from '../dispatcher/AppDispatcher';

function addNewsToCollection(news) {
    const action = {
        type: 'add_news_to_collection',
        news
    };
    AppDispatcher.dispatch(action);
}

function removeNewsFromCollection(newsId) {
    const action = {
        type: 'remove_news_from_collection',
        newsId
    };
    AppDispatcher.dispatch(action);
}

function removeAllNewsFromCollection() {
    const action = {
        type: 'remove_all_news_from_collection'
    };
    AppDispatcher.dispatch(action);
}

function setCollectionName(collectionName) {
    const action = {
        type: 'set_collection_name',
        collectionName
    };
    AppDispatcher.dispatch(action);
}

export default {
    addNewsToCollection,
    removeNewsFromCollection,
    removeAllNewsFromCollection,
    setCollectionName
};
