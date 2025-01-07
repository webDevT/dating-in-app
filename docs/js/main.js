//start close header
const closeButton = document.querySelector('.close');
// const topHeader = document.querySelector('.top-header');
// closeButton.addEventListener('click', function () {
//   topHeader.style.display = 'none'; 
// });
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

// Отслеживаем изменение состояния класса .active у .menu-wrapper






// Флаг для отслеживания, был ли topHeader скрыт через кнопку .close
let isManuallyClosed = false;

// Скрываем topHeader при клике на .close
// closeButton.addEventListener('click', function () {
//   topHeader.style.display = 'none';
//   isManuallyClosed = true; // Устанавливаем флаг в true
// });

// Обрабатываем логику показа/скрытия topHeader при клике на .menu-btn
menuBtn.addEventListener('click', function () {
  // Проверяем, есть ли у menuWrapper класс active
  if (menuWrapper.classList.contains('active')) {
    // Скрываем topHeader
    topHeader.style.display = 'none';
  } else if (!isManuallyClosed) {
    // Если topHeader не был скрыт вручную, показываем его
    topHeader.style.display = 'block';
  }
});

const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    header.classList.add('sticky'); // Добавляем класс sticky, если страница прокручена
  } else {
    header.classList.remove('sticky'); // Убираем класс sticky, если страница вернулась в начало
  }
});
