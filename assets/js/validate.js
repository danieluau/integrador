
// validacao adm login teste

// function validateFields() {
//     const email = document.getElementById('emailLogin').value
//     if (!email) {
//         document.getElementById('login-button').disabled= true;
//     }else if (validateFields(email)) {
//         document.getElementById('login-button').disabled= false;
//     }else{
//             function validateEmail(email) {
//         return /\S+@\S+\.\S+/.test(email);
//     }
//     }
// }

function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById("esqueceu").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;

}


function isEmailValid(){
    const email = document.getElementById("emailLogin").value;
    if (!email) {
        return false;
    }else{
        return validateEmail(email);
    }
}


function isPasswordValid() {
    const password = document.getElementById("passwordLogin");
    if (!password){
        return false;
    }else{
        return true;
    }
}

function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
}


