import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form');
const textareaFeedback = document.querySelector('.feedback-form textarea');
const emailFeedback = document.querySelector('.feedback-form input');

clearTextareaFeedback();
clearEmailFeedback();

formFeedback.addEventListener('submit', onFormSubmit);
textareaFeedback.addEventListener('input', throttle(onTextareaInput, 500));
emailFeedback.addEventListener('input', throttle(onEmailInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();

  localStorage.removeItem('feedback-form-state-textarea');
  localStorage.removeItem('feedback-form-state-email');

//   console.log('email: ', messageEmail);
//   console.log('message: ', messageTextarea);
}

function onTextareaInput(e) {
  const messageTextarea = e.target.value;
    localStorage.setItem('feedback-form-state-textarea', messageTextarea);
    console.log(messageTextarea)
}

function onEmailInput(e) {
  const messageEmail = e.target.value;
  localStorage.setItem('feedback-form-state-email', messageEmail);
}

function clearTextareaFeedback() {
  const savedMessageTextarea = localStorage.getItem(
    'feedback-form-state-textarea'
  );

  if (savedMessageTextarea) {
    textareaFeedback.value = savedMessageTextarea;
  }
}

function clearEmailFeedback() {
  const savedMessageEmail = localStorage.getItem('feedback-form-state-email');

  if (savedMessageEmail) {
    emailFeedback.value = savedMessageEmail;
  }
}
