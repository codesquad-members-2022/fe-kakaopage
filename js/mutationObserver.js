export const waitCreateEl = (selector, fn) => {
    const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
            fn();
            console.log("??");
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        attributes: true,
        subtree: true,
    });
};

// reference
// https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
