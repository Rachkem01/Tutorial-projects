

let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgwraper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img,index)=>{
    img.addEventListener("click", () =>{
        openModal(`images/img${index}.jpg`)
    })
})
function openModal(pic) {
    wrapper.style.display = "flex";
    imgwraper.src = pic
}

