import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
let collectionNl = {};
let collectionName = 'new';

function addNewsToCollection(news) {
    collectionNl[news.id] = news;
}

function removeNewsFromCollection(newsId) {
    delete collectionNl[newsId];
}

function removeAllNewsFromCollection() {
    collectionNl = {};
}

function setCollectionName(name) {
    collectionName = name;
}

function emitChange() {
    CollectionStore.emit(CHANGE_EVENT);

}

const CollectionStore = Object.assign({}, EventEmitter.prototype, {

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getCollectionNl() {
        return collectionNl;
    },

    getCollectionName() {
        return collectionName;
    }
});

/**
 * @typedef {{
 *      type: string,
 *      news: Object,
 *      newsId: string,
 *      collectionName: string
 * }} CollectionAction
 */

/**
 * @param {CollectionAction} action
 */
function handleAction(action) {
    switch (action.type) {
        case 'add_news_to_collection':
            addNewsToCollection(action.news);
            emitChange();
            break;

        case 'remove_news_from_collection':
            removeNewsFromCollection(action.newsId);
            emitChange();
            break;

        case 'remove_all_news_from_collection':
            removeAllNewsFromCollection();
            emitChange();
            break;

        case 'set_collection_name':
            setCollectionName(action.collectionName);
            emitChange();
            break;

        default: // ... do nothing
    }
}

CollectionStore.dispatchToken = AppDispatcher.register(handleAction);
export default CollectionStore;
