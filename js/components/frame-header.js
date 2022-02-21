const frameHeaderContents = {
  홈: [
    {
      frameClass: "dow-top",
      frameTitle: "요일 연재 TOP",
      frameSubTitle: "(1,627)",
    },
    { frameClass: "expected-top", frameTitle: "기대 신작 TOP" },
    { frameClass: "romance-top", frameTitle: "로맨스 TOP" },
    { frameClass: "daily-top", frameTitle: "일간 랭킹 TOP" },
    { frameClass: "event-banner", frameTitle: "추천 이벤트" },
  ],
};

export const frameHeader = (selectedValue, frame) => {
  const contents = frameHeaderContents[selectedValue].find(
    (e) => e.frameClass === frame.class
  );

  if (contents === undefined) return;

  return `<div class="frame__header">
    <h2 class="frame__title">
      ${contents.frameTitle}
      ${contents.frameSubTitle ? `<span>${contents.frameSubTitle}</span>` : ""}
    </h2>
    <button class="frame__more">더보기 ></button>
    </div>`;
};
