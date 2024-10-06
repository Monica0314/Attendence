
document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "admin" && password == "password") {
       
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}
