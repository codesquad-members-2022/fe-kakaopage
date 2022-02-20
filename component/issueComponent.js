const IssueBox = (text) => {
    return /* html */ `<div class="issue__box">
                <span class="issue__box_text">${text}</span>
            </div>`;
}

export const IssueComponent = (issues) => {
    return /* html */ `<article class="issue">
                <div class="issue__inner">
                    ${issues.length ? 
                        issues.reduce((prev, cur) => prev += IssueBox(cur), '') : ''}
                </div>
            </article>`;
}