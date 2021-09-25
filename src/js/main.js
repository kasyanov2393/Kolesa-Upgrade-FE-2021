import '../css/style.css';

/* document.querySelector('#app').innerHTML = `
  <h1>Hello, Dmitriy!</h1>
`; */

// modal

const modalCloseButton = document.querySelector('[data-close]');
const modalButton = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.overlay');

modalButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.toggle('hide');
    });
});

modalCloseButton.addEventListener('click', () => {
    modal.classList.toggle('hide');
});
