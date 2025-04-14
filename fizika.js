document.getElementById('surveyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const error = document.getElementById('formMessage');

    if (!name || !email || !message) {
      error.classList.remove('hidden');
    } else {
      error.classList.add('hidden');
      alert("გმადლობთ გამოკითხვისთვის!");
      form.reset();
    }
  });

  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
