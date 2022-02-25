import { AnticipatedWorks } from '../../data';
import { ContentsHeader, ContentsList } from '../index.js';
import { convertStringToHTML } from '../../utils.js';

const AnticipatedWork = () => {

  const title = '기대신작 TOP';

  return convertStringToHTML(
          `<section class="contents" data-genre="기대신작">
            ${ContentsHeader(title)}
            ${ContentsList('large', AnticipatedWorks)}
          </section>`);
};

export default AnticipatedWork;