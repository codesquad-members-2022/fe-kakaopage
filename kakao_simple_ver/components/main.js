// Get the element with id="defaultOpen" and click on it
// const landingPage = document.getElementById("defaultOpen").click();


console.log("hello world");
const mainNodeList = document.querySelectorAll(".main-li");
mainNodeList.forEach(test);


function openPage() {
  const mainContents = document.getElementsByClassName("main-contents");
  const contentDiv = document.createElement('div');
  const ttx = document.createTextNode('wow!');
  
  contentDiv.appendChild(ttx);
  mainContents.appendChild(contentDiv);

}

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
