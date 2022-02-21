// Get the element with id="defaultOpen" and click on it
// const landingPage = document.getElementById("defaultOpen").click();
const mainMenu = document.getElementsByClassName("main-li");

mainMenu.addEventListener('click', event => {
  // GamepadButton.textContent = `Click count: ${event.detail}`;

});


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
