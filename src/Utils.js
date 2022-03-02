const serverAddress = 'http://localhost:3000/';

export function getData(...tag){
    const url = `${serverAddress}${tag.join('/')}`;
    return fetch(url).then((response) => response.json());
}