let toggler = document.querySelector("#switch");
toggler.addEventListener("click",() =>{
//   if(toggler.checked === true){
//     document.body.style.backgroundColor = "black"
//   }else{
//     document.body.style.backgroundColor ="white"
//   }
// })

// Tetenary operator
toggler.checked === true 
 ? (document.body.style.backgroundColor = "black")
:
(document.body.style.backgroundColor = "white")});