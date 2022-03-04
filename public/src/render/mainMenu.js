import menuData from "../tabData/mainMenu.js"
import createDom from "../createDOM.js"
function makeMainMenu(tabName) {
  let currTab = menuData[tabName];
  let html = '';
        currTab.forEach((el, idx) => {
          html += `<a href="#" class="menu-content flex__center">
            <div class="menu-content__text">${el['description']}</div>`
          if (el['num'] !== '') {
            html += `<div class="menu-content_num">${el['num']}</div></a>`
          } else {
            html += '</a>';
          }
          })
  return html;

  
  
  // let menu = '';
  // currTab.forEach((el, idx) => {
    
  //   let divTag1 = createDom('div', el['description'], "menu-content__text");
  //   let divTag2 = createDom('div', el['num'], "menu-content_num");
  //   let divTags = `${divTag2}` + `${divTag1}`;
  //   let aTag = createDom('a', `${divTags}`, "menu-context");
  //   aTag.classList.add('flex__center');
  //   menu += `${aTag}`; 
  // });
  // console.log(menu);
  // return menu;
};

export { makeMainMenu };

