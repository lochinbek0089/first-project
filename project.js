"use strict";
// let a = document.querySelector("#a"),
//   b = document.querySelector("#b"),
//   c = document.querySelector("#c");
  
// a.addEventListener('input', (event) =>{
//   if('apple' === event.target.value){
//     a.classList.remove("active")
//     b.classList.add("active")
//   }
// })

let inp = document.querySelectorAll("input")

inp[0].addEventListener("input", (event) =>{
  if("apple" === event.target.value){
    inp[0].classList.remove("active");
    inp[1].classList.add("active");
  }
})

