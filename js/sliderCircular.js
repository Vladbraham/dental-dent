const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.item-carousel');
const controlLinks = document.querySelectorAll('.controls-carousel a');

let i = 0;
let j = 1;
let intervalId;

const intervalFn = () =>{
    intervalId = setInterval(() => {
        carousel.style.rotate = `-${++i * 60}deg`;
        document.querySelector('.item-carousel.active').classList.remove("active");
        const activeSlide = document.querySelector(`.item-carousel:nth-child(${++j})`);
        activeSlide.classList.add('active');
        j === 6 && (j= 0)
    }, 4000);
}

intervalFn()


