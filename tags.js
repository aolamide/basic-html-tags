//short-handed selectors
const $$ = (e) => document.querySelectorAll(e);

//grab elements here 
const buttons = $$('button');

let displayCode = e => {
  e.target.nextElementSibling.style.display = 'inline-block';
}//this function displays the next sibling of the button which is the result div

buttons.forEach(button => button.addEventListener('click', displayCode));//an event listener for each button
