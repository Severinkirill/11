document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const messageInput = document.getElementById('message');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');

  const nameError = document.getElementById('nameError');
  const messageError = document.getElementById('messageError');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;


    if (!nameInput.value.trim()) {
      nameError.textContent = 'Ім’я обов’язкове';
      valid = false;
    } else {
      nameError.textContent = '';
    }


    if (messageInput.value.trim().length < 5) {
      messageError.textContent = 'Повідомлення має бути не менше 5 символів';
      valid = false;
    } else {
      messageError.textContent = '';
    }


    if (!/^\+380\d{9}$/.test(phoneInput.value.trim())) {
      phoneError.textContent = 'Телефон має починатися з +380 і містити 9 цифр після';
      valid = false;
    } else {
      phoneError.textContent = '';
    }

    if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
      emailError.textContent = 'Введіть коректний email';
      valid = false;
    } else {
      emailError.textContent = '';
    }

    if (valid) {
      console.log({
        name: nameInput.value,
        message: messageInput.value,
        phone: phoneInput.value,
        email: emailInput.value
      });
      form.reset();
    }
  });
});