const clock = document.querySelector(".clock__bar");

function getDate(){
    const date = new Date();
    const our = String(date.getHours()).padStart(2,"0"); 
    const min = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${our}:${min}`;
}

getDate();
setInterval(getDate, 1000);