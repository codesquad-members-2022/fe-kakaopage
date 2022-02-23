const MenuListItem = ({ title, badge = null, link }) => {

  return `<a href="${link}">${title} 
            ${badge ? `<span class="badge">${badge}</span>` : ''}
          </a>`;
};

export default MenuListItem;