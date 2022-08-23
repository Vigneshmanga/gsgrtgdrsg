let passwordInputEl = document.getElementById("password");
let logInBtn = document.getElementById("logInBtn");
let errorMsgEl = document.getElementById("errormessage");


function passwordcheck() {
    let enterdPassword = passwordInputEl.value;
    errorMsgEl.textContent = "";
    if (enterdPassword === "nanil") {
        logInBtn.setAttribute("onclick", "display('sectionSemester1')");
    } else {
        logInBtn.removeAttribute("onclick", "display('sectionSemester1')");
    }
}

passwordInputEl.addEventListener("keydown", passwordcheck);

logInBtn.onclick = function() {
    if (passwordInputEl.value === "") {
        errorMsgEl.textContent = "Please enter password";
    } else if (passwordInputEl.value !== "nanilu") {
        errorMsgEl.textContent = "entered wrong password";
    }
};