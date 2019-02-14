import CollectionUtils from './CollectionUtils';

describe('CollectionUtils', () => {
    const collectionNlMock = {
        collectionNews7: {},
        collectionNews8: {},
        collectionNews9: {}
    };

    test('getNumberOfNewsInCollection returns a number of news in collection', () => {
        const actualNumberOfNewsInCollection = CollectionUtils
            .getNumberOfNewsInCollection(collectionNlMock);
        const expectedNumberOfNewsInCollection = 3;

        expect(actualNumberOfNewsInCollection)
            .toBe(expectedNumberOfNewsInCollection);
    });

    test('isEmptyCollection checks if collection is not empty', () => {
        const actualIsEmptyCollectionValue = CollectionUtils
            .isEmptyCollection(collectionNlMock);
        expect(actualIsEmptyCollectionValue).toBeDefined();
        expect(actualIsEmptyCollectionValue).toBe(false);
        expect(actualIsEmptyCollectionValue).not.toBe(true);
    });
});

