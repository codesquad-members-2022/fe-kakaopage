import { createBox } from "../box/index.js";

export function createRecommendEvent() {
  return createBox({ title: "추천 이벤트", contents: adImg });
}

const style = `
width: 678px;
height: 339px;
border-radius: 5px;
margin-bottom: 10px;
`;

const adImg = `
<img style="${style}" src="//dn-img-page.kakao.com/download/resource?kid=E8yMN/hzp2nOI0PT/XjH8y8XBKB7K53kSq88HKk" alt="이그레트 시즌 완결 기념 경품 이벤트" draggable="false">
`;
