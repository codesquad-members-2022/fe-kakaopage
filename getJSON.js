async function getJSON(path) {
    const response = await fetch(path);
    const json = await response.json();
    return json;
}

export { getJSON };