// dark mode button
let button = document.querySelector('.btn');
let balls = document.querySelector('.btn-ball');

button.addEventListener('click', ()=> {
    if (!balls.classList.contains('ball')){
        balls.classList.add('ball');
        document.body.classList.add('all');
    } else {
        balls.classList.remove('ball');
        document.body.classList.remove('all');
    }
})

//nav dropdown
let navBox = document.querySelector('.nav-box');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', ()=>{
    if (!navBox.classList.contains('nav-box2')){
        navBox.classList.add('nav-box2');
    } else {
        navBox.classList.remove('nav-box2');
    }
})
