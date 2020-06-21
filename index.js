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
        var size = 0;
        if (navBox.classList.contains('nav-box2')) {
            size++;
            navBox.classList.remove('nav-box2');
        }
})


    // const types = ['Journey','of','Self Taught Web Developer'];
    // let count = 0;
    // let index = 0;
    // let words = '';
    // let letters = '';

    // (function typing() {
    //     if (count === types.length) {
    //         count = 0;
    //     }
    //     words = types[count];
    //     letters = words.slice(0, ++index);
    //     document.querySelector('.type').textContent = letters;
    //     if (letters.length === words.length) {
    //         count++;
    //         index = 0; 
              
    //     }
    //     setTimeout(typing,400);
    // })();
   
// let textMe = document.querySelector('.textMe');
// let aboutText = textMe.textContent;
// let splitText = aboutText.split("");
// textMe.textContent = "";
// for (let i = 0; i < splitText.length; i++){
//     textMe.innerHTML += "<span>" + splitText[i] +"</span>";
// }

// let char =0
// let timer = setInterval(setEffect, 70);

// function setEffect() {
//     let spans = textMe.querySelectorAll("span")[char];
//     spans.classList.add("fade");
//     char++;
//      if (char === splitText.length) {
        
//         complete()
//         return;
//      }
// };
// function complete(){
//     clearInterval(timer);
//     timer = null;
// };