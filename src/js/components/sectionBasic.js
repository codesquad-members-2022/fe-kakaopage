const createSectionBasic = (title, content) => {
  return `
    <div class="section-basic">
      <h4 class="section-basic__title">${title}<span></span></h4>
      <span class="section-basic__view-more">
        <span>더보기</span><img src="static/icon/ic-more-gray.svg"/>
      </span>
      <div class="section-basic__content">${content}</div>
    </div>
`;
};

export { createSectionBasic };
