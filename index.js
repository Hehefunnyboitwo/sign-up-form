var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

function signUp(){
    if(password.value == confirmPassword.value){
        document.getElementById("passwordTextConfirm").textContent = "Everything looks good! Account will be ready soon."
    }
    else{
        document.getElementById("passwordTextConfirm").textContent = "*Passwords do not match, please try again."
    }
}