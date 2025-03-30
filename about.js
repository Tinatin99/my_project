let currentPage = 1;
let totalPages;

function getUsers(page) {
    fetch('https://reqres.in/api/users?page=' + page)
        .then(response => {
            if (response.status !== 200) {
                throw new Error("Server error");
            }
            return response.json();
        })
        .then(responseData => {
            totalPages = responseData.total_pages;
            let container1 = document.getElementById('container1');
            container1.innerHTML = ""; // Clear previous data
            
            responseData.data.forEach(user => {
                let userCard = document.createElement("div");
                userCard.classList.add("user-card");

                let img = document.createElement("img");
                img.src = user.avatar;
                img.alt = "User Avatar";

                let email = document.createElement("p");
                email.textContent = user.email;

                userCard.appendChild(img);
                userCard.appendChild(email);
                container1.appendChild(userCard);
            });
        })
        .catch(() => {
            document.getElementById('container1').innerHTML = "<p style='color:red;'>Server Error 404</p>";
        });
}

document.getElementById('loadprev').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        getUsers(currentPage);
    }
});

document.getElementById('loadnext').addEventListener('click', function () {
    if (currentPage < totalPages) {
        currentPage++;
        getUsers(currentPage);
    }
});

getUsers(currentPage);
