var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function() {
    console.log('Results did mount', this.props.location.state.playersInfo);
    githubHelpers.battle(this.props.location.state.playersInfo).then(scores => {
      this.setState({
        isLoading: false,
        scores
      })
    })
  },

  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },

  render: function() {

    return (
      <Results isLoading={this.state.isLoading}
               scores={this.state.scores}
               playersInfo = {this.props.location.state.playersInfo}/>
    );
  }
});

module.exports = ResultsContainer;
