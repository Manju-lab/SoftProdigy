import axios from 'axios';

const CallApi = (
  method,
  url,
  data,
  headers = {
    'cache-control': 'no-cache',
    'content-type': 'application/json',
  },
) => {
  return new Promise((resolve, reject) => {
    let options = {
      method,
      url,
      data,
      headers,
    };

    if (method === 'get') delete options['data'];

    axios({...options})
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.log('error', error);
        let {message = '', response = {}} = error || {};
        let {data = null} = response;
        reject(error);
      });
  });
};

export default CallApi;
