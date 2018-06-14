import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import Main from "./component/Main";
import Register from "./component/Register";
import Login from "./component/Login";

ReactDOM.render(<App />,
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Main} />
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />
        </Route>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
