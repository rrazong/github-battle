const React = require('react');
const ReactRouter = require('react-router');
const MainContainer = require('./MainContainer');

const Link = ReactRouter.Link;

const Home = React.createClass({
  render() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">Some fancy motto</p>
        <Link to="playerOne">
          <button type="button" className="btn btn-large btn-success">Get Started</button>
        </Link>
      </MainContainer>
    );
  },
});

module.exports = Home;
