const options = ['take it', 'leave it'];

const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const input = document.querySelector('input');
const btnAdvice = document.querySelector('.showAdvice');
const btnOptions = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');


const addOptions = (e) => {
  e.preventDefault();
  options.push(input.value);
  
  if (input.value.length) {
    alert(`Added option: ${input.value}`);
    input.value = '';
  }
}

const cleanOptions = (e) => {
  e.preventDefault();
  options.length = 0;  //only if we want to remove all items from the array
  h1.textContent = '';
  //input.value = "";
}

const showAdvice = (e) => {
  const index = Math.floor(Math.random() * options.length);
  console.log(index);
  h1.textContent = options[index];
}

const showOptions = (e) => {
  alert(options.join(', '));
}

btnAdd.addEventListener('click', addOptions);
btnClean.addEventListener('click', cleanOptions);
btnAdvice.addEventListener('click', showAdvice);
btnOptions.addEventListener('click', showOptions);