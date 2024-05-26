const active = document.querySelector('.active')
const links = document.querySelectorAll('a')
const menuItem = Array.from(links)


menuItem.forEach(function(item){
    item.addEventListener('click',(evt)=>{
        evt.preventDefault()
    })
})

menuItem.forEach(function(item) {
    item.addEventListener('click', () => {
        const currentActive = document.querySelector('.active')
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        item.classList.add('active');
    });
});


const libraryLinks = document.querySelectorAll('.library a');
const categoryLinks = document.querySelectorAll('.category a');
const generalLinks = document.querySelectorAll('.genral a');


libraryLinks.forEach(function (item) {
    item.classList.add('active');
});

categoryLinks.forEach(function (item) {
    item.classList.add('active');
});

generalLinks.forEach(function (item) { 
    item.classList.add('active');
});



let submit = document.querySelector('.submit')
let show = document.querySelector('.show')
let logIn = document.querySelector('.log-in')
show.addEventListener('click',()=>{
    logIn.style.display = 'block'
})
submit.addEventListener('click',()=>{
    logIn.style.display = 'none'
})

let logOut = document.querySelector('.log-out')
logOut.addEventListener('click',()=>{
    alert("ARE YOU SURE")
})

let selectTow = document.querySelector('#selectTow')
let button = document.querySelector('.button')
let btn = document.querySelector('.btn')
let selecting = document.querySelector('#selecting')

button.addEventListener("click",()=>{
    button.style.display= 'none'
    selectTow.style.display = 'block'
})
btn.addEventListener('click',()=>{
    selecting.style.display = "block"
    btn.style.display= "none"
})



const anime = document.querySelector('.anime')
const room2 = document.querySelector('.room2')
const roomtow = document.querySelector('#room2')

anime.addEventListener('click',()=>{
    room2.style.display='none'
    roomtow.style.display='none'
})