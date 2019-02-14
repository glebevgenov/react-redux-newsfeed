import NewsAPI from './NewsAPI';
import sha1 from 'sha1';

/**
 * @param {string} source
 * @param {string} title
 * @param {string} datetime
 * @returns {string}
 */
function getNewsId(source, title, datetime) {
    return sha1(source+title+datetime);
}

/**
 * @returns {Promise<Object>}
 */
async function getLatestNews() {
    /**
     * @type {Object}
     * @property {Array<Object>} articles
     */
    const res = await NewsAPI.v2.topHeadlines({
        pageSize: 1,
        language: 'en',
        country: 'us',
    });

    if (!res.articles.length) {
        return false;
    }

    /**
     * @type {Object}
     * @property {Object} source
     * @property {string} title
     * @property {string} publishedAt
     * @property {string} description
     * @property {string} url
     * @property {string} urlToImage
     */
    const article = res.articles[0];
    const newsId = getNewsId(article.source.id, article.title, article.publishedAt);
    return {
        id: newsId,
        title: article.title,
        text: article.description,
        url: article.url,
        media: [{ url: article.urlToImage }],
    };
}


export default { getNewsId, getLatestNews };
