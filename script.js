
const main = document.querySelector('main.mainContent');
const nav = main.firstElementChild;
const section = nav.nextElementSibling;
const el = (tag, attr = {}) => Object.entries(attr).reduce((el, v) => {
    typeof el[v[0]] == 'function' ? el[v[0]](v[1]) : (el[v[0]] = v[1])
    return el;
}, document.createElement(tag));
const randomGen = (arr) => arr[Math.floor(Math.random() * arr.length)];
const baner = [
    "https://dn-img-page.kakao.com/download/resource?kid=LzhAs/hzmU2AvYlu/EOPE8ht7JN5zxGT8v1v4ak",
    "https://dn-img-page.kakao.com/download/resource?kid=t6r3x/hzmU1Iolov/kG6uNECVt13YMlZP3QdVDK",
    "https://dn-img-page.kakao.com/download/resource?kid=LzhAs/hzmU2AvYlu/EOPE8ht7JN5zxGT8v1v4ak"
]
const thumbnails = ["https://dn-img-page.kakao.com/download/resource?kid=liDhp/hzp2mPH4pp/avQh3sIi2DG85rCRUegvG0&filename=th2"];
const infoGraphic = [
    ' <img src="https://static-page.kakao.com/static/pc/badge-bigthum-up.svg?a70b9cea4cb6b972e794d199820782a2"/>',
    ' <img src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858"/>',
    '<img src="https://static-page.kakao.com/static/common/line_top_banner.png?343ab907f94da6068f627f916b4b35ea" alt="Seperator"/>',
    '<img src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e"/>'
]
const ad = ["https://dn-img-page.kakao.com/download/resource?kid=byYqGK/hzp2i0TB9G/5Mpksv1Ooovlk7sy696kMK"]
const boxes = section.querySelectorAll('.listContentBox');
nav.addEventListener('click', (e) => {
    if (!e.target.closest('li').classList.contains('toon')) {
        boxes.forEach(box=>box.style.display = 'none');
        section.insertAdjacentHTML('afterbegin', '<span>This is Dummy Page!</span>');
    } else {
        boxes.forEach(box=>box.style.display='');

    }
})

