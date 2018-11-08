/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants
import Message from 'src/containers/Message';

// Styles et assets
import './messages.sass';

/**
 * Code
 */
const Messages = ({ messages }) => {
  const messagesJSX = messages.map(message => (
    <Message key={message.id} {...message} />
  ));

  return (
    <div id="messages">{messagesJSX}</div>
  );
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired
};

/**
 * Export
 */
export default Messages;
