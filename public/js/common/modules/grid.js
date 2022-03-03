import { $, getElementByAttrSelector, fetchData } from '../../util/index.js';
import { gridItem } from '../../template/index.js';

/* 전역 변수를 피하기 위해 함수로 선언 */
const selectedTabClassName = () => {
  return 'lnb__item__selected';
};

const getGridElement = section => {
  const element = getElementByAttrSelector('section', section);

  return $('.grid', element);
};

const clearGrid = section => {
  const grid = getGridElement(section);
  grid.innerHTML = '';
};

const findValue = (currentToon, key) => {
  let value = currentToon[key];
  const keys = Object.keys(currentToon);
  if (!keys.includes(key)) {
    value = currentToon['additional'][key];
  }

  return value;
};

const selectToons = (key, lookUpValue) => {
  return fetchData('http://localhost:3000/api/toonData').then(data => {
    Object.keys(data).reduce((toons, index) => {
      const currentToon = data[index];
      const value = findValue(currentToon, key);
      const selectUseWeek = key === 'week' && value.includes(lookUpValue);
      const selectUseOther = lookUpValue === value;
      if (selectUseOther || selectUseWeek) {
        toons.push(data[index]);
      }

      return toons;
    }, []);
  });
};

const insertGridItem = (toons, section) => {
  const grid = getGridElement(section);
  toons.then(toons => {
    console.log(123,toons)
    // toons.forEach(toon => {
    //   grid.insertAdjacentHTML('beforeend', gridItem(toon));
    // });
  });
};

export { selectedTabClassName, clearGrid, selectToons, insertGridItem };
