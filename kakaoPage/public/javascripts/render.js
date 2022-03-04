const getData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  const data = await json;
  return data;
};

export default getData;
