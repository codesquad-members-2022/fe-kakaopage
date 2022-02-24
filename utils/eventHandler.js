function navClickEventHandler(className, navLists, func, sectionNums) {
    const parentEL = document.querySelector(`.${className}`);
    parentEL.addEventListener(('click'), ({target}) => {
        if(!target.classList.contains('active')) {
            [...parentEL.children].forEach((child) => {
                child.classList.remove('active');
            })
            target.classList.add('active');
        }
        updateSections(navLists, target, func, sectionNums);
    })
}

function updateSections(lists, target, func, sectionNums) {
    lists.forEach((list, index) => {
        if(target.textContent === list) func(index, sectionNums);
    })
}

export { navClickEventHandler };