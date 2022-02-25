document.querySelectorAll(".css-1godi3z img").forEach((e) => {
  p.push({
    title: e.alt,
    img: e.src,
    rating: isNaN(
      e.parentNode.parentNode.parentNode.querySelector(".css-nfxgqr").innerText
    )
      ? 10.0
      : e.parentNode.parentNode.parentNode.querySelector(".css-nfxgqr")
          .innerText,
    genere: document.querySelector(".css-fnihu6").innerText.split(" ")[0],
    user: e.parentNode.parentNode.parentNode.parentNode.querySelector(
      ".css-1c1ahuy"
    ).innerText,
    info: e.parentNode.parentNode.parentNode.parentNode.querySelector(
      ".css-1xyrvsd img"
    )
      ? e.parentNode.parentNode.parentNode.parentNode.querySelector(
          ".css-1xyrvsd img"
        ).alt
      : null,
  });
});
