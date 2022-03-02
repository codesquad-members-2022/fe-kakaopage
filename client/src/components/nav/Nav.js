const Nav = (navItems) => {
  return `<ul>
            ${navItems.reduce(
              (prev, cur) => prev += `<li${cur.isSelected ? ' class="selected"' : ''}
                                      data-category="${cur.data}">
                                        ${cur.name}
                                      </li>`, '')}
          </ul>`;
}

export default Nav;