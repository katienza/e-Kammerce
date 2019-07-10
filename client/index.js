import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import history from './history';
import '../public/style.css';
import App from './app';

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

/*
* HOT RELOADING
*/
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(app, document.getElementById('root'));