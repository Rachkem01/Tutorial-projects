let indicator= document.querySelector(".scroll-indicator .progress");

let scrollHeight = document.documentElement.scrollHeight -document.documentElement.clientHeight;

let scrollTop = document.documentElement.scrollTop;
let scrolled = (scrollTop / scrollHeight) * 100;


window.addEventListener("scroll",  e => {
    
    indicator.style.width = `'${scrolled}%'`
}

);

