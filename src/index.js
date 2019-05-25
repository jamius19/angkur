import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './assets/styles/GlobalStyles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "babel-polyfill";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
