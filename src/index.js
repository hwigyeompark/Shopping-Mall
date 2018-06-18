import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

ReactDOM.render(
    <App />,

    document.getElementById('root')
);
registerServiceWorker();
