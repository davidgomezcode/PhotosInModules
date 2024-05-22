'use strict';

const overlay = document.querySelector('.overlay');

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');

const nyx = document.querySelector('.nyx');
const btnCloseNyx = document.querySelector('.close-nyx');

const ras = document.querySelector('.ras');
const btnCloseRas = document.querySelector('.close-ras');

const piaNyx = document.querySelector('.piaNyx');
const btnClosepiaNyx = document.querySelector('.close-piaNyx');

const btnsOpenModal = document.querySelectorAll('.show-modal');

// Funciones:

// 1. Closing the modal function

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeNyx = function () {
  nyx.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeRas = function () {
  ras.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closePiaNyx = function () {
  piaNyx.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 2. Opening the modal function

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openNyx = function () {
  nyx.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openRas = function () {
  ras.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openPiaNyx = function () {
  piaNyx.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Open buttons
btnsOpenModal[0].addEventListener('click', openRas);
btnsOpenModal[1].addEventListener('click', openNyx);
btnsOpenModal[2].addEventListener('click', openPiaNyx);

//Close button in X and overlay for "Show modal 1"
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

//Close button in X and overlay for "Nyx!"
btnCloseNyx.addEventListener('click', closeNyx);
overlay.addEventListener('click', closeNyx);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeNyx();
  }
});

//Close button in X and overlay for RAS!
btnCloseRas.addEventListener('click', closeRas);
overlay.addEventListener('click', closeRas);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeRas();
  }
});

//Close button in X and overlay for Pía & Nyx!
btnClosepiaNyx.addEventListener('click', closePiaNyx);
overlay.addEventListener('click', closePiaNyx);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closePiaNyx();
  }
});
