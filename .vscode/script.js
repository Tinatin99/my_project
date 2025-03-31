{<button onclick="openPDF()">გახსენი PDF</button>


    function openPDF() {
        window.open('pas15.pdf', '_blank');
    }
     }
    
    
    
    
    
      // ტესტების ბმულები ჯავასკრიპტში
    
    
    //   <ul id="test-list" class="test-list"></ul>
    
    //     const testContainer = document.getElementById("test-list");
    //     for (let i = 1; i <= 20; i++) { 
    //         let testItem = document.createElement("li");
    //         testItem.innerHTML = `<a href="tests/test${i}.pdf" target="_blank">ტესტი ${i} (PDF)</a>`;
    //         testContainer.appendChild(testItem);
    //     }
    
    
    // ტესტები პდფ ფაილები
    
    const testContainer = document.getElementById("test-list");
    let startYear = 2012;
    let currentYear = new Date().getFullYear();
    
    for (let year = startYear; year <= currentYear; year++) {
        let testItem = document.createElement("div");
        testItem.classList.add("test-card");
        testItem.innerHTML = `
            <a href="tests/test${year}.pdf" target="_blank">📄 ტესტი ${year} (PDF)</a>
        `;
        testContainer.appendChild(testItem);
    }
    
    // ფიზიკოსების გვერდი
    
    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".scientists__card");
    
        cards.forEach(card => {
            card.addEventListener("mouseenter", function () {
                this.style.backgroundColor = "#ddd";
            });
    
            card.addEventListener("mouseleave", function () {
                this.style.backgroundColor = "white";
            });
        });
    });
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".scientists__card");
    
        cards.forEach(card => {
            const bio = card.querySelector(".scientists__bio");
    
            card.addEventListener("mouseenter", function () {
                bio.style.display = "block";
            });
    
            card.addEventListener("mouseleave", function () {
                bio.style.display = "none";
            });
        });
    });
    
    
        
    
         
    
    
   












  
    
    /* 18,03,2024 ჩვენს შესახებ გვერდის  რეგისტრაციის ფორმა */
    
    
        document.querySelector("form").addEventListener("submit", function (event) {
            let isValid = true;
            let inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='date']");
    
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });
    
            let email = document.getElementById("email");
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                isValid = false;
                email.style.border = "2px solid red";
            } else {
                email.style.border = "1px solid #ccc";
            }
    
            if (!isValid) {
                event.preventDefault(); // ფორმას არ უშვებს, სანამ ყველაფერი სწორად არ იქნება
                alert("გთხოვთ, სწორად შეავსოთ ყველა ველი!");
            }
        });
    
    // 18,12,2024 კონტაქტები
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('ფორმა წარმატებით გაიგზავნა!');
        });
    
    
        document.addEventListener("DOMContentLoaded", function () {
        const button = document.getElementById("myButton");
        
        if (!button) return;
        
        function updateButtonState() {
            const width = window.innerWidth;
            
            if (width > 1200) {
                // Large screens
                button.disabled = false;
                button.textContent = "Desktop Mode";
            } else if (width > 768) {
                // Tablet
                button.disabled = false;
                button.textContent = "Tablet Mode";
            } else if (width > 480) {
                // Mobile
                button.disabled = false;
                button.textContent = "Mobile Mode";
            } else {
                // Extra small screens
                button.disabled = false;
                button.textContent = "Small Screen Mode";
            }
        }
        
        window.addEventListener("resize", updateButtonState);
        updateButtonState(); // Initial call
    });
    
   



















    
    
      
    //   სიახლეების  გვერდი BEM მეთოდოლოგია
        
    // Optionally, add some functionality like an interactive quote feature
    document.querySelectorAll('.container__item--quote').forEach((quote, index) => {
        quote.addEventListener('click', () => {
          alert(`Quote ${index + 1} clicked!`);
        });
      });
      
    // ფიზიკოსები ყუთებიconst boxes = document.querySelectorAll('.box');
    
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
          if (box.scrollHeight > box.clientHeight) {
            box.style.overflowY = 'auto'; // Enable scrolling if content overflows
          } else {
            box.style.overflowY = 'hidden'; // Disable scrolling if not needed
          }
        });
      });
    
    
    
    
    //   26.02.2025 



    // ბრაუზერიდან ინფორმაციის წამოღება
    
    
   






















    
 