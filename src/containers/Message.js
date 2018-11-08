import { connect } from 'react-redux';

import Message from 'src/components/Messages/Message';

const mapStateToProps = (state, ownProps) => ({
  own: state.settings.username === ownProps.user
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps, // lecture
  mapDispatchToProps // écriture
)(Message);
