
import {MenuNav} from "./components/MenuNav.js";
import {HeaderBar} from "./components/HeaderBar.js";
import {Home} from "./pages/home.js";
import {Daily} from "./pages/daily.js";
import Component from "./Core/Component.js";
import {CATS, tabs} from "./utils.js";


const body = document.querySelector('body');

// const App = async (target, position)=>{
const App = class extends Component {
    setup() {
        this.$state = {category: "홈", tab: tabs.웹툰}
    }

    template() {
        return `
    <header>
        </header>
        <main class="mainContent">
            <nav class="mainNav">
            
            </nav>
            ${this.$state.tab === tabs.웹툰 ?`
            <section>
                <div class="listContentBox TopBanner">
                    ${CATS.map((cat, index) => `
                    <span ${this.$state.category === cat ? "class='selected'" : ""} data-cat=${cat}>${cat}</span>
                `).join('')}
                </div>
               
            </section>` : `<span>This is Dummy Page</span>`}
            </main>
            <footer>
    </footer>
    `;
    }

    mounted() {
        const {onClickPage} = this;
        const {tab} = this.$state;
        new HeaderBar(this.select('header'));
        new MenuNav(this.select('.mainContent>.mainNav'), {onClickPage:onClickPage.bind(this), tab});
        renderRoute[this.$state.category](this.select('section'));
    }

    onClickPage(name){
        this.setState({tab: name})
    }

    setEvent() {
        this.addEvent('click', '.TopBanner>span', ({target}) => {
            this.setState({category: target.dataset.cat})
        })
    }
}
const dummy = `<span>This is Dummy Page</span>`
const renderRoute = {

    홈: (target) => new Home(target, {}),
    요일연재: (target) => new Daily(target, {}),
    웹툰: (target) => null,
    소년: (target) => null,
    드라마: (target) => null,
    로맨스: (target) => null,
    로판: (target) => null,
    액션무협: (target) => null,
}

new App(body)




