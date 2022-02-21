
function select(selector) {
    return document.querySelector(selector)
}

function createDailyNav() {
    const days = ['월', '화', '수', '목', '금', '토', '일', '전체']
    const $daily__nav = select('.daily__nav')
    let template = ``;
    days.forEach((day) => template += `<li><button type="button" class="daily__button">${day}</button></li>`)
    $daily__nav.innerHTML = template
}

// 이벤트 버블링 사용해보기.
function listenEvent() {
    const $daily__nav = select('.daily__nav')
    $daily__nav.addEventListener('click', (e) => (addOn(e)))
}

// 기존에 on 은 모두 삭제하고 클릭된 노드만 on
function addOn(e) {
    const clickedDay = e.target
    removeOn(e)
    if(clickedDay.className === 'daily__button') {
        clickedDay.className += ' daily__button-on' // 한칸 띄고 넣어야함.
    }
}

function removeOn(e) {
    const $daily__button = e.target;
    const $$daily__button = document.querySelectorAll(`.${$daily__button.className}`)
    $$daily__button.forEach((node) => node.classList.remove('daily__button-on'))
}

createDailyNav()
listenEvent()