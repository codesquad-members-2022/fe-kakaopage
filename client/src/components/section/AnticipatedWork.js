import { ContentsHeader, ContentsList } from '../index.js';
import { convertStringToHTML } from '../../js/util';
import { store } from '../../data/store.js';

const AnticipatedWork = () => {

  const title = '기대신작 TOP';

  return convertStringToHTML(
          `<section class="contents" data-genre="기대신작">
            ${ContentsHeader(title)}
            ${ContentsList('large', store.banners.anticipatedWork)}
          </section>`);
};

export default AnticipatedWork;
