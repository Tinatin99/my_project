document.addEventListener("DOMContentLoaded", function () {
    const accordionTitles = document.querySelectorAll(".accordion-title");

    accordionTitles.forEach(title => {
        title.addEventListener("click", function () {
            const container = this.parentElement;
            const description = container.querySelector(".accordion-description");

            // toggle active class
            container.classList.toggle("active");

            // adjust height for smooth transition
            if (container.classList.contains("active")) {
                description.style.height = description.scrollHeight + "px";
            } else {
                description.style.height = "0";
            }
        });
    });
});


  const button = document.getElementById("toggle-button");
  const moreSection = document.getElementById("bio-more");

  button.addEventListener("click", () => {
    moreSection.classList.toggle("hidden");
    if (moreSection.classList.contains("hidden")) {
      button.textContent = "მეტის ნახვა";
    } else {
      button.textContent = "ნაკლები";
    }
  });
