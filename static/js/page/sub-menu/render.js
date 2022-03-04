import { $ } from "/js/utils/dom.js";
import * as datas from "/js/data/datas.js";

import { SubMenu } from "/js/views/views.js";

export const renderSubMenu = () => {
    $(".sub-menu").innerHTML = new SubMenu({
        menus: datas.subMenu.webtoon.menuNames,
    }).getHtml();
};
