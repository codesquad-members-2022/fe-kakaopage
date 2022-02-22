import { INITIAL_PAGE, $CONTENTS } from "./constant.js";
import { getPageData } from "./data.js";
import { getPageTemplete } from "./view.js";

const renderPage = async (today) => {
    const jsonUrl = getPageData(INITIAL_PAGE);
    fetch(jsonUrl)
    .then((response) => response.json())
    .then((json) => getPageTemplete(INITIAL_PAGE, json, today))
    .then(PageTemplete => {
        $CONTENTS.insertAdjacentHTML('afterbegin', PageTemplete);
    });
}

export { renderPage };