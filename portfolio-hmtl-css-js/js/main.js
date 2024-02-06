// toggle button for the header
document.querySelector('.toggle-btn').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
});

// document.querySelector('.toggle-icon').addEventListener('click', () => {

//     // Here I got a litte help from chatgpt, to target each icon 
//     document.querySelectorAll('main form fieldset div > img').forEach(icon => {
//         icon.classList.toggle('show-icon');
//     });
// });

// auto typed text using typed.js
var typed = new Typed('.auto-text', {
    strings: ['Software Developer', 'Front-end developer', 'Full-stack developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });