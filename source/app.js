import React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './components/Application';
import { initializeStreamOfNews } from './utils/WebAPIUtils';

(async () => {

    await initializeStreamOfNews();

    ReactDOM.render(
        <Application />,
        document.getElementById('react-application')
    );
})();
