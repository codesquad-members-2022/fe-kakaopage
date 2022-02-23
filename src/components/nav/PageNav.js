import Nav from './Nav.js';
import { PageNavItems } from '../../data';

const PageNav = () => `<nav class="page-nav">${Nav(PageNavItems)}</nav>`;

export default PageNav;