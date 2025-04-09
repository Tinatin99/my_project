// document.addEventListener("DOMContentLoaded", function () {
//     const burger = document.getElementById("burger");
//     const navigation = document.getElementById("navigation");

//     burger.addEventListener("click", function () {
//         if (navigation.style.display === "block") {
//             navigation.style.display = "none"; // ნავიგაციის დამალვა
//             burger.innerHTML = '<i class="fa-solid fa-bars"></i>'; // ბურგერი ბარში დაბრუნდება
//         } else {
//             navigation.style.display = "block"; // ნავიგაციის გამოჩენა
//             burger.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // ბურგერი X-ად გარდაიქმნება
//         }
//     });
// });






// document.addEventListener("DOMContentLoaded", function () {
//     const burger = document.getElementById("burger");
//     const navigation = document.getElementById("navigation");

//     burger.addEventListener("mouseenter", function () {
//         burger.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // ბურგერი X-ად გარდაიქმნება
//         navigation.classList.add("show-nav"); // ნავიგაცია გამოჩნდება
//     });

   

//     navigation.addEventListener("mouseenter", function () {
//         navigation.classList.add("show-nav"); // ნავიგაცია არ დაიხუროს
//     });

//     navigation.addEventListener("mouseleave", function () {
//         navigation.classList.remove("show-nav"); // ნავიგაცია დაიხუროს
//     });
// });


const burger = document.getElementById("burger");
const nav = document.getElementById("navigation");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");

  // Toggle symbol between ☰ and ✖
  if (nav.classList.contains("show")) {
    burger.innerHTML = "✖";
  } else {
    burger.innerHTML = "☰";
  }
});