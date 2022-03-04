const BASE_URL = 'http://localhost:3000';

const request = (url, callback) => {
  return fetch(url)
    .then((response) => response.json())
    .then(callback)
    .catch((err) => console.error(err));
};

const DataApi = {
  getWebtoon(callback) {
    return request(`${BASE_URL}/webtoon`, callback);
  },
  getNavItem(callback) {
    return request(`${BASE_URL}/nav-item`, callback);
  },
  getBanner(callback) {
    return request(`${BASE_URL}/banner`, callback);
  },
  getCategory(callback) {
    return request(`${BASE_URL}/category`, callback);
  },
};

export default DataApi;
