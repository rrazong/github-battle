const React = require('react');
const PropTypes = React.PropTypes;
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const UserDetails = require('./UserDetails');
const UserDetailsWrapper = require('./UserDetailsWrapper');
const styles = require('../styles');

function puke(object) {
    return(
      <pre>{JSON.stringify(object, null, ' ')}</pre>
    )
}

function ConfirmBattle (props) {
  const [playerOne, playerTwo] = props.playersInfo;

  return props.isLoading === true
  ? <p>Loading...</p>
  : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper title="Player 1">
          <UserDetails info={playerOne} />
        </UserDetailsWrapper>
        <UserDetailsWrapper title="Player 2">
          <UserDetails info={playerTwo} />
        </UserDetailsWrapper>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
          <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
            Initiate Battle!
          </button>
        </div>
        <div className="col-sm-12" style={styles.space}>
          <Link to="/playerOne">
            <button type="button" className="btn btn-lg btn-danger">
              Reselect Players
            </button>
          </Link>
        </div>
      </div>
    </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
