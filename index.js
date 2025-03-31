document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const navigation = document.getElementById("navigation");

    burger.addEventListener("click", function () {
        if (navigation.style.maxHeight) {
            navigation.style.maxHeight = null; // ნავიგაციის დახურვა (გლუვი ეფექტი)
            burger.innerHTML = '<i class="fa-solid fa-bars"></i>'; // ბურგერი ბარში დაბრუნდება
        } else {
            navigation.style.maxHeight = navigation.scrollHeight + "px"; // ნავიგაციის გახსნა (გლუვად)
            burger.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // ბურგერი X-ად გარდაიქმნება
        }
    });
});