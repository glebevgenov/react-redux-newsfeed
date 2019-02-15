import NewsStream from '../services/NewsStream';
import { receiveNews } from '../actions/NewsActionCreators';

function initializeStreamOfNews() {
    const ns = new NewsStream();
    ns.on('news', receiveNews);
    const initPromise = new Promise((resolve) => {
        ns.once('news', () => {
           resolve();
        });
    });
    ns.start();
    return initPromise;
}

export { initializeStreamOfNews };
