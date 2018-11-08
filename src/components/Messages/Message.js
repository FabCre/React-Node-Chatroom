import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({ user, content, own }) => {
  const className = classNames(
    'message',
    {
      'message--own': own
    }
  );

  return (
    <div className={className}>
      <div className="message-user">{user}</div>
      <div className="message-content">{content}</div>
    </div>
  );
};

Message.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  own: PropTypes.bool
};

Message.defaultProps = {
  own: false
};

export default Message;
