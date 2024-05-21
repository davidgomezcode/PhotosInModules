'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Funciones:

// 1. Closing the modal function

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 2. Opening the modal function

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Open buttons
btnsOpenModal[0].addEventListener('click', openModal);
btnsOpenModal[1].addEventListener('click', openModal);
btnsOpenModal[2].addEventListener('click', openModal);

//Close button in X and overlay.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
