function changeMode() {
  changeClasses();
  changeTexts();

  // console.log('I clicked!'); // test
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeTexts() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";

  if(body.classList.contains(darkModeClass)){
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + " ON";
    return;
  }

  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + " ON";
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; // returns array
const footer = document.getElementsByTagName('footer')[0]; // returns array

// console.log(body); // test

button.addEventListener('click', changeMode)

// console.log(button); // test