import { frameHeader } from "../components/frame-header.js";

const eventBannerContents = () => {
  return `<img
  src="https://dn-img-page.kakao.com/download/resource?kid=E8yMN/hzp2nOI0PT/XjH8y8XBKB7K53kSq88HKk"
  alt="event-banner"
  class="event-banner__img"
/>`;
};

export const eventBanner = (selectedValue, frameHeaderClass) => {
  return frameHeader(selectedValue, frameHeaderClass) + eventBannerContents();
};
