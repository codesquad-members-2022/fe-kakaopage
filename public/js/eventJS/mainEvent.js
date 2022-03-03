import { renderToonbyDay } from "../view/mainView";
import { domUtil } from "../Util/util.js";
const onclickDowNav = ({ target: { textContent } }) => {
  domUtil.getDataAndRender(`/weekCategory/${textContent}`, renderToonbyDay);
};

export { onclickDowNav };
