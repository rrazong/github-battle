const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');
const githubHelpers = require('../utils/githubHelpers');

const ConfirmBattleContainer = React.createClass({
  propTypes: {
    location: React.PropTypes.object.isRequired,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {
      isLoading: true,
      playersInfo: [],
    };
  },

  componentDidMount() {
    const { query } = this.props.location;

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then((playersInfo) => {
      // console.log(playersInfo);
      this.setState({
        isLoading: false,
        playersInfo,
      });
    });
  },

  onInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      },
    });
  },

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.onInitiateBattle}
      />
    );
  },
});

module.exports = ConfirmBattleContainer;
