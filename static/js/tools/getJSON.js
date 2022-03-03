export const getJSON = (path) => {
    return fetch(`/${path}`).then((response) => response.json());
};
