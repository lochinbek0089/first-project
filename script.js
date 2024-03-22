"use strict";

let imgs = document.querySelectorAll("img")
let next = document.querySelector("#next")
let prev = document.querySelector("#prev")

let i = 0
next.onclick = function(){
  imgs[i].classList.remove("active")
  i++
  if(i >= imgs.length){
    i = 0
  }
  imgs[i].classList.add("active")
}

prev.onclick = function(){
  imgs[i].classList.remove("active")
  i--
  if(i < 0){
    i = imgs.length -1
  }
  imgs[i].classList.add("active")
}
setInterval(function(){
  imgs[i].classList.remove("active")
  i++
  if(i >= imgs.length){
    i = 0
  }
  imgs[i].classList.add("active")
}, 3000)