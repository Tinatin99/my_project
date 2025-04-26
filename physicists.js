// ამ ფუნქციას მივმართავთ ღილაკზე დაჭერისას
document.querySelector('.btn-toggle').addEventListener('click', function() {
    const hiddenPart = document.querySelector('#hidden-part');
    
    // თუ კარადებში არაფერი ჩანს, აჩვენე
    if (hiddenPart.classList.contains('hidden')) {
      hiddenPart.classList.remove('hidden'); // ხილვადობა
    } else {
      hiddenPart.classList.add('hidden'); // დამალვა
    }
  });
  



