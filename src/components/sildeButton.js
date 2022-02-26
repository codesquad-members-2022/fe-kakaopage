const getSildeButtonTemp = (className) =>
    `<div class="slide-buttons">
        <button class="slide-button slide-button--prev ${className}" type="button"><span class="hidden-text">왼쪽으로 이동</span></button>
        <button class="slide-button slide-button--next ${className}" type="button"><span class="hidden-text">오른쪽으로 이동</span></button>
    </div>`;

export { getSildeButtonTemp };