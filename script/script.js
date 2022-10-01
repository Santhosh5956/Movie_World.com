const menu = document.querySelector('.menubar');
const menulist = document.querySelector('#menu');

menu.addEventListener('click',()=>{
    menulist.classList.toggle('slide');
});