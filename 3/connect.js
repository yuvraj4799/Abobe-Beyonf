function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user1" && password === "user1") {
        window.location.href = "lambo.html";
    } else if (username === "user2" && password === "user2") {
        window.location.href = "mustang.html";
    } else {
        alert("Invalid username or password");
    }
}

function logout() {
    window.location.href = "index.html";
}
