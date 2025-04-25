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



  const notesForm = document.getElementById('notesForm');
  const noteInput = document.getElementById('noteInput');
  const notesList = document.getElementById('notesList');
  const notesSuccess = document.getElementById('notesSuccess');

  function loadNotes() {
    notesList.innerHTML = '';
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.forEach((n, i) => {
      const li = document.createElement('li');
      li.className = "bg-gray-100 p-2 rounded shadow-sm";
      li.textContent = `${i + 1}. ${n}`;
      notesList.appendChild(li);
    });
  }

  notesForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = noteInput.value.trim();
    if (!text) return;
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.push(text);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = '';
    notesSuccess.classList.remove('hidden');
    loadNotes();
    setTimeout(() => notesSuccess.classList.add('hidden'), 2000);
  });

  loadNotes();