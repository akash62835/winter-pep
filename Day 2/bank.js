document.addEventListener("DOMContentLoaded", function() {
    const serviceBoxes = document.querySelectorAll(".service-box");
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    document.body.appendChild(formContainer);

    serviceBoxes.forEach(box => {
        box.addEventListener("click", function() {
            const serviceName = this.querySelector("h3").textContent;
            showForm(serviceName);
        });
    });

    function showForm(serviceName) {
        formContainer.innerHTML = `<h3>${serviceName}</h3>`;
        switch (serviceName) {
            case "Account Creation":
                formContainer.innerHTML += `
                    <form>
                        <label for="name">Full Name:</label><br>
                        <input type="text" id="name" name="name" required><br><br>
                        <label for="email">Email:</label><br>
                        <input type="email" id="email" name="email" required><br><br>
                        <button type="submit">Create Account</button>
                    </form>
                `;
                break;
            case "Deposit":
                formContainer.innerHTML += `
                    <form>
                        <label for="amount">Amount to Deposit:</label><br>
                        <input type="number" id="amount" name="amount" required><br><br>
                        <button type="submit">Deposit</button>
                    </form>
                `;
                break;
            case "Withdraw":
                formContainer.innerHTML += `
                    <form>
                        <label for="amount">Amount to Withdraw:</label><br>
                        <input type="number" id="amount" name="amount" required><br><br>
                        <button type="submit">Withdraw</button>
                    </form>
                `;
                break;
            case "Bank Statement":
                formContainer.innerHTML += `
                    <form>
                        <label for="statement">Enter Account Number:</label><br>
                        <input type="text" id="statement" name="statement" required><br><br>
                        <button type="submit">Get Statement</button>
                    </form>
                `;
                break;
            default:
                formContainer.innerHTML += `<p>Service not recognized.</p>`;
        }
        formContainer.style.display = "block";
    }

    // Burger menu functionality
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});