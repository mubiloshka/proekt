
        function toggleDarkMode() {
            document.body.classList.toggle("dark");
            const modeIcon = document.querySelector(".mode-icon");
            const modeText = document.querySelector(".mode-text");
            
            if (document.body.classList("dark")) {
                modeIcon.textContent = "☀️";
                modeText.textContent = "Light Mode";
            } else {
                modeIcon.textContent = "🌙";
                modeText.textContent = "Dark Mode";
            }
        }

        const darkModeBtn = document.querySelector(".btn");
        darkModeBtn.addEventListener("click", toggleDarkMode);


        

        const searchInput = document.querySelector(".search-input");
        searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase(); 
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const desc = card.querySelector(".product-description").textContent.toLowerCase();

        if (query === "") {
            card.style.display = "block";
        } else if (name.includes(query) || desc.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

document.getElementById('subscribe-btn').addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message');

  if (email.includes('@') && email.includes('.')) {
    msg.textContent = 'Спасибо за подписку!';
    msg.style.color = 'green';
  } else {
    msg.textContent = 'Введите корректный email';
    msg.style.color = 'red';
  }
});
