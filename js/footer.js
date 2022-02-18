import { $ } from "./utils.js";

export const footer = {    
    detailSlide: function() {
        const businessInfoEl = $(".footer__business_info");
        const businessDetails = $(".footer__details");
        businessInfoEl.addEventListener("click", ()=> {
            businessInfoEl.classList.toggle("footer__business_info_off")
            businessDetails.classList.toggle("no_display")

            businessDetails.classList.contains("no_display") ? 
            businessInfoEl.style.setProperty("--background", "url(../images/icon_trace_off.png)") :
            businessInfoEl.style.setProperty("--background", "url(../images/icon_trace_on.png)");
        });
    }
}