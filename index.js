let tabList = document.querySelectorAll(".main__dailyRank__day .tab_list");

Array.prototype.forEach.call(tabList, function (list) {
  list.children[0].addEventListener("click", function (e) {
    e.preventDefault(); // a 태그의 페이지 이동을 막는다.

    let tabContent = document.querySelectorAll(
      ".main__dailyRank__content .tab_content"
    );
    let tabNum = this.parentElement.getAttribute("data-tabnum");

    Array.prototype.forEach.call(tabContent, function (cont, i) {
      cont.style.display = "none";
    });

    tabContent[tabNum].style.display = "block";

    if (list.className.indexOf("tab_active") == -1) {
      list.className = "tab_list tab_active";
    }
  });
});
