// selectField
const selectField =document.querySelector("#selectField");

// selectText
const selectText =document.querySelector("#selectText");

const list =document.querySelector("#list");
const arrow =document.querySelector("#arrow-down");


const options = document.querySelector(".options")

selectField.addEventListener("click", () => {
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate")
})