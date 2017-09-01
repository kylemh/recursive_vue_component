import axios from 'axios';

axios.defaults.baseURL = 'https://nested-state-data.firebaseio.com/';

export default {
  get(url, request) {
    return axios.get(`${url}.json`, request)
                .then(response => response.data)
                .catch(error => error);
  },
};
