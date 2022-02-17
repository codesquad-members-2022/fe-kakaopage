function pickFromArr (arr) {
    const length = arr.length;
    const pickNum = Math.floor(Math.random() * length);

    return arr[pickNum]
}

function randomView () {
    return (Math.floor(Math.random() * 901) + 100) / 10
}

module.exports = {
    pickFromArr,
    randomView
}