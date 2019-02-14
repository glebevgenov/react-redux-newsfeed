import NewsUtils from './NewsUtils';

function getNumberOfNewsInCollection(collection) {
    const listOfCollectionNewsIds = NewsUtils
        .getListOfNewsIds(collection);
    return listOfCollectionNewsIds.length;
}

function isEmptyCollection(collection) {
    return getNumberOfNewsInCollection(collection) === 0;
}

export default {
    getNumberOfNewsInCollection,
    isEmptyCollection
};
