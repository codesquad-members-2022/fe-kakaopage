const subAdBannerContents = {
  홈: [
    "https://dn-img-page.kakao.com/download/resource?kid=D68XY/hzmU3GeNbl/3Oe8cKIXEA6AaWG11VLAo1",
  ],
};

export const subAdBanner = (selectedList) => {
  return subAdBannerContents[selectedList].reduce(
    (acc, cur) =>
      acc +
      `<svg
      class="sub-ad-banner__back-btn"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="20" cy="20" r="19.5" fill="#FFF" stroke="#D2D2D2" />
        <path
          fill="#999"
          d="M14.001 20.077a.996.996 0 00.292.648l6.997 6.987a1 1 0 001.413 0l.006-.005a1 1 0 00-.002-1.415l-6.3-6.29 6.3-6.29a1 1 0 000-1.416l-.004-.004a1 1 0 00-1.413 0l-6.997 6.987a.996.996 0 00-.292.648z"
        />
      </g>
    </svg>
    <svg
      class="sub-ad-banner__next-btn"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="20" cy="20" r="19.5" fill="#FFF" stroke="#D2D2D2" />
        <path
          fill="#999"
          d="M25.999 20.076a.996.996 0 01-.292.647L18.71 27.71a1 1 0 01-1.413 0l-.005-.005a1 1 0 010-1.415l6.3-6.29-6.3-6.29a1 1 0 010-1.414l.005-.006a1 1 0 011.413 0l6.997 6.987c.18.18.278.412.292.647z"
        />
      </g>
    </svg>
    <img
      src=${cur}
      alt="sub-ad-banner"
      class="sub-ad-banner__img"
    />`,
    ""
  );
};
