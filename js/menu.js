const showButton = document.querySelector('.burger');
const closeButton = document.querySelector('.close');

// Анимация
let burgerAnimation = gsap.timeline();
burgerAnimation.pause();

burgerAnimation.to(".menu", {
  display: 'block'
}, "start");
burgerAnimation.fromTo(".menu__top", {
  opacity: 0
}, {
  duration: 0.4,
  opacity: 1,
  ease: "power1.out"
}, 0.1);
burgerAnimation.from(".menu-background", {
  duration: 1,
  y: 250,
  opacity: 0,
  ease: "power1.out"
}, 0.4);
burgerAnimation.fromTo(".close", {
  opacity: 0,
}, {
  duration: 0.1,
  opacity: 1,
  ease: "power1.out"
}, 0);
burgerAnimation.from(".menu__left", {
  duration: 0.6,
  y: 50,
  opacity: 0,
  ease: "power1.out"
}, 0.8);
burgerAnimation.from(".menu__right", {
  duration: 0.6,
  y: 50,
  opacity: 0,
  ease: "power1.out"
}, 1);
burgerAnimation.from(".social", {
  duration: 0.6,
  y: 50,
  opacity: 0,
  ease: "power1.out"
}, 1);

// Показать
showButton.addEventListener('click', () => {
  burgerAnimation.restart();
});

// Скрыть
closeButton.addEventListener('click', () => {
  burgerAnimation.reverse();
});

