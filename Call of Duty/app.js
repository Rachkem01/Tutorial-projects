const btn= document.querySelector(".btn");
 
const closeIcon = document.querySelector(".close-icon");

const trailerContainer = document.querySelector(".trailer-container")

const video = document.querySelector("video")

btn.addEventListener("click", e => {
    trailerContainer.classList.remove("active")
});

closeIcon.addEventListener("click", e =>{
    trailerContainer.classList.add("active")
    video.pause()
    video.currentTime = 0
})
