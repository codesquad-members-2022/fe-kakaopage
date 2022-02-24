import Nav from './Nav.js';
import { MainNavItems } from '../../data';
import { convertStringToHTML } from '../../utils.js';

const MainNav = () => convertStringToHTML(`<nav class="contents main-nav">${Nav(MainNavItems)}</nav>`);

export default MainNav;