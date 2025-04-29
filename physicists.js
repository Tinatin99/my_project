// const hiddenPart = document.getElementById("hidden-part");
// const showMoreBtn = document.getElementById("showMoreBtn");

// showMoreBtn.addEventListener("click", () => {
//   hiddenPart.classList.toggle("hidden");
//   showMoreBtn.textContent = hiddenPart.classList.contains("hidden") ? "მეტის ჩვენება" : "დამალვა";
// });


const hiddenPart1 = document.getElementById("hidden-part1");
const showMoreBtn1 = document.getElementById("showMoreBtn1");

showMoreBtn1.addEventListener("click", () => {
  hiddenPart1.classList.toggle("hidden");
  showMoreBtn1.textContent = hiddenPart1.classList.contains("hidden") ? "მეტის ჩვენება" : "დამალვა";
});

const hiddenPart2 = document.getElementById("hidden-part2");
const showMoreBtn2 = document.getElementById("showMoreBtn2");

showMoreBtn2.addEventListener("click", () => {
  hiddenPart2.classList.toggle("hidden");
  showMoreBtn2.textContent = hiddenPart2.classList.contains("hidden") ? "მეტის ჩვენება" : "დამალვა";
});


document.getElementById("toggle-button").addEventListener("click", function () {
  const hiddenPart = document.getElementById("hidden-part");
  hiddenPart.classList.toggle("hidden");
  this.textContent = hiddenPart.classList.contains("hidden") ? "მეტი მეცნიერები" : "ნაკლები მეცნიერები";
});
