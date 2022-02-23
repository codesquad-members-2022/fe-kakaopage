// Get the element with id="defaultOpen" and click on it
// const landingPage = document.getElementById("defaultOpen").click();

// RequireJS is a JavaScript file and module loader. It is optimized for in-browser use
// https://requirejs.org/

// var dummy = require('./dummy');

console.log('hello world');
// console.log(dummy);

// https://stackoverflow.com/questions/30014090/uncaught-typeerror-cannot-read-property-appendchild-of-null
function populateMain(obj) {
  const main = document.querySelector('main');
  const myH3 = document.createElement('h3');
  const myDiv = document.createElement('div');
  const myDiv1 = document.createElement('div');
  const myPara1 = document.createElement('p');
  const myUl = document.createElement('ul');

  myH3.textContent = 'appendChild() test!';
  myPara1.textContent = 'plain text in p';
  myDiv.appendChild(myH3);
  myDiv1.appendChild(myPara1);

  main.append(myDiv, myDiv1);

}

// 실행
populateMain();

function test() {
  console.log("test sucess!");
}

// 참고 function
// function openPage(pageName,elmnt,color) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("main-li");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].style.backgroundColor = "";
//     }
//     document.getElementById(pageName).style.display = "block";
//     elmnt.style.backgroundColor = color;
// }
