import NewsUtils from './NewsUtils';

describe('NewsUtils', () => {
    test('getListOfNewsIds returns an array of news ids', () => {
        const nlMock = {
            news1: {},
            news2: {},
            news3: {}
        };
        const expectedListOfNewsIds = [
            'news1',
            'news2',
            'news3'
        ];
        const actualListOfNewsIds = NewsUtils.getListOfNewsIds(
            nlMock
        );
        expect(actualListOfNewsIds)
            .toEqual(expectedListOfNewsIds);
    });
});
