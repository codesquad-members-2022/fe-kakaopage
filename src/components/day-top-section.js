import { createDayNav } from "./day-nav.js";

function createDayTopSection({ id = "", header, contents, contentsNumber }) {
  const section = `
  <section class="contents-section" id="${id}">
    <div class="contents-header">
        <h2>
          ${header}
          <span class="number-of-contents">(${contentsNumber})</span>  
        </h2>
        <div>
            <a href="">더보기 ></a>
        </div>
    </div>
    ${createDayNav()}
    <div class="contents-wrapper">
      ${contents}
    </div>
  </section>
  `;
  return section;
}

export { createDayTopSection };
