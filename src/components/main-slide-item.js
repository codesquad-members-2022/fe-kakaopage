function createMainSlideItem(itemData, index) {
  return `
  <div class="main-slide-item" data-index="${index}">
    <img src="${itemData.img}"/>
    
    <div class="item-description">
      <dl>
        <dt>${itemData.title}</dt>
        <div class="item-dd-wrapper">
          <dd>
            <img src="${itemData.badge}"/>
          </dd>
          <dd>${itemData.category}</dd>
          <dd>${itemData.readers}"</dd>
        </div>
      </dl>
      <div class="item-bottom-caption">
        <div class="vertical-center">
        <div>${itemData.caption}</div>
        </div>
      </div>
    </div>
  </div>
  `;
}

export { createMainSlideItem };
