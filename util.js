export function pickFromArr (arr) {
    const length = arr.length;
    const pickNum = Math.floor(Math.random() * length);

    return arr[pickNum]
}

export function randomView () {
    return (Math.floor(Math.random() * 901) + 100) / 10
}

export function addToContents(input){
    const contents = document.getElementById('contents');

    contents.innerHTML += input;
}

export function combineFormats(arr){
    const res = arr.reduce( (pre, cur) => pre + cur )

    return res;
}

export function addClickEventToElement(elementName, func){
    const element = document.querySelector(elementName);

    element.addEventListener("click", func)
}