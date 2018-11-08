import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps, // lecture
  mapDispatchToProps // écriture
)(Messages);
