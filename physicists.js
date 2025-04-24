// document.getElementById('showMore').addEventListener('click', function () {
//     document.querySelectorAll('.scientist-card.hidden').forEach(card => {
//         card.classList.remove('hidden');
//     });
//     this.style.display = 'none';
// });


// const loadMoreBtn = document.getElementById('loadMoreBtn');
// const hiddenCards = document.querySelectorAll('.scientist-card.hidden');

// loadMoreBtn.addEventListener('click', () => {
//     hiddenCards.forEach(card => card.classList.remove('hidden'));
//     loadMoreBtn.style.display = 'none'; // hide the button once all cards are shown
// });



// let expanded = false;
// function togglePhysicists() {
//   const extras = document.querySelectorAll(".extra");
//   extras.forEach(el => el.classList.toggle("hidden"));
//   expanded = !expanded;
//   event.target.textContent = expanded ? "დამალე დამატებითი ფიზიკოსები" : "ნახე მეტი ფიზიკოსი";
// }

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("togglePhysicists");
    const hiddenBlocks = document.querySelectorAll(".extra");

    let isVisible = false;

    toggleBtn.addEventListener("click", function () {
      hiddenBlocks.forEach(block => {
        block.classList.toggle("hidden");
      });

      isVisible = !isVisible;
      toggleBtn.textContent = isVisible ? "დამალე დამატებითი ფიზიკოსები" : "ნახე მეტი ფიზიკოსი";
    });
  });