import menuData from "../tabData/mainMenu.js"
import createDom from "../createDOM.js"
function makeMainMenu(tabName) {
  let currTab = menuData[tabName];
  // return `<a href="#" class="menu-content flex__center">
  //         <div class="menu-content__text">${currTab[0]['description']}</div>
  //         <div class="menu-content_num">231</div>
  //       </a>
  //       <a href="#" class="menu-content flex__center">
  //         <div class="menu-content__text">오늘 신작</div>
  //         <div class="menu-content_num">1</div>
  //       </a>
  //       <a href="#" class="menu-content flex__center">
  //         <div class="menu-content__text">오리지널</div>
  //         <div class="menu-content_num">2,337</div>
  //       </a>
  //       <a href="#" class="menu-content flex__center">
  //         <div class="menu-content__text">완결까지 정주행</div>
  //       </a>
  //       <a href="#" class="menu-content flex__center">
  //         <div class="menu-content__text">독립운동가 웹툰</div>
  //       </a>
  //       <a href="#" class="menu-content flex__center">
  //         <div class="menu-content__text">오늘 랭킹</div>
  //         <div class="menu-content_num">1위</div>
  //       </a>`
  let html = '';
        currTab.forEach((el, idx) => {
          html += `<a href="#" class="menu-content flex__center">
            <div class="menu-content__text">${el['description']}</div>
            <div class="menu-content_num">231</div>
          </a>`
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

