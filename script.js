function InitialiseTheme() {
    document.getElementById("light-style").disabled = false;
    document.getElementById("dark-style").disabled = true;
    document.getElementById("theme-button").className = "fa fa-moon-o";
}

function SwapTheme() {
    if (document.getElementById("light-style").disabled == false) {
        document.getElementById("light-style").disabled = true;
        document.getElementById("dark-style").disabled = false;
        document.getElementById("theme-button").className = "fa fa-sun-o";
    } else {
        document.getElementById("light-style").disabled = false;
        document.getElementById("dark-style").disabled = true;
        document.getElementById("theme-button").className = "fa fa-moon-o";
    }
}

function ValidateForm() {
    var formEmail = document.getElementById('domainEmail').value;

    if (formEmail.length < 1) {
        alert("Email field is empty");
    }
}