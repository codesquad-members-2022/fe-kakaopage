import { createExtendsRelation } from "../../../../utils.js";
import Component from "../../../Component.js";

function ContentsBox(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(ContentsBox, Component);

ContentsBox.prototype.template = function () {
  const { title, titleNum, contentBody } = this.state;
  return `
     <div class="main__contents">
       <div class="contents__header">
         <div class="contents__title">
           <span>${title}</span>
           ${titleNum ? `<span class="titleNum">(${titleNum})</span>` : ""}
         </div>
         <div class="contents__more">
           <span>더보기></span>
         </div>
       </div>
       ${contentBody}
     </div>`;
};

export default ContentsBox;
