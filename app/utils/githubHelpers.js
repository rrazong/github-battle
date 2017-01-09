var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&sec=" + sec;

function getUserInfo(username) {
  // axios.get() returns a Promoise
  return axios.get(`https://api.github.com/users/${username}${param}`);
}

function getRepos(username) {
  // fetch user's repos
  return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);
}

function getTotalStars(repos) {
  // calculate all the stars
  return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);
}

function getPlayerData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars
      }
    })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var githubHelpers = {
  getPlayersInfo: function(players) {

    // axios.all() takes an array of promises
    // when all promises have been resolved, then .then() is called
    return axios.all(players.map(p => getUserInfo(p)))
      .then(info => info.map(p => p.data))
      .catch(err => console.warn(`Error in getPlayersInfo: ${err}`));
  },
  battle: function(playerInfo) {
    const playerOneData = getPlayerData(playerInfo[0]);
    const playerTwoData = getPlayerData(playerInfo[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(err => {
        console.warn(`Error in battle: ${err}`);
      })
  }
};

module.exports = githubHelpers;
