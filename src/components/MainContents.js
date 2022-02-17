import { MainNav } from './';
import { MainNavItems } from '../data';

const MainContents = () => {

  return `<div class="main-contents">
            ${MainNav(MainNavItems)}
          </div>`;
}

export default MainContents;