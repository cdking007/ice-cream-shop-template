const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navclose = document.getElementById('nav-close');
const navlinks = document.querySelectorAll('.nav-links');

navBtn.addEventListener('click',()=>{
    navbar.classList.add('showNav');
});
navclose.addEventListener('click',()=>{
    navbar.classList.remove('showNav');
});
console.log(navlinks);
for(let i=0;i<navlinks.length;i++){
    navlinks[i].addEventListener('click',()=>{
        navbar.classList.remove('showNav');
    });
}