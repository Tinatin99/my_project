


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


// document.getElementById("toggle-button").addEventListener("click", function () {
//   const hiddenPart3 = document.getElementById("hidden-part3");
//   hiddenPart3.classList.toggle("hidden");
//   this.box1 = hiddenPart3.classList.contains("hidden") ? "მეტი მეცნიერები" : "ნაკლები მეცნიერები";
// });


// const hiddenPart3 = document.getElementById("hidden-part3");
// const showMoreBtn3 = document.getElementById("showMoreBtn3");

// showMoreBtn3.addEventListener("click", () => {
//   hiddenPart3.classList.toggle("hidden");
//   showMoreBtn3.textContent = hiddenPart3.classList.contains("hidden") ? "მეტის ჩვენება" : "დამალვა";
// });

// const hiddenPart3 = document.getElementById("hidden-part3");
// const showMoreBtn3 = document.getElementById("showMoreBtn3");

// showMoreBtn3.addEventListener("click", () => {
//   hiddenPart3.classList.toggle("hidden");
//   showMoreBtn3.textContent = hiddenPart3.classList.contains("hidden") ? "მეტის ჩვენება" : "დამალვა";
// });


const hiddenPart3 = document.getElementById("hidden-part3");
const showMoreBtn3 = document.getElementById("showMoreBtn3");

showMoreBtn3.addEventListener("click", () => {
  hiddenPart3.classList.toggle("hidden");
  showMoreBtn3.textContent = hiddenPart3.classList.contains("hidden") ? "მეტის ჩვენება" : "დამალვა";
});

