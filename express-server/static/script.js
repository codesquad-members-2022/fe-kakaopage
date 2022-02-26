import {addEvent} from "./utils.js";
import {MenuNav, menuNav} from "./components/menuNav.js";
import {HeaderBar, headerBar} from "./components/headerBar.js";
import {Home, home} from "./pages/home.js";
import {Daily, daily} from "./pages/daily.js";
import {Component} from "./Core/Component.js";


const body = document.querySelector('body');

// const App = async (target, position)=>{
const App = class extends Component{
    async initState() {
        return {
            page:'toon',
            cat:'home'
        }
    }

    template(){
        return`
    <header>
        </header>
        <main class="mainContent">
            <nav class="mainNav">
            </nav>
            <section>
                <div class="listContentBox TopBanner">
                ${renderRoute.CATS.map((cat,index)=>`
                    <span data-idx=${index}>${cat}</span>
                `)}
                </div>
            </div>
            <div></div>
            </section>
            </main>
            <footer>
    </footer>
    `;
    }
    mounted(){
        new HeaderBar(this.select('header'));
        new MenuNav(this.select('.mainContent>.mainNav'));
        new Home(this.select('section'));

    }
   setEvent() {
       this.addEvent('click', '.TopBanner>span', async (e)=>{
           const cat = e.target.closest('span')
           this.select('.TopBanner>.selected').classList.remove('selected');
           cat.classList.add('selected');
           const section = this.select('section');
           renderRoute[cat.dataset.idx](section);
       })
   }
}
const dummy = `<span>This is Dummy Page</span>`
const renderRoute = {
    CATS : ["홈", "요일연재", "웹툰", "소년", "드라마", "로맨스", "로판", "액션무협", "BL"],
    0:(target)=>new Home(target),
    1:(target)=>new Daily(target),
}

new App(body)




