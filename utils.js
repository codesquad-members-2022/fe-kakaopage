function textConvertor(nodeClassname, newText) {
    const node = document.querySelector(`.${nodeClassname}`);
    node.textContent = newText;
}

function append(parentNodeClassName, child) {
    const parent = document.querySelector(`.${parentNodeClassName}`);
    parent.innerHTML += child;
    return parent;
}

export {append};