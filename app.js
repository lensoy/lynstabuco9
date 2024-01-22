const header = document.querySelector('.header');
const toggleBtn = document.querySelector('.toggle-button');

const navbarLinksUl = document.querySelector('.navbar-links');

window.addEventListener('scroll', () => {
    header.classList.toggle('header-sticky', window.scrollY > 0);

});


toggleBtn.addEventListener('click', (e) => {
    console.log(e.target);
    navbarLinksUl.classList.toggle('active');

});

// navbarLinksUl.addEventListener('click', (e) => {
//     navbarLinksUl.classList.toggle('active');
// });