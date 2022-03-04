import { convertStringToHTML } from '../../js/util';

const AppDownloadLink = () => {
  return convertStringToHTML(
          `<section class="contents app-download-link">
            <a href="#"><span>카카오페이지</span> 앱으로 보기</a>
          </section>`);
};

export default AppDownloadLink;