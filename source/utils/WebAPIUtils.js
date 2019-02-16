import NewsStream from '../api/NewsStream';
import { receiveNews } from '../actions';

function initializeStreamOfNews(store) {
    const ns = new NewsStream();
    ns.on('news', (news) => { store.dispatch(receiveNews(news)) });
    const initPromise = new Promise((resolve) => {
        ns.once('news', () => {
           resolve();
        });
    });
    ns.start();
    return initPromise;
}

export { initializeStreamOfNews };
