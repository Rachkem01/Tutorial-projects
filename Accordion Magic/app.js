const itemHeaders = document.querySelectorAll(".accordion-item-header");



itemHeaders.forEach((accordion) => {
    accordion.addEventListener("click",collapseAccordions);
    function collapseAccordions(){
        const activeAccordion = document.querySelector(".accordion-item-body-content")
        if (accordion && activeAccordion !== accordion){
            activeAccordion.classList.toggle("active");
            // activeAccordion.nextElementSibling.style.maxHeight = 0
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

// const accordion = document.getElementsByClassName(".accordion-item");
// for (i=0; i < accordion.length; i++){
//     accordion[i].addEventListener("click",function(){
//         this.classList.toggle('active')
//     })
// }