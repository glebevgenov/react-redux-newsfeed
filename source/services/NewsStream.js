import EventEmitter from 'events';
import NewsStreamUtils from './NewsStreamUtils';

class NewsStream extends EventEmitter {

    _newsId = null;
    _timerId = null;

    start() {
        if (this._timerId) {
            this.stop();
        }
        // noinspection JSIgnoredPromiseFromCall
        this._tick();
    }

    stop() {
        clearTimeout(this._timerId);
        this._timerId = null;
    }

    _tick = async () => {
        if (this.listenerCount('news') > 0) {
            const news = await NewsStreamUtils.getLatestNews();
            if (this._newsId !== news.id) {
                this._newsId = news.id;
                this.emit('news', news);
            }
        }
        this._timerId = setTimeout(this._tick, 15000);
    };
}

export default NewsStream;
