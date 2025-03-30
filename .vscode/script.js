{<button onclick="openPDF()">გახსენი PDF</button>


    function openPDF() {
        window.open('pas15.pdf', '_blank');
    }
     }
    
    
    
    
    
    
    
    //  JavaScript  ფუნქციონალი (script.js)
    //  ბიოგრაფია კლიკზე ან ჰოვერზე აქტიურდება.
    // მეორედ დაკლიკებისას ქრება.
    // მობილურზე მხოლოდ კლიკი იმუშავებს. 
    
    
    
    
    // სიახლეების გვერდის ყუთების ჯავასკრიპტი
    
    
    // document.addEventListener("DOMContentLoaded", function() {
    //   const toggleText = document.querySelectorAll(".container__toggle");
    
    //   toggleText.forEach(button => {
    //       button.addEventListener("click", function() {
    //           const text = this.previousElementSibling;
    //           text.classList.toggle("expanded");
    //       });
    //   });
    // });
    
    
    
      // ტესტების ბმულები ჯავასკრიპტში
    
    
      <ul id="test-list" class="test-list"></ul>
    
        const testContainer = document.getElementById("test-list");
        for (let i = 1; i <= 20; i++) { 
            let testItem = document.createElement("li");
            testItem.innerHTML = `<a href="tests/test${i}.pdf" target="_blank">ტესტი ${i} (PDF)</a>`;
            testContainer.appendChild(testItem);
        }
    
    
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
    
    
    
     //სლაიდერის ფუნქციონირება
    
    
     document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelectorAll(".slide");
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        let currentIndex = 0;
    
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[index].classList.add("active");
        }
    
        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
            showSlide(currentIndex);
        });
    
        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        });
    
        // ✅ ავტომატური გადართვა (3 წამში ერთხელ)
        setInterval(() => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        }, 3000);
    });
    
    
    
     
    
    
    
    // // ვასელექთებ ბურგერაიქონს,ნავიგაციას
    
    // document.getElementById("burger-menu").addEventListener("click", function() {
    //     const nav = document.getElementById("navigation");
    //     const burger = document.getElementById("burger-menu");
    //     nav.classList.toggle("active");
    //     burger.classList.toggle("active");
    // });
    // ფონტოუსამი  fontowesame
    
    let navigation = document.getElementById('navigation')
    let burger = document.getElementById('burger')
    
    // აიქონზე დაკლიკებისას addEventListener ნიშნავს დაკლიკებას
    
    burger.addEventListener('click',function(){
        if(navigation.classList.contains('activeNavigation')){
            navigation.classList.remove('activeNavigation')
            burger.innerHTML =' <i class="fa-solid fa-bars"></i>'
    
        }else{
            navigation.classList.add('activeNavigation')
            burger.innerHTML= '<i class="fas fa-times"></i>'
    
        }
    })
    
    // button
    
    
    
    // let button = dokument.getElementById("button")
    // let bodyId = dokument.getElementById("color")
    // button.addEventListener("click", function(){
    //     bodyId.classList.toggle("active")
    // })
    
    /* <i class="fas fa-bars"></i>  <!-- ბურგერ მენიუს ღილაკი -->
    <i class="fas fa-times"></i> <!-- დახურვის ღილაკი --> */
    
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
    
    
    // სლაიდი
    
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;
    
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    
    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlider();
    });
    
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateSlider();
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
    //   ინფორმაციის წამოღება
    
    
    // function getUsers(){
    //     let request = new XMLHttpRequest()
    //     request.addEventListener('load',render)
    //     request.addEventListener('error',errorRender)
    
    //     request.open('GET','https://reqres.in/api/users?page=1')
    //     request.send()
    
    // }
    
    // function render(){
    //     let response=this.response
    //     let responseData = JSON.parse(response)
    //     console.log(responseData);
    //     let containerr = document.getElementById('containerr')
    //     let ul = document.createElement('ul')
    //     responseData.data.forEach(function(item){
    //         let li = document.createElement('li')
    //         li.textContent =item.email
    //         let image = document.createElement('img')
    //         image.src = item.avatar
    //         ul.appendChild(li)
    //         ul.appendChild(image)
    //         containerr.appendChild(ul)
    
    //     })
      
    // }
    
    // function errorRender(){
    //     let containerr = document.getElementById('containerr')
    //     let p = document.createElement('p')
    //     p.textContent = 'server error'
    //     containerr.appendChild(p)
    
    // }
    
    // getUsers()
    
    
    
    // function getUsers(){
    //     fetch("https://reqres.in/api/register",{
    //         method:"GET"
    
    //     })
    
    
    //    .then(function(response){
    //     if(response.status !== 200){
    //         throw console.error();
     
    //     }
    //     return response.json()
            
      
    //    })
    //    .then(function(responseData){ let containerr = document.getElementById('containerr')
    //     let ul = document.createElement('ul')
    //     responseData.data.forEach(function(item){
    //         let li = document.createElement('li')
    //         li.textContent =item.email
    //         let image = document.createElement('img')
    //         image.src = item.avatar
    //         ul.appendChild(li)
    //         ul.appendChild(image)
            
    
    //         })
    //         containerr.appendChild(ul)
          
        
    //    })
    
    
    //    .catch(function(){
    //         let containerr = document.getElementById('containerr')
    //         let p = document.createElement('p')
    //         p.textContent = 'server error'
    //         containerr.appendChild(p)
    
    //    })
    
    // }
      
    // getUsers()
    
    
    
    // 28.02.2025
    
    
    // ბრაუზერიდან ინფორმაციის წამოღება
    
    
    let currentPage =1
    let totalPages
    
    function getUsers(page ){
        fetch('https://reqres.in/api/users?page=' +page, {
            method:'GET'
        })
    
        .then (function(response){
            if(response.status !== 200){
                throw response.status
            }
            return response.json()
    
        })
    
        .then (function(responseData){
            let fragment =document.createDocumentFragment()
            totalPages=responseData.total_pages
             
            responseData.data.forEach(function(item){
                let li= document.createElement('li')
                li.textContent=item.first_name + " " + item.last_name ;
                let image =document.createElement('img')
                image.src=item.avatar
                let divliimage=document.createElement('div')
                divliimage.appendChild(li)
                divliimage.appendChild(image)
                fragment.appendChild(divliimage)
    
            })
    
            document.getElementById('ul_list').innerHTML = "";
           document.getElementById('ul_list').appendChild(fragment)
    
        })
    
      . catch (function(){
        let conteiner= document.getElementById('conteiner')
            let p = document.createElement('p')
            p.textContent='error'
            conteiner.appendChild(p)
    
    
      }) 
    }
    
    
    
    
      document.getElementById('loadprev').addEventListener('click',function(){
       if(currentPage == 1){
          return 
        }
        currentPage -=1
        getUsers (currentPage)
    
    
      })
    
      
      document.getElementById('loadnext').addEventListener('click',function(){
       if  ( currentPage == totalPages){
          return 
        }
        currentPage +=1
        getUsers (currentPage)
    
    
      })
    
      getUsers(currentPage)
      
    
    // acoreioni
    
    let accordion = document.querySelectorAll('.accordion-conteiner')
    accordion.forEach( item => {
      item.addEventListener('click',function(){
         this.classList.toggle('active')
    
    
    
      })
    
    })
    