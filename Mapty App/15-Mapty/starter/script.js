'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// the brouser comes with a set of map api where you can get the users
// location
// camera etc

// if the navigater exists
if (navigator.geolocation) {
  // first arg is the corinates the second is the error if it cant
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);

      const { latitude } = position.coords;
      const { longitude } = position.coords;

      console.log(latitude, longitude);
      console.log(position.coords);
      console.log(`https://www.google.com/maps/@${latitude}, ${longitude}`);
    },
    function () {
      alert('could not get your location sorry');
    }
  );
}
