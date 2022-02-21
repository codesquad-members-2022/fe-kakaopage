function navClickEventHandler(className, navLists, func, sectionNums) {
    const parentEL = document.querySelector(`.${className}`);
    parentEL.addEventListener(('click'), ({target}) => {
        if(!target.classList.contains('active')) {
            [...parentEL.children].forEach((child) => {
                child.classList.remove('active');
            })
            // children은 HTMLCOLLECTION이라서, 배열 메서드를 사용할 수 없었음.
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