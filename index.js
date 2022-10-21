'use strict';

const btn = document.querySelector('button');
const inputEmail = document.querySelector('input');
const emptyMailMessage = document.querySelector('.empty-email-message');
const invalidMailMessage = document.querySelector('.invalid-email-message');
const confirmMessage = document.querySelector('.confirm');
const regex = /^\w+@\w+.\w+$/;
const opaqueWindow = document.querySelector('.opaque');

// essential value of elements function
const essentialValue = function () {
  emptyMailMessage.style.display = 'none';
  invalidMailMessage.style.display = 'none';
  confirmMessage.style.display = 'none';
  opaqueWindow.style.display = 'none';
  inputEmail.style.borderColor = '';
  inputEmail.value = '';
};

btn.addEventListener('click', function () {
  if (!inputEmail.value) {
    // empty input field
    emptyMailMessage.style.display = 'inline-block';
    inputEmail.style.borderColor = 'var(--col-error)';
    setTimeout(essentialValue, 2000);
  } else if (!regex.test(inputEmail.value)) {
    // not correct email format
    invalidMailMessage.style.display = 'inline-block';
    inputEmail.style.borderColor = 'var(--col-error)';
    setTimeout(essentialValue, 2000);
  } else {
    // confirmation message
    confirmMessage.style.display = 'inline-block';
    opaqueWindow.style.display = 'inline-block';
    setTimeout(essentialValue, 3000);
  }
});
