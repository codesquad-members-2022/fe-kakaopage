// header의 홈 웹툰 웹소설 영화~~까지의 javascript

function showCurrentPage(e) {
  pageArr.forEach((el) => {
    el.classList.remove('underline');
  });
  
  if(e.target.tagName === "A") {
    e.target.parentElement.classList.add('underline');
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.parentElement.classList.add('underline');
  }

  if (e.target.className === "list-webtoon" || e.target.className ==="list-webtoon content-list-2") {
    document.querySelector(".slide-img").innerHTML = '<img src="./pic/slide1.png" style="width: 720px; height: 480px;">'
  } else {
    document.querySelector(".slide-img").innerHTML = '<img src="./pic/jimmy.png" style="width: 720px; height: 480px;">'
  };

}
const main_html = document.body.innerHTML;
const pageArr = Array.from(document.querySelectorAll(".content-list-1"));
pageArr.forEach((el) => {
  el.addEventListener('mousedown', showCurrentPage);
});




function showCurrentList() {
  const listArr = Array.from(document.querySelectorAll(".navbar-second-content"));
  listArr.forEach((el) => {
    el.addEventListener('mousedown', ChangeHtmlCss);
  });
  
  function ChangeHtmlCss(e) {
    listArr.forEach((el) => {
      el.firstChild.classList.remove('makeBold');
      el.classList.remove('makeBackgroundImg');
    });
    if(e.target.tagName === "A") {
      e.target.classList.add('makeBold');
    } else if (e.target.tagName === "DIV") {  //태그이름 대문자로 써야함
      e.target.parentElement.classList.add('makeBackgroundImg');
      e.target.classList.add('makeBold');
    }
  } 
}  

showCurrentList();