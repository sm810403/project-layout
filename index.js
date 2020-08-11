//loading 
window.addEventListener('load', ()=>{
    const loader = document.querySelector('.loader');
    setTimeout(()=>{
        loader.classList.add('loader-finish')}, 3700);
    clearTimeout();
});

// dark mode button
let button = document.querySelector('.btn');
let balls = document.querySelector('.btn-ball');
// let mainBefore = document.querySelector('#main:before')
let defaultMode;

window.addEventListener('load',function(){
    defaultMode = document.body;
    defaultMode.classList.remove('all');
});

button.addEventListener('click', ()=> {  
        balls.classList.toggle('ball');
        document.body.classList.toggle('all');  
})

//nav dropdown
let navBox = document.querySelector('.nav-box');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', ()=>{
        navBox.classList.toggle('nav-box2');
})
window.addEventListener('resize', ()=>{
            navBox.classList.remove('nav-box2');
})

//gallery
const boxs = document.querySelectorAll('.box img');
const overlay = document.querySelector('.overlay');
const overImg = document.querySelector('.overImg');
const text = document.querySelector('.overlay h1');

boxs.forEach(box =>{
    box.addEventListener('click', ()=>{
        overlay.classList.add('open');
        overImg.classList.add('open');
        const imgSrc = box.getAttribute('data-original');
        overImg.src = imgSrc;
        text.textContent = imgSrc;
    })
})

overlay.addEventListener('click',(e)=>{
    if (e.target.classList.contains('open')&& e.target === overlay) {
        overlay.classList.remove('open');
        overImg.classList.remove('open');
    }
})

//moon effect
const moon = document.querySelector('.moon');
const ground = document.querySelector('.ground');
const text2 = document.querySelector('.moonEffect h2');
window.addEventListener('scroll',()=>{
    let distance = window.scrollY;
    moon.style.left = distance*0.3-90 + 'px';
    text2.style.bottom = distance*0.3+'px';
})
