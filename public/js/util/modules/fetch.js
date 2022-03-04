export const fetchData = url => {
  return fetch(url, { method: 'GET' })
  .then(res => res.json())
  .then(res => JSON.parse(res));
};
