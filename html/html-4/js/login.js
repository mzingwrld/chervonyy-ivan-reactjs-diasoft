let handleSubmitForm = (e) => {
    e.preventDefault();
    let buttonLoader = document.querySelector("#button-content");
    let loginInput = document.querySelector("#login-input");
    let passwordInput = document.querySelector("#password-input");

    if (handleValidateFormFields()) {
        loginInput.disabled = true;
        passwordInput.disabled = true;
        buttonLoader.innerText = "";
        buttonLoader.className = "lds-dual-ring";

        setTimeout(() => {
            loginInput.disabled = false;
            passwordInput.disabled = false;
            buttonLoader.innerText = "Login";
            buttonLoader.className = "button-text";
            loginInput.value = "";
            passwordInput.value = "";
        }, 2000);
    }
}

let handleValidateFormFields = () => {
    let login = document.querySelector("#login-input");
    let password = document.querySelector("#password-input");
    let loginV = document.querySelector("#login-input").value.length;
    let passwordV = document.querySelector("#password-input").value.length;
    let alertV = document.querySelector("#alert-message");

    if (loginV === 0 || passwordV === 0) {
        if (loginV === passwordV) {
            alertV.innerText = "Please fill all required fields";
            login.className = "input-alert-border";
            password.className = "input-alert-border";
        } else if (loginV === 0) {
            alertV.innerText = "Please fill login";
            login.className = "input-alert-border";
            password.className = "";
        } else {
            alertV.innerText = "Please fill password";
            password.className = "input-alert-border";
            login.className = "";
        }
        alertV.className = "alert-message-show";
        return false;
    } else {
        alertV.className = "alert-message";
        password.className = "";
        login.className = "";
        return true;
    }
}

let tt = document.querySelector("form > button");
tt.addEventListener("click", handleSubmitForm);


