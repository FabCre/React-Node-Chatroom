/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';
import store from 'src/store';
import { WEBSOCKET_CONNECT } from 'src/store/actions';

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);
render(rootComponent, document.getElementById('root'));
store.dispatch({ type: WEBSOCKET_CONNECT });
