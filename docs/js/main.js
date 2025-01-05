//start close header
const closeButton = document.querySelector('.close');
const topHeader = document.querySelector('.top-header');
closeButton.addEventListener('click', function () {
  topHeader.style.display = 'none'; 
});
//end close header

//start mobile menu 
const menuBtn = document.querySelector('.menu-btn');
const menuWrapper = document.querySelector('.menu-wrapper');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active'); 
  menuWrapper.classList.toggle('active'); 
});

//end mobile menu

const subItem = document.querySelector('a.sub-item');
const subMenu = document.querySelector('.sub-menu');

subItem.addEventListener('click', function (event) {
  event.preventDefault(); 
  subMenu.classList.toggle('active'); 
});
