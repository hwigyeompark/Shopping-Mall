import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import Register from "./component/Register";
import Login from "./component/Login";

ReactDOM.render(
    <App />,

    document.getElementById('root')
);
registerServiceWorker();
