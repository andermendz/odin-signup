var password = document.getElementById("password");
var password_alert = document.getElementById("password-alert");


passwordConfirm = document.getElementById("confirm-password");


passwordConfirm.onkeyup = function(){
   if (passwordConfirm.value != password.value) {
        console.log("Password are not equal")
        password.style.border = "1px solid red";
        passwordConfirm.style.border = "1px solid red";

        password_alert.style.opacity ="1" ;
} else {
    console.log("Password are equal")
    password.style.border = "1px solid green";
    passwordConfirm.style.border = "1px solid green";
    password_alert.style.opacity ="0" ;
}

}

