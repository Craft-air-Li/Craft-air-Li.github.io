const loginForm = document.querySelector(".login-page__input-form");
const loginInput = document.querySelector(".login-page__input-form__input");
const welcomeText = document.querySelector(".login-page__welcome-text");

const HIDDEN_CLASSNAME = "hidden";
const SMALL_CLASSNAME = "small"
const USERNAME_KEY = "username";

const clockDisplay = document.querySelector(".clock");
const quoteDisplay = document.querySelector(".quotes");
const weatherDisplay = document.querySelector(".weather");
const toDoDisplay = document.querySelector(".todo");


function printText(username){
    welcomeText.classList.remove(HIDDEN_CLASSNAME);
    clockDisplay.classList.remove(HIDDEN_CLASSNAME);
    quoteDisplay.classList.remove(HIDDEN_CLASSNAME);
    weatherDisplay.classList.remove(HIDDEN_CLASSNAME);
    toDoDisplay.classList.remove(HIDDEN_CLASSNAME);
    const our = new Date().getHours();
    if(our>=6 && our<=11){
        welcomeText.innerText = `Good Morning, ${username}.`;
    }else if(our>=12 && our<=18){
        welcomeText.innerText = `Good Afternoon, ${username}.`;
    }else{
        welcomeText.innerText = `Good Night, ${username}.`;
    }
}

function submitInfo(event){
    event.preventDefault();
    const value = loginInput.value;
    localStorage.setItem(USERNAME_KEY,value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    welcomeText.classList.add(SMALL_CLASSNAME);
    printText(value);
}


const savedName = localStorage.getItem(USERNAME_KEY)
if(savedName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    welcomeText.classList.remove(SMALL_CLASSNAME);
    loginForm.addEventListener("submit",submitInfo);
}else{
    printText(savedName);
}