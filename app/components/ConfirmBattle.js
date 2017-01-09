const React = require('react');
const ReactRouter = require('react-router');
const UserDetails = require('./UserDetails');
const UserDetailsWrapper = require('./UserDetailsWrapper');
const styles = require('../styles');
const MainContainer = require('./MainContainer');
const Loading = require('./Loading');

const PropTypes = React.PropTypes;
const Link = ReactRouter.Link;

function ConfirmBattle(props) {
  const [playerOne, playerTwo] = props.playersInfo;

  return props.isLoading === true
  ? <Loading text="Please wait" speed={1000} />
  : <MainContainer>
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
  </MainContainer>;
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
};

module.exports = ConfirmBattle;
