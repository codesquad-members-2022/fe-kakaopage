function createContentsSection({ id = "", header, contents }) {
  const section = `
  <section class="contents-section" id="${id}">
    <div class="contents-header">
        <h2>${header}</h2>
        <div>
            <a href="">더보기 ></a>
        </div>
    </div>
    <div class="contents-wrapper">
      ${contents}
    </div>
  </section>
  `;
  return section;
}

export { createContentsSection };
