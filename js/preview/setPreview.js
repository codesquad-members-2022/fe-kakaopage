import previews from '../../json/preview.json' assert { type: 'json' };

const setPreviewCover = (preview) => {
  const previewCover = document.querySelector('.preview-cover');
  previewCover.innerHTML = `<img src="${preview.previewCoverPath}" alt="${preview.title}" />`;
};

const setPreviewInfo = (preview) => {
  const previewTitle = document.querySelector('.preview-title');
  previewTitle.innerHTML = `<h2>${preview.title}</h2>`;

  const previewState = document.querySelector('.preview-state');
  previewState.innerHTML = `<img src="./assets/data/state/${preview.state}.svg" alt="${preview.state}"/>`;

  const previewClass = document.querySelector('.preview-class');
  const isWaitFree = preview.waitfree;
  previewClass.innerHTML =
    `${
      isWaitFree
        ? `<img src="./assets/data/state/waitfree.svg" alt="waitfree.svg"/>`
        : ''
    }` + `<span>${preview.class}</span>`;

  const subscribers = document.querySelector('.preview-subscribers');
  subscribers.innerHTML = `
  <img src="./assets/static/subscriber.svg" />
  <span>${(preview.subscriber / 10000).toFixed(1)}만명</span>`;

  const previewSummary = document.querySelector('.preview-summary');
  previewSummary.innerHTML = `<h3>${preview.summary}</h3>`;
};

const setPreview = (category) => {
  const preview = previews[category];
  setPreviewCover(preview);
  setPreviewInfo(preview);
};

export default setPreview;
