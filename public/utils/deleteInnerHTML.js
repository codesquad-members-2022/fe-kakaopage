function deleteInnerHTML(className) {
    document.querySelector(`${className}`).innerHTML = '';
}

export { deleteInnerHTML }