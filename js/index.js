
var signUpName = document.querySelector(".name");
var signUpEmail = document.querySelector(".email");
var signUpPassword = document.querySelector(".pass");

var signInMail = document.querySelector(".log-mail");
var signInPass = document.querySelector(".log-pass");

var loginPage = document.querySelector(".login-page")
var welcomePage = document.querySelector(".welcome-page")

var navBar = document.querySelector(".navbar")

var signUpButton = document.querySelector(".signUp");
var loginButton = document.querySelector(".login-button");
var signUpForm = document.querySelector(".sign-Up-form");
var signInForm = document.querySelector(".sign-in-form");
var loginCart = document.querySelector(".login-cart");
var logOutButton=document.querySelector(".nav-button");

var accountSigned = [];

//create success and error message
var successMessage = document.createElement("p")
successMessage.textContent = "Success";
successMessage.classList.add("green-color", "text-center", "fs-5", "mt-3")

var errorMessage = document.createElement("p");
errorMessage.textContent = "All inputs is required";
errorMessage.classList.add("text-danger", "text-center", "fs-5", "mt-3","d-block");


//select anchors
var signInLink = document.querySelector(".sign-in-link");
var signUpLink = document.querySelector(".sign-up-link");



var requiredInputs = document.createElement("p");
requiredInputs.textContent = "All inputs is required";
requiredInputs.classList.add("fs-5", "text-danger")

var incorrect=document.createElement("p")
incorrect.textContent="incorrect email or password"
incorrect.classList.add("fs-6","text-danger")


var welcome=document.createElement("h1")


function signUp() {
    var account =
    {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    }
    if (account.name != "" && account.email != "" && account.password != "") {
        accountSigned.push(account);
        localStorage.setItem("accounts", JSON.stringify(accountSigned));
        signUpPassword.after(successMessage)
        errorMessage.classList.replace("d-block","d-none")
    }
    else {
        signUpPassword.after(errorMessage)
    }


}

signUpButton.addEventListener("click", signUp);


signInLink.addEventListener("click", function (e) {

    signInForm.classList.replace("d-none", "d-block");
    signUpForm.classList.replace("d-block", "d-none")


});

signUpLink.addEventListener("click", function (e) {
    signUpForm.classList.replace("d-none", "d-block")
    signInForm.classList.replace("d-block", "d-none")
})

accountSigned=JSON.parse(localStorage.getItem("accounts"))

function login()
{
    
    for(var i=0;i<accountSigned.length;i++)
    {
        if(accountSigned[i].email===signInMail.value&&accountSigned[i].password==signInPass.value)
       {
            welcomePage.classList.replace("d-none","d-block");
            loginCart.classList.replace("d-block","d-none")
            navBar.classList.replace("d-none","d-block");
            welcome.textContent=`Welcome ${accountSigned[i].name}`
            welcomePage.append(welcome);
       }
       else if(accountSigned[i].email!=signInMail.value&&accountSigned[i].password!=signInPass.value)
       {
        signInPass.after(incorrect)
       }
       
       if(signInMail.value == "" ||signInPass.value=="")
        {
         signInPass.after(requiredInputs)
         incorrect.classList.add("d-none")
        }
       
    }
     
    
}

loginButton.addEventListener("click",login);


function logOut()
{
    navBar.classList.replace("d-block","d-none")
    welcomePage.classList.replace("d-block","d-none")
    loginCart.classList.replace("d-none","d-block")
    incorrect.classList.add("d-none")

}


logOutButton.addEventListener("click",logOut);

