// dark mode button
let button = document.querySelector('.btn');
let balls = document.querySelector('.btn-ball');
let defaultMode;

window.addEventListener('load',function(){
    defaultMode = document.body;
    defaultMode.classList.remove('all');
});

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
window.addEventListener('resize', ()=>{
        if (navBox.classList.contains('nav-box2')) {
            navBox.classList.remove('nav-box2');
        }
})


const boxs = document.querySelectorAll('.box img');
const overlay = document.querySelector('.overlay');
const overImg = document.querySelector('.overImg');

boxs.forEach(box =>{
    box.addEventListener('click', ()=>{
        overlay.classList.add('open');
        const imgSrc = box.getAttribute('data-original');
        overImg.src = `./fullpics/${imgSrc}`
    })
})

overlay.addEventListener('click',(e)=>{
    if (e.target.classList.contains('open')) {
        overlay.classList.remove('open');
    }
})