const menu = document.querySelector('.menu');
const display = document.querySelector('.display');
menu.addEventListener('click', () =>{
  if(display.style.height === '0px'){
    display.style.height = '350px';
  } else{
    display.style.height = '0px';
  };
});
