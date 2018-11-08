import io from 'socket.io-client';

import {
  WEBSOCKET_CONNECT,
  SEND_MESSAGE,
  MESSAGE_RECEIVED
} from 'src/store/actions';

let ws; // WebSocket auprès du serveur central de chat

/**
 * Middleware gérant la connexion WebSocket au serveur central de chat.
 */
const socket = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      ws = io('http://localhost:3001/');
      ws.on('send_message', (data) => {
        store.dispatch({
          type: MESSAGE_RECEIVED,
          data
        });
      });
      break;
    }

    case SEND_MESSAGE: {
      // Attention : le traitement de l'action Redux, s'il est rapide, n'est
      // pas immédiat. Il est donc possible que le state est évolué entre le
      // moment où l'action SEND_MESSAGE a été dispatch et le déclenchement du
      // code ci-dessous. Pour augmenter la fiabilité du code, SEND_MESSAGE
      // pourrait transporter le message tel qu'il était au moment du dispatch.
      const state = store.getState();
      ws.emit('send_message', {
        user: state.settings.username,
        content: state.message
      });
      break;
    }

    default:
  }
  next(action);
};

export default socket;
