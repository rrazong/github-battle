var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&sec=" + sec;

function getUserInfo(username) {
  // axios.get() returns a Promoise
  return axios.get('https://api.github.com/users/' + username + param);
}

var githubHelpers = {
  getPlayersInfo: function(players) {

    // axios.all() takes an array of promises
    // when all promises have been resolved, then .then() is called
    return axios.all(players.map(p => getUserInfo(p)))
      .then(info => info.map(p => p.data))
      .catch(err => console.warn(`Error in getPlayersInfo: ${err}`));
  }
};

module.exports = githubHelpers;
