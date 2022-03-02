import {MenuNav} from "./components/MenuNav.js";
import {HeaderBar} from "./components/HeaderBar.js";
import {Home} from "./pages/home.js";
import {Daily} from "./pages/daily.js";
import Component, {InnerHTML, Processor} from "./Core/Component.js";
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
          
            <section>
              ${this.$state.tab === tabs.웹툰 ? `
                <div class="listContentBox TopBanner">
                    ${CATS.map((cat, index) => `
                    <span ${this.$state.category === cat ? "class='selected'" : ""} data-cat=${cat}>${cat}</span>
                `).join('')}
                </div>`
            : `<span>This is Dummy Page</span>`}
            </section>
            </main>
            <footer>
    </footer>
    `;
    }

    mounted() {
        const {onClickPage} = this;
        const {tab} = this.$state;
        new HeaderBar(this.select('header'), new InnerHTML());
        new MenuNav(this.select('.mainContent>.mainNav'), new InnerHTML(), {
            onClickPage: onClickPage.bind(this),
            tab
        });
        if (tab === tabs.웹툰) {
            renderRoute[this.$state.category](this.select('section'));
        }
    }

    onClickPage(name) {
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

    홈: (target) => new Home(target, new class extends Processor {
        render(component) {
            const header = component.$target.firstElementChild;
            component.$target.innerHTML = component.template();
            component.$target.insertAdjacentElement('afterbegin', header);
        }
    }),
    요일연재: (target) => new Daily(target, new class extends Processor {
        render(component) {
            const header = component.$target.firstElementChild;
            component.$target.innerHTML = component.template();
            component.$target.insertAdjacentElement('afterbegin', header);
        }
    }),
    웹툰: (target) => null,
    소년: (target) => null,
    드라마: (target) => null,
    로맨스: (target) => null,
    로판: (target) => null,
    액션무협: (target) => null,
}

new App(body, new InnerHTML(), {})



