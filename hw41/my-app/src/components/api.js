import axios from "axios";

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = `?client_id=${id}?client_secret=${sec}`;
const handlerError = (error) => console.error(error);

const getProfile = (username) => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((user) => user.data)
    .catch(handlerError);
};

const getRepos = (username) => {
  return axios
    .get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
    .then((repos) => repos.data)
    .catch(handlerError);
};

const getStarCount = (repos) => {
  return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
  return followers + totalStars;
};

const getUserData = (player) => {
  return Promise.all([getProfile(player), getRepos(player)])
    .then(([profile, repos]) => ({
      profile,
      score: calculateScore(profile, repos),
    }))
    .catch(handlerError);
};

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);

export const makeBattle = (players) => {
  return Promise.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handlerError);
};

export const fetchPopularRepos = (language) => {
  const endoceURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  return axios
    .get(endoceURI)
    .then((response) => response.data.items)
    .catch(handlerError);
};
