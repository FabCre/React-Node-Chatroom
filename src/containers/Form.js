import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { TRACK_MESSAGE, SEND_MESSAGE } from 'src/store/actions';

const mapStateToProps = state => ({
  message: state.message
});

const mapDispatchToProps = dispatch => ({
  /**
   * Track the current value of the message input.
   */
  trackMessage: (value) => {
    dispatch({
      type: TRACK_MESSAGE,
      value
    });
  },

  /**
   * Send a message to the server.
   */
  sendMessage: () => {
    dispatch({
      type: SEND_MESSAGE
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
