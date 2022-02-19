export function createHTMLElement(tagName, className) {
  const HTMLElement = document.createElement(tagName);
  HTMLElement.classList.add(className);
  return HTMLElement;
}

export function createImageElement(url) {
  const imageElement = document.createElement("img");
  imageElement.src = url;
  return imageElement;
}

export function createFormElement(tagName, className, type) {
  const formElement = document.createElement(tagName);
  formElement.classList.add(className);
  formElement.type = type;
  return formElement;
}

export function createTextElement(tagName, className, text) {
  const textElement = document.createElement(tagName);
  textElement.classList.add(className);
  textElement.textContent = text;
  return textElement;
}

export function createParentChildStructure(parentTag, parentClass, childTag, childClass, childTextList) {
  const parentElement = createHTMLElement(parentTag, parentClass);
  childTextList.forEach((childText) => {
    const childElement = createHTMLElement(childTag, childClass);
    childElement.textContent = childText;
    parentElement.appendChild(childElement);
  });
  return parentElement;
}

export function createCategoryNavigation(navigationClass, categoryClass, categoryList) {
  const categoryNavigation = createParentChildStructure("nav", navigationClass, "div", categoryClass, categoryList);
  categoryNavigation.classList.add("category_align");
  return categoryNavigation;
}

export function createUnorderedList(ulClass, liClass, listTextList) {
  const unorderedList = createParentChildStructure("ul", ulClass, "li", liClass, listTextList);
  return unorderedList;
}
