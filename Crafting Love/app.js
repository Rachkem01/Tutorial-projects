const grayHeart = document.querySelector(".gray-heart")

const redHeart = document.querySelector(".red-heart")

grayHeart.addEventListener("click",() =>{
    redHeart.classList.add("animation")
    grayHeart.classList.add("fill-color")
});

redHeart.addEventListener("click",() =>{
    redHeart.classList.add("animation")
    redHeart.classList.add("fill-color")
});