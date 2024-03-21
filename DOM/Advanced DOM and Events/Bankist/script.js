'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// the below mehod is used to show the pop up
//event e.preventDefault(); prevents the usual behaviour of scrolling to the top because the a element uses the href = #
const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();

  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(aar => {
  aar.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// below is a quick reference

// dom working
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// get element by id we dont need # beause we are not using qury selector
document.getElementById('section--1');
//selects all elements in the dom by button
//returns a DOM colection
//what does that mean?
//if the dom changes it is immediately updated here
//and vice versa like a publish subscribe model
document.getElementsByTagName('button');

//also returns a live DOM
document.getElementsByClassName('btn');

// creating and inserting an element
//.insertAdjacentHTML this is used the most
//eg
/* <html>
<body>
<h1>The Element Object</h1>
<h2>The insertAdjacentHTML() Method</h2>

<button onclick="myFunction()">Insert</button>
<p>Click "Insert" to insert a span inside the header:</p>

<h2 id="myH2">My Header</h2>

<script>
function myFunction() {
  const h2 = document.getElementById("myH2");
  let html = "<span style='color:red'>My span</span>";
  h2.insertAdjacentHTML("afterbegin", html);
}
</script>

</body>
</html> */

//another way

// note 1 doesnt work with brave
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'we use this as a way to track you from page to page <button class = "btn btn--close-cookie">Got it</button>';

const header = document.querySelector('.header');

console.log(header);
console.log(message);

header.prepend(message);

console.log(header);

// note 1 END

// got it click to remove cooke
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

// tootls for Styles, Attributes And Classes

//changes the background color of an element by code\
//these are inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//to get the styles set in the style sheet
console.log(getComputedStyle(message).height);

// we can do this but rember all values from computedStyle is a string
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

//CSS varables
// location is :root top of the css file
//name of the property, value
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes grt
// geting property atributes from elements like src href etc
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //Bankist logo

// remember if there isent a property on a tag the return will be a null
console.log(logo.designer); // undefined

// Attributes Set

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Banklist');

// there are two dfrences between arefrencing ang geting the attributr use appropreatly
console.log(logo.src); //http://127.0.0.1:5501/DOM/Advanced%20DOM%20and%20Events/Bankist/img/logo.png
console.log(logo.getAttribute('src')); //img/logo.png

// DataAtributes
// gets data atributs set in the element
// store data in the html
console.log(logo.dataset.versionNumber); // 3.0 check html data-version-number="3.0"

// class Manupulation
logo.classList.add('className');
logo.classList.remove('className');
logo.classList.toggle('className');
logo.classList.contains('className');
// can also add multiple classes to any
logo.classList.add('className', '1className', '2className');

// Dont use
// it will overide all the classnames
//logo.className = 'jones';
