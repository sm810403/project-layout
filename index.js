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
