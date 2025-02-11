const progress = document.querySelector("#progress")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const circles= document.querySelector(".circle")

let activeIndex = 1;

nextBtn.addEventListener('click',() =>{
    activeIndex ++;
    if(activeIndex > circles.length) {
        activeIndex = circles.length
    }
    updateUI();
})

function updateUI(){
    circles.forEach((circle, index) =>{
        if(index < activeIndex) {
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    });
    const actives =document.querySelectorAll(".active")
    progress.style.width =((actives.length -1) /(circles.length -1)) *100 + '%'

    if(activeIndex ===1){
        prevBtn.disabled = true
    }
    else if(activeIndex === circles.length){
        nextBtn.disabled = true
    }
    else{
        prevBtn.disabled = false;
        nextBtn.disabled =false;
    }
}
