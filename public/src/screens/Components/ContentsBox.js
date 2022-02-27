import { createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";

function ContentsBox(target, state) {
  Component.call(this, target, state);
  this.state = {
    ...state,
    contentsBodyDiv: this.prototype.createContentBodyDiv(),
  };
  this.render();
}

ContentsBox.prototype.createContentBodyDiv = function () {
  const { classes, contents, contentsBody } = this.state;
  const contentsBodyDiv = document.createElement("div");
  contentsBodyDiv.classList.add("contents__body");
  contentsBodyDiv.setAttribute("data-contents", contents);
  if (classes) {
    classes.forEach((className) => {
      contentsBodyDiv.classList.add(className);
    });
  }
  contentsBodyDiv.innerHTML = contentsBody?.template() || "";
  return contentsBodyDiv;
};

ContentsBox.prototype.template = function () {
  const { title, titleNum, contentsBodyDiv } = this.state;
  return `<li class="mainBox main__contents">
   <div class="contents">
     <div class="contents__header">
       <div class="contents__title">
         <span>${title}</span>
         ${titleNum ? `<span class="titleNum">(${titleNum})</span>` : ""} 
       </div>
       <div class="contents__more">
         <span>더보기></span>
       </div>
     </div>
     ${contentsBodyDiv.outerHTML}
   </div>
 </li>`;
};

createExtendsRelation(ContentsBox, Component);

export default ContentsBox;
