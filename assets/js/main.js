"use strict"

let burger = document.querySelector(".burger");
let list = document.querySelector('.text-nav_active');
let arrow = document.querySelector('.nav-arrow')
let nav = document.querySelector('.text-nav_ul'); 
burger.addEventListener('click', () => {
    if (!burger.classList.contains('active')) {
        burger.classList.add('active'); 
        
    } else {
        burger.classList.remove('active');
    }
    document.querySelector('.nav').classList.toggle('open');
});
list.addEventListener('mouseover',() => {
    nav.classList.toggle('active_two')
    arrow.classList.toggle('activet')
});
list.addEventListener('mouseout',() => {
    nav.classList.toggle('active_two')
    arrow.classList.toggle('activet')
});