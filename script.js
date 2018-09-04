var userName = prompt("User Name");
if (userName == "Admin"){
} else if (userName == null){
    alert("Canceled");
} else {
    alert("I don't know you")
}

var pass = prompt("Enter Password");
if (pass == "TheMaster"){
    alert("Welcome");
} else if (pass == null){
    alert("Canceled");
} else {
    alert("Wrong password");
}