import axios from 'axios';
import qs from 'qs';

const domain: string = 'https://itunes.apple.com';

export const getSearchTrack = (
  keyword: string,
  country?: string,
  entity?: string,
  limit?: number | number[],
  offset?: number,
): any => {
  const queryString = qs.stringify({
    term: keyword,
    country,
    entity,
    limit,
    offset,
  });

  return axios.get(`${domain}/search/?${queryString}`);
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert(`${error} \nPlease try again`);
    window.location.reload();
  },
);
