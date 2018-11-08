import {
  OPEN_SETTINGS_PANEL,
  CLOSE_SETTINGS_PANEL,
  TRACK_USERNAME,
  TRACK_MESSAGE,
  SEND_MESSAGE,
  MESSAGE_RECEIVED
} from 'src/store/actions';

const initialState = {
  settings: {
    open: false,
    username: 'Anonymous'
  },
  message: '',
  messages: [
    {
      id: 1,
      user: 'ChatBot',
      content: 'Bienvenue sur le REACT Chatroom, entrez un pseudo et chattez avec les autres utilisateurs !'
    }
  ]
};

/**
 * An action arrives. It must be *transformed* in a state mutation, that is,
 * the reducer *must* return an edited copy of the current state.
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_SETTINGS_PANEL: {
      const settings = {
        ...state.settings,
        open: true
      };
      return {
        ...state,
        settings
      };
    }

    case CLOSE_SETTINGS_PANEL: {
      const settings = {
        ...state.settings,
        open: false
      };
      return {
        ...state,
        settings
      };
    }

    case TRACK_USERNAME: {
      const settings = {
        ...state.settings,
        username: action.value
      };
      return {
        ...state,
        settings
      };
    }

    case TRACK_MESSAGE: {
      return {
        ...state,
        message: action.value
      };
    }

    case SEND_MESSAGE: {
      return {
        ...state,
        message: initialState.message
      };
    }

    case MESSAGE_RECEIVED: {
      return {
        ...state,
        messages: [...state.messages, action.data]
      };
    }

    default:
      return state;
  }
};

export default reducer;
