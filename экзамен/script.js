const openButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close');

openButton.addEventListener('click', function() {
  modal.classList.add('show');
});

for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener('click', function() {
    modal.classList.remove('show');
  });
}

const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Добавьте здесь логику для проверки заполнения полей формы и отправки данных на сервер
});

const clearButton = document.getElementById('clearForm');
clearButton.addEventListener('click', function() {
  form.reset();
});
