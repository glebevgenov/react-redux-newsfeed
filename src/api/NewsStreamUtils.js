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
 * @typedef {{
 *      source: Object,
 *      title: string,
 *      publishedAt: string,
 *      description: string,
 *      url: string,
 *      urlToImage: string,
 * }} Article
 */

/**
 * @typedef {{
 *      id: string,
 *      title: string,
 *      text: string,
 *      url: string,
 *      media: Object[],
 * }} News
 */

/**
 * @returns {Promise<News>}
 */
async function getLatestNews() {
    /**
     * @property {Article[]} articles
     */
    const res = await NewsAPI.v2.topHeadlines({
        pageSize: 1,
        language: 'ru',
        country: 'ru',
    });

    if (!res.articles.length) {
        return null;
    }

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
