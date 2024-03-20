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
