const createPreview = (preview) => {
  const isWaitFree = preview.waitfree;
  const previewEl = document.createElement('div');
  previewEl.className = 'preview';

  const previewCoverHTML = `
  <div class="preview-cover">
    <img src="${preview.previewCoverPath}.png" />
  </div>`;
  const previewInfoHTML = `<div class="preview-info">
  <div class="preview-info-box">
    <div class="preview-title">
      <h2>${preview.title}</h2>
    </div>

    <div class="preview-detail">
    ${
      preview.state
        ? ` <span class="preview-state">
    <img src="./assets/data/state/${preview.state}.svg" />
  </span>`
        : ''
    }
      <div class="preview-class">
      ${
        isWaitFree
          ? `<img src="./assets/data/state/waitfree.svg" alt="waitfree.svg"/>`
          : ''
      }
      ${preview.class ? `<span>${preview.class}</span>` : ''}
      </div>
      ${
        preview.subscriber
          ? `      <span class="seperator">
      <img src="assets/static/Seperator.png" alt="seperator"></span>
    <div class="preview-subscribers">
      <img src="./assets/static/subscriber.svg" alt="ico-bigthum-person">
      <span>${(preview.subscriber / 10000).toFixed(1)}만명</span>
    </div>`
          : ''
      }

    </div>
  </div>
  <div class="preview-summary">
    <h3>${preview.summary}</h3>
  </div>
  </div>`;

  previewEl.innerHTML = previewCoverHTML + previewInfoHTML;
  return previewEl;
};

export default createPreview;
