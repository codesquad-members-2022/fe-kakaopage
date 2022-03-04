function fetchData(path) {
  return fetch(`http://localhost:3000/${path}`).then((response) => response.json());
}

export { fetchData };
