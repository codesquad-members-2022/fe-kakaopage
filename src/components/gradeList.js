const getGradeRowTemp = (dataEl) => {
    return (
        `<li class="row">
            <a href="${dataEl.link}">
                <div class="work__inner-wrap">
                    <img src="${dataEl.imgUrl}" alt="${dataEl.title}">
                    <div class="work__rank bg-black-bar">${dataEl.rank || dataEl.grade}</div>
                </div>
                <h4 class="work__title">${dataEl.title}</h4>
                <span class="work__reader">${dataEl.readerNum}</span>
            </a>
        </li>`
    );
}

const getGradeListTemp = (data) => {
    const gradeList = data.reduce((acc, cur) => acc += getGradeRowTemp(cur), '');
    return (
    `<ul class="row-5">
        ${gradeList}
    </ul>`
    );
}

export { getGradeListTemp };