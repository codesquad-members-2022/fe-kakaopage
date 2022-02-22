import { createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";

function ContentsBox(target, state) {
  Component.call(this, target, state);

  this.getBodyNode = function () {
    const contentsBodies = target.querySelectorAll(".contents__body");
    return [...contentsBodies].find(
      (body) => body.dataset.contents === this.state.contents
    );
  };

  this.template = function () {
    const { title, titleNum, classes, contents, contentsBody } = this.state;
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
       <div data-contents="${contents}" class="contents__body ${
      classes ? classes.join(" ") : ""
    }">
        ${contentsBody?.template()}
       </div>
     </div>
   </li>`;
  };
}

createExtendsRelation(ContentsBox, Component);

export default ContentsBox;
