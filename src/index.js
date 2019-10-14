import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './AppModule/General/Store';
import './AppDesign/main.scss'
import App from './AppModule/App';
import * as serviceWorker from './serviceWorker';

/**
 * This project is a demo app, the goal of this app is how to
 * show the stores, banks, etc. in Open Layers Map. Each of this
 * business location is a business afiliated to this app.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since Oct 3rd, 2019.
 */
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
serviceWorker.register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
