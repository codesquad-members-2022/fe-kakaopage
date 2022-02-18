import Nav from './Nav.js';
import { MainNavItems } from '../../data';

const MainNav = () => `<nav class="contents main-nav">${Nav(MainNavItems)}</nav>`;

export default MainNav;