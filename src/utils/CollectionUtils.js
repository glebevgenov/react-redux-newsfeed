import NewsUtils from './NewsUtils';

function getNumberOfNewsInCollection(nl) {
    const listOfCollectionNewsIds = NewsUtils.getListOfNewsIds(nl);
    return listOfCollectionNewsIds.length;
}

function isEmptyCollection(collection) {
    return getNumberOfNewsInCollection(collection) === 0;
}

export default {
    getNumberOfNewsInCollection,
    isEmptyCollection
};
