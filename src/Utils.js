const serverAddress = 'http://localhost:3000';

export function getData(...tag) {
    const url = `${serverAddress}/data/${tag.join('/')}`;
    return fetch(url).then((response) => response.json());
}

export function getDataWithCallback(callback, ...tags) {
    const url = `${serverAddress}/data/${tags.join('/')}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data));
}