export const gridMenu = (data) => {
  const template = `${data.toonTodayMenu
    .map(
      (v) => `
<a>
  <span>${v.content}</span>
  ${v.sub === "" ? "" : `<div>${v.sub}</div>`}
</a>`
    )
    .join("")}`;

  return template;
};
