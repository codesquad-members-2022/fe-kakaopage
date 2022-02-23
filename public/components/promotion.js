import { insertIntoMain } from "../utils.js";

const createPromotionBlock = () => {
  const promotion = `<div class="center container promotion-container">
  <svg
    class="arrow-icon arrow--round-border arrow--gray"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M15 19l-7-7 7-7"
    />
  </svg>
  <img
    src="https://dn-img-page.kakao.com/download/resource?kid=gPEB1/hzhOklLHwx/b9atKBc9aVXCF3Gu9KKKHK"
  />
  <svg
    class="arrow-icon arrow--round-border arrow--gray"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 5l7 7-7 7"
    />
  </svg>
</div>`;

  insertIntoMain(promotion);
};

export { createPromotionBlock };
