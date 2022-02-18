// 함수 네이밍 
//  - 특정 페이지에서 작동할 것 render + 페이지 + 정보
//  - 공통으로 사용하는 것 render + 컴포넌트 이름 


const weeddaysData = ['월', '화', '수', '목', '금', '토', '일', '완결'];

function renderNav(className, textLists) {
    let lists = '';
    textLists.forEach((textList) => {
        lists += `<li class="${className}-list">${textList}</li>`
    })
    return `<nav class="${className}">
    <ul class="${className}-lists">
        ${lists}
    </ul>
</nav>`
}


// 공통적으로 사용되는 부분


export {  }