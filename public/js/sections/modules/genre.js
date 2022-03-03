import { getElementsByAttrSelector } from '../../util/index.js';
import { SECTION } from '../../data/dataSet.js';
import { selectToons, insertGridItem } from '../../common/index.js';

const renderGenreSections = () => {
  const genreSections = getElementsByAttrSelector(SECTION.GENRE);
  genreSections.forEach(section => {
    const genre = section.dataset.genre;
    const toons = selectToons('genre', genre);
    insertGridItem(toons, genre);
  });
};

const initGenreSections = () => {
  renderGenreSections();
};

export { initGenreSections };
