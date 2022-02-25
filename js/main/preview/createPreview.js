const createPreview = (previewData) => {
  const PREVIEW_CLASSNAME = 'preview';
  const $preview = document.createElement('div');
  $preview.className = PREVIEW_CLASSNAME;
  const {
    previewCoverPath,
    title,
    state,
    subscriber,
    summary,
    waitfree,
    genre,
  } = previewData;

  const previewCoverHTML =
    /*html*/
    ` <div class="preview-cover">
        <img src="${previewCoverPath}.png" />
      </div>`;

  const previewInfoHTML =
    /*html*/
    ` <div class="preview-info">
        <div class="preview-info-box">
          <div class="preview-title">
            <h2>${title}</h2>
          </div>
          <div class="preview-detail">
            ${
              state
                ? /*html*/
                  ` <span class="preview-state">
                      <img src="./assets/data/state/${state}.svg" />
                    </span>`
                : ''
            }
            <div class="preview-class">
              ${
                waitfree
                  ? `<img src="./assets/data/state/waitfree.svg" alt="waitfree.svg"/>`
                  : ''
              }
              ${genre ? `<span>${genre}</span>` : ''}
            </div>
            ${
              subscriber
                ? /*html*/
                  `
                  <span class="seperator">
                    <img src="assets/static/Seperator.png" alt="seperator">
                  </span>

                  <div class="preview-subscribers">
                    <img src="./assets/static/subscriber.svg" alt="ico-bigthum-person">
                    <span>${(subscriber / 10000).toFixed(1)}만명</span>
                  </div>`
                : ''
            }
          </div>
        </div>
        <div class="preview-summary">
          <h3>${summary}</h3>
        </div>
      </div>`;

  $preview.innerHTML = previewCoverHTML + previewInfoHTML;
  return $preview;
};

export default createPreview;
