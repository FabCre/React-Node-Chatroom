/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

// Styles et assets
import './form.sass';

/**
 * Code
 */
const Form = ({ message, sendMessage, trackMessage }) => {
  const handleMessageTyped = (evt) => {
    const { value } = evt.target;
    trackMessage(value);
  };

  const submitMessage = (evt) => {
    evt.preventDefault();
    sendMessage();
  };

  return (
    <form
      id="form"
      autoComplete="off"
      onSubmit={submitMessage}
    >
      <input
        id="form-input"
        type="text"
        placeholder="Mon message"
        value={message}
        onChange={handleMessageTyped}
      />
    </form>
  );
};

/**
 * Export
 */
export default Form;
