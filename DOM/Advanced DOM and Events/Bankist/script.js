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

// scroll to a position

// this is the button we will click to initiate the scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');

//scroll to
const section1 = document.querySelector('#section--1');

// way 1

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); //DOMRect {x: 0, y: 171.1999969482422, width: 756.7999877929688, height: 1947, top: 171.1999969482422, …}

  //this one is the distance from the btnScrollTo to the vh vew port and the left edge
  console.log(e.target.getBoundingClientRect()); //DOMRect {x: 30, y: 161.9499969482422, width: 110, height: 27.600000381469727, top: 161.9499969482422, …}

  console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset); //Current scroll (x/y) 0 341.6000061035156 // rember it is depricates

  // can also get height width of view port vh
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //height/width viewport 499 757

  //Scrolling // buggy because to is relative to the view port not the document
  // window.scrollTo(s1coords.left, s1coords.top);

  //solution and now it wont scroll back up
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //smooth transition

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern way + smooth transition
  // only works with modern brousers
  section1.scrollIntoView({ behavior: 'smooth' });
});

//190. Types of Events and Event Handlers

// listning for a mouse enter event

const h1 = document.querySelector('h1');

//better because we can add multiple events to the same element
// h1.addEventListener('mouseenter', function (e) {
//   alert('You are reading the heading');
// });

//this will replace any events attached to the element
// every element has a event property atached to it
// old not used
// h1.onmouseenter = function (e) {
//   alert('You are reading the heading');
// };

//btter way of doing things
//were you can add and remove an event listner
// do this

const alert2 = function (e) {
  alert('addEventlistner');

  //when call back function is exed then this will remove the even
  //so effectively the event will only happen once
  //we can remove it anywhere
  h1.removeEventListener('mouseenter', alert2);
};

h1.addEventListener('mouseenter', alert2);

//you can also use it in a set timeout
setTimeout(() => h1.removeEventListener('mouseenter', alert2), 3000);

// Event Bubbling
///////////////////////////////////////
// Event Propagation in Practice
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// // remember by default addEventListner only handels the bubbling phase
// //  to make capturing true you need to set the addEventListners third argumant to true

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// page navigation
//if zero so that i dont have to coment this
if (0) {
  document.querySelectorAll('.nav__link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      // console.log('LINK');

      // implement smooth scrolling
      // this here points to the selection element object prototype here its the href we clicked on
      const id = this.getAttribute('href');
      console.log(id); // #section--1 #section--2 #section--3

      // using the unique id from the href we can now scroll to it
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // which is one of #section--1 #section--2 #section--3
    });
  });
}

// but the above is not very efficent
//because we are adding an event listner to ever selected element by querySelectorAll

//instead use event daligation using bubbling
// 1. Add event listner to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //provided it shoud be its child element
  console.log(e.target);
  e.preventDefault();

  //matching stratigy
  if (e.target.classList.contains('nav__link')) {
    // console.log('only nave selected');
    console.log(e);
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
