import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import {Provider} from 'react-redux'
import store from 'react-redux';
import Wizard from '../jsx/Wizard.jsx';

import App from '../jsx/App.jsx';
import Griddle_Table from '../jsx/Griddle_Table.jsx';
import Demo from '../jsx/demo'

ReactDOM.render((
    // <Demo/>
    <Provider>
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
        <Route path="buildoffer" component={Wizard}/>

    </Router>
    </Provider>
), document.getElementById('app'))
