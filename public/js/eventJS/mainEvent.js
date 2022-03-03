import { renderToonbyDay } from "/js/view/mainView.js";
import { domUtil } from "/js/Util/util.js";

const onclickDowNav = ({ target: { textContent } }) => {
  domUtil.getDataAndRender(`/weekCategory/${textContent}`, renderToonbyDay);
};

export { onclickDowNav };
