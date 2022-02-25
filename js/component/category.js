export const category = (list, engList) => {
  const template = `
    <ul>
    ${list
      .map(
        (v, i) => `<li><a data-action=toonCategory_${engList[i]}>${v}</a></li>`
      )
      .join("")}
    </ul>`;

  return template;
};
