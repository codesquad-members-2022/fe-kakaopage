const createNoticeBox = (text) => {
  return `
    <div class="notice-box">
      <p class="notice-box__desc">${text}</p>
    </div>
`;
};

export { createNoticeBox };
