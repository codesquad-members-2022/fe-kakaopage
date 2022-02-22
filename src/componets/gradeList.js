const getGradeRowTemp = (props) => {
    return (
        `<li class="row">
            <a href="${props.link}">
                <div class="work__inner-wrap">
                    <img src="${props.imgUrl}" alt="${props.title}">
                    <div class="work__rank bg-black-bar">${props.rank || props.grade}</div>
                </div>
                <h4 class="work__title">${props.title}</h4>
                <span class="work__reader">${props.readerNum}</span>
            </a>
        </li>`
    );
}

const getGradeListTemp = (props, length) => {
    let gradeList = '';
    for(let i = 0; i < length; i++) {
        gradeList += `${getGradeRowTemp(props[i])}\n`
    }
    return (
    `<ul class="row-${length}">
        ${gradeList}
    </ul>`
    );
}

export { getGradeListTemp };