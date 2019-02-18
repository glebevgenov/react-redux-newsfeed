import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Application from './components/Application';
import { initializeStreamOfNews } from './utils/WebAPIUtils';
import store from './redux/store';

(async () => {

    await initializeStreamOfNews(store);

    ReactDOM.render(
        <Provider store={store}>
            <Application />
        </Provider>,
        document.getElementById('react-application')
    );
})();
