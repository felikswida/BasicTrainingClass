import React from 'react';
import bootstrap from 'bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import App from './Components/app/App.js';


function renderApp() {
    ReactDOM.render (
            <HashRouter>
                <App />
            </HashRouter>
        , document.getElementById('app')
        );
    }

renderApp();