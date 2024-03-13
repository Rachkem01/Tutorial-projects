const itemHeaders = document.querySelectorAll(".accordion-item-header");
const bodyContent =document.querySelector("accordion-item-body-content");


itemHeaders.forEach((accordion) => {
    accordion.addEventListener("click",collapseAccordions);
    function collapseAccordions(){
        const activeAccordion = document.querySelector(".active")
        if (accordion && activeAccordion !== accordion){
            activeAccordion.classList.toggle("active");
            activeAccordion.nextElementSibling.maxHeight=0
        }

        accordion.classList.toggle("active")
        const accordionItemBody= accordion.nextElementSibling

        if (accordion.classList.contains("active")){
            accordionItemBody.style.maxHeight =accordionItemBody.scrollHeight + "px";
        } 
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    }


})