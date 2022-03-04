import Nav from './Nav.js';
import { store } from '../../data/store.js';

const PageNav = () => `<nav class="page-nav">${Nav(store.navItems.page)}</nav>`;

export default PageNav;
