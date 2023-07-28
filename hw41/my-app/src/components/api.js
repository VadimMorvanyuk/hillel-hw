import axios from 'axios'

const handlerError = (error) => console.error(error)

export const fetchPopularRepos = (language) => {
  const endoceURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
 return axios.get(endoceURI)
  .then(response => response.data.items)
  .catch(handlerError)
};
