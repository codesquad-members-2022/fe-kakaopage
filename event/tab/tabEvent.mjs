import { weekMap } from "../../util/util.mjs";

const addDailyTabEvent = (info) => {
  const tabs = document.querySelector(".dailyTop__tabs");
  tabs.addEventListener("click", (e) => {
    document.querySelectorAll(".dailyTop__tab").forEach((val) => {
      val.classList.remove("selected-color", "selected-box");
    });
    e.target.classList.add("selected-color", "selected-box");
    const dayInfo = weekMap.get(e.target.firstChild.nodeValue);
    changeContent(info[0].data[dayInfo]);
  });
};

const changeContent = (data) => {
  let items = "";

  data.forEach((val) => {
    items += `
      <a class="itemBox" href="#">
        <div class="item">
          <img class="itemImg" src="${val.img}" />
          <div class="daily__rankingBox">
            <div class="daily__ranking">${val.info}</div>
            <div class="flex-blank"></div>
            <img
              style="width: 16px"
              src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf"
              alt="기다무"
            />
          </div>
        </div>
        <div class="item__title">${val.title}</div>
        <div class="item__views">
          <img
            style="width: 19px"
            src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f"
          /><img
            style="width: 11px"
            src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
          />${val.user}
        </div>
      </a>
    `;
  });
  document.querySelector(".items").innerHTML = items;
};

export { addDailyTabEvent };
