export default function footer() {
    const businessInfoEl = document.querySelector(".footer__business_info");
    const businessDetails = document.querySelector(".footer__details");
    businessInfoEl.addEventListener("click", ()=> {
        if(businessInfoEl.classList.contains("footer__business_info_off")) {
            businessInfoEl.classList.remove("footer__business_info_off");
            businessInfoEl.classList.add("footer__business_info_on");
            businessInfoEl.style.setProperty("--background", "url(images/icon_trace_on.png)");
            businessDetails.style.display = 'block';
        } else if(businessInfoEl.classList.contains("footer__business_info_on")) {
            businessInfoEl.classList.remove("footer__business_info_on");
            businessInfoEl.classList.add("footer__business_info_off");
            businessInfoEl.style.setProperty("--background", "url(images/icon_trace_off.png)");
            businessDetails.style.display = 'none';
        }
    });

}