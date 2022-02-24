const frameHeaderContents = {
  홈: [
    {
      frame: "dow-top",
      frameTitle: "요일 연재 TOP",
      frameSubTitle: "(1,627)",
    },
    { frame: "expected-top", frameTitle: "기대 신작 TOP" },
    { frame: "romance-top", frameTitle: "로맨스 TOP" },
    { frame: "daily-top", frameTitle: "일간 랭킹 TOP" },
    { frame: "event-banner", frameTitle: "추천 이벤트" },
  ],
};

export const frameHeader = (selectedValue, frame) => {
  const contents = frameHeaderContents[selectedValue].find(
    (e) => e.frame === frame.block
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
