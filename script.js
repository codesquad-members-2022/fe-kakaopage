import {AddEvent} from "./utils/utils.js";
import {menuNav} from "./components/menuNav.js";
import {headerBar} from "./components/headerBar.js";
import {home} from "./pages/Home.js";
import {daily} from "./pages/Daily.js";


const body = document.querySelector('body');
const App = async (target, position)=>{
    target.innerHTML = `
    <header>
        </header>
        <main class="mainContent">
            <nav class="mainNav">
            </nav>
            <section>
                <div class="listContentBox TopBanner">
                <span class="home selected">홈</span>
                <span class="daily">요일연재</span>
                <span class="toon">웹툰</span>
                <span>소년</span>
                <span>드라마</span>
                <span>로맨스</span>
                <span>로판</span>
                <span>액션무협</span>
                <span>BL</span>
                </div>
            </div>
            <div></div>
            </section>
            </main>
            <footer>
    </footer>
    `;
    headerBar(target.querySelector('header'));
    menuNav(target.querySelector('.mainContent>.mainNav'));
    const section = target.querySelector('section')
    await home(section, 'beforeend');
    AddEvent(target, 'click', '.TopBanner>span', async (e)=>{
        const cat = e.target.closest('span')
        target.querySelector('.TopBanner>.selected').classList.remove('selected');
        cat.classList.add('selected');
        cat.classList.contains('home')? await home(section, 'beforeend'): await daily(section, 'beforeend');
    })

}
await App(body,'afterbegin')

//
// const renderGrid = ()=>{
//     const grid=document.querySelector('.comicsGrid');
//     for(let i=0; i<20; i++){
//        comicItem(images.thumbnails, infographic, grid);
//     }
// }
// const renderDaily = ()=> {
//     let prev = grid.previousElementSibling;
//     while(prev){ //grid 이전의 노드를 삭제
//         grid.parentNode.removeChild(prev);
//         prev = grid.previousElementSibling;
//     }
//     let parentPrev =grid.parentElement.previousElementSibling;
//     while(parentPrev.className!=='catchphrase'){
//         parentPrev.parentNode.removeChild(parentPrev);
//         parentPrev = grid.parentElement.previousElementSibling;
//     }
//     BannerBox(bannerBox)
//     dailyHeader(infographic, comicsBox, 'beforebegin');
//     grid.style.paddingTop='';
//     grid.innerHTML= '';
//     renderGrid();
// }
//
// const renderHome = ()=>{
//     let prev = comicsBox.previousElementSibling;
//     while(prev.className !== 'catchphrase') {
//         prev.parentNode.removeChild(prev);
//         prev= comicsBox.previousElementSibling;
//     }
//     HomeHeader(comicsBox, 'afterbegin');
//     GrayCube(comicsBox, 'beforebegin')
//     AdBanner(comicsBox, 'beforebegin');
//     grid.innerHTML ='';
//     grid.style.paddingTop = '20px';
//     renderGrid();
// }
// const renderHeader = ()=>{
//     menuNav(nav, 'afterbegin');
//     BannerBox(bannerBox, 'afterbegin', images, infographic);
// }
//
// let template = '';
// const map = new Map()
// AddEvent(nav, 'click', 'li', ({target})=>{
//     nav.querySelector('.selected').classList.remove('selected')
//     target.classList.toggle('selected')
//     const li = target.closest('li');
//     li.classList.add('selected');
//     if (li.classList.contains('toon')) {
//         if(!template)return;
//         section.innerHTML = template;
//         template = "";
//     } else {
//         if(template)return;
//         template = section.innerHTML;
//         section.innerHTML= "<span>This is Dummy Page</span>";
// }})
//
//
// const topBanner = section.querySelector('.TopBanner');
//
//
// AddEvent(topBanner, 'click', 'span', ({target})=>{
//     topBanner.querySelector('.selected').classList.remove('selected');
//     const span = target.closest('span')
//     span.classList.add('selected');
// })
// AddEvent(topBanner, 'click', '.home', e=>{
//     renderHome();
// })
// AddEvent(topBanner, 'click', '.daily', e=>{
//     renderDaily();
// })
//
// renderHeader();
// renderHome();




