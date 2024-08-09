const mainMenuEl = document.querySelector('.main-menu');
const menuBgEl = document.querySelector('.menu-bg');

console.log(mainMenuEl);
console.log(menuBgEl);

mainMenuEl.addEventListener('mouseover',function(){
    menuBgEl.classList.add('on');
});

mainMenuEl.addEventListener('mouseout',function(){
    menuBgEl.classList.remove('on');
});

menuBgEl.addEventListener('mouseover',function(){
    menuBgEl.classList.add('on');
    mainMenuEl.classList.add('on');
});

menuBgEl.addEventListener('mouseout',function(){
    menuBgEl.classList.remove('on');
    mainMenuEl.classList.remove('on');
});

const mobileMenuEl = document.querySelector('.mobile-menu');
const mobileBoxEl = document.querySelector('.mobile-box')
mobileMenuEl.addEventListener('click', function(){
    mobileBoxEl.classList.add('show');
});
const closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function(){
    mobileBoxEl.classList.remove('show');
});