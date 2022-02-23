import {AddEvent} from "./utils.js";
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




