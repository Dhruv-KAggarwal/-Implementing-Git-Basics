// Main JavaScript logic for Medora application
document.addEventListener("DOMContentLoaded", function() {
    const views = {
        login: document.getElementById("login-view"),
        register: document.getElementById("register-view"),
        dashboard: document.getElementById("dashboard-view")
    };

    function showView(view) {
        for (const key in views) {
            views[key].style.display = key === view ? "block" : "none";
        }
    }

    document.getElementById("show-register").addEventListener("click", function() {
        showView("register");
    });

    document.getElementById("show-login").addEventListener("click", function() {
        showView("login");
    });

    document.getElementById("register-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("reg-username").value;
        const password = document.getElementById("reg-password").value;
        const role = document.querySelector('input[name="role"]:checked').value;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ username, password, role });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful! You can now log in.");
        showView("login");
    });

    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            showView("dashboard");
            document.getElementById("dashboard-role").innerText = `Welcome, ${user.role} ${user.username}`;
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });

    showView("login"); // Show login view by default
});