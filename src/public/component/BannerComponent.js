export const BannerComponent = (images) => {
    return /* html */ `<article class="advertise">
                <div class="advertise__left"></div>
                <img class="advertise__center" src="${images}" />
                <div class="advertise__right"></div>
            </article>
    `;
}
