// Get the element with id="defaultOpen" and click on it
// const landingPage = document.getElementById("defaultOpen").click();

// const fs = require('node:fs');
// const sample = JSON.parse(fs.readFileSync('/sample.json'));

const days = {
  "Mon":"Action",
  "Tue":"Drama",
  "Wed":"Webtoon",
  "Thu":"Romance",
  "Fri":"Fantasy"
}

console.log('hello world');

function populateMain(obj) {
  const main = document.querySelector('main');
  const myDiv = document.createElement('div');
  myDiv.textContent = obj["Mon"];
  main.appendChild(myDiv);

}
populateMain(days);

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
