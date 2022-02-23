
export function select(selector) {
    return document.querySelector(selector)
}

export function addClass(target, className) {
    target.className += ` ${className}` // 한칸 띄고 넣어야함.
}

export function removeClass(className) {
    const target = select(`.${className}`)
    target.classList.remove(`${className}`)
}
