const createTagTemplate = (tag, content) => {
  return `<${tag}>${content}</${tag}>`;
};

const createListTemplate = (tag, domStringContents) => {
  return domStringContents.map((content) => createTagTemplate(tag, content));
};

const createLiListTemplate = (domStringContents) => {
  return createListTemplate("li", domStringContents).join("");
};

const htmlString2htmlElement = ({
  tag = "div",
  htmlString,
  className = "",
}) => {
  const $element = document.createElement(tag);
  $element.className = className;
  $element.innerHTML = htmlString;

  return $element;
};

const htmlStrings2htmlElementList = ({
  tag = "div",
  data,
  className = "",
  createChildElement,
}) => {
  const $element = document.createElement(tag);
  $element.className = className;

  data.map((data) =>
    $element.insertAdjacentElement("beforeend", createChildElement(data))
  );

  return $element;
};

const targetQuerySelector = ({ target = document, className = "" }) => {
  return target.querySelector(`.${className}`);
};

export {
  createTagTemplate,
  createLiListTemplate,
  htmlString2htmlElement,
  htmlStrings2htmlElementList,
  targetQuerySelector,
};
