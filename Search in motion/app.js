const searchContainer = document.querySelector(".container");

const mic = document.querySelector(".mic");

const search = document.querySelector(".search");

search.addEventListener("click", () =>{
    searchContainer.classList.toggle('active');
    mic.classList.toggle('hidden');
})