export const category = (list) => {
  const template = `
    <ul>
    ${list
      .map(
        (v, i) =>
          `<li ${
            i === 0 && `class=check`
          }><a data-action=toonCategory>${v}</a></li>`
      )
      .join("")}
    </ul>`;

  return template;
};
