/*
   ------------------------------------------------------------------
       Developed by 
       Dileepa Bandara
       https://dileepabandara.github.io/F45K-8J09M21B3L-785DX-PI5AC
       ©dileepabandara.dev
       contact.dileepabandara@gmail.com
       2020
   ------------------------------------------------------------------
*/

function fnValidation() {
    var email = document.getElementById("txtEmail").value;
    var Password = document.getElementById("txtPassword").value;

    if (email == "") {
        alert("Email Should not be empty");
    }
    if (Password == "") {
        alert("Password Should not be empty");
    }
}