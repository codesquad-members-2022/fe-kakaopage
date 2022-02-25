const createTagTemplate = (tag, content) => {
  return `<${tag}>${content}</${tag}>`;
};

const createListTemplate = (tag, domStringContents) => {
  return domStringContents.map((content) => createTagTemplate(tag, content));
};

const createLiListTemplate = (domStringContents) => {
  return createListTemplate("li", domStringContents).join("");
};

export { createTagTemplate, createLiListTemplate };
