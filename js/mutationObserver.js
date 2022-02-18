export const waitCreateEl = (selector) => {
    return new Promise((res) => {
        if (document.querySelector(selector)) {
            return res(document.querySelector(selector));
        }
        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                res(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
        });
    });
};

// reference
// https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
// https://www.zerocho.com/category/HTML&DOM/post/5be24eacdb0c31001c4c5040
