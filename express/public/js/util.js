const url = 'http://localhost:5050/public/js/data/';

export function getJson(location) {
  const fileURL = `${url}${location}`;
  return fetch(`${fileURL}`).then((res) => res.json());
}
