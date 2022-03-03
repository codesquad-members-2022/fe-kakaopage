const createSectionBasic = (title, count, content) => {
  return `
    <div class="section-basic">
      <h4 class="section-basic__title">${title} <span class="section-basic__count">(${count})</span></h4>
      <span class="section-basic__view-more">
        <span>더보기</span><img src="images/icon/ic-more-gray.svg"/>
      </span>
      <div class="section-basic__content">${content}</div>
    </div>
`;
};

export { createSectionBasic };
