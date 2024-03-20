let countEl = document.querySelector("#count")

let saveEl = document.querySelector("#save");

let incrementBtn = document.querySelector(".increment-btn");

let saveBtn = document.querySelector(".save-btn");

let count =0;

incrementBtn.addEventListener("click", () =>{
    count +=1;
    countEl.textContent = count;
})

saveBtn.addEventListener("click", () =>{
let CountStr = count + ', '
saveEl.textContent += CountStr
countEl.textContent =0
count = 0;
})