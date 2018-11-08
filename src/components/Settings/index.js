/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

// Styles et assets
import './settings.sass';

/**
 * Code
 */
const Settings = ({ username, trackUsername, open, openPanel, closePanel }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    closePanel();
  };

  const handleUsernameChange = (evt) => {
    const { value } = evt.target;
    trackUsername(value);
  };

  return (
    <div id="settings" className={open ? 'settings--open' : ''}>
      <div id="settings-toggle" onClick={open ? closePanel : openPanel} />
      <form
        id="settings-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="settings-input"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button
          id="settings-submit"
          type="submit"
        >
          ok
        </button>
      </form>
    </div>
  );
};

/**
 * Export
 */
export default Settings;
