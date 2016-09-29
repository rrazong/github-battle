const React = require('react');
const PropTypes = React.PropTypes;

function UserDetailsWrapper(props) {
  const {title} = props;
  return (
    <div className="col-sm-6">
      <p className="lead">{title}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.object
}

module.exports = UserDetailsWrapper;
