document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const navbar = document.getElementById("navbar");

    burger.addEventListener("click", function () {
        // ნავიგაციის გამოჩენა/დამალვა
        navbar.classList.toggle("active");

        // ბურგერის X-ად გადაკეთება
        burger.classList.toggle("toggle");
    });
});