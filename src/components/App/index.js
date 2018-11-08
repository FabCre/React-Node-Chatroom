/**
 * Import
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Local import
 */
// Composants
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';
// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <h1 id="app-title">REACT Chatroom</h1>
    <Messages />
    <Form />
    <Settings />
  </div>
);

/**
 * Export
 */
export default App;
