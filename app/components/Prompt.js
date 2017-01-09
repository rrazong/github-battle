var React = require('react');
var MainContainer = require('./MainContainer');

function Prompt (props) {
  return (
    <MainContainer>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Gitub Username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text" />
          </div>
          <div className="form-group col-sm-4-col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </MainContainer>
  );
}

Prompt.propTypes = {
    header: React.PropTypes.string.isRequired,
    onSubmitUser: React.PropTypes.func.isRequired,
    onUpdateUser: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired,
};

module.exports = Prompt;
