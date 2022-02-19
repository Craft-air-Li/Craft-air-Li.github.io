const toDoForm = document.querySelector(".todo__box__form");
const toDoInput = document.querySelector(".todo__box__form__input");
const toDoList = document.querySelector(".todo__box__list");
const toDoBox = document.querySelector(".todo__box");
const toDoBtn = document.querySelector(".todo__btn__popup");

const TODO_KEY = "toDo";


let toDoLog = [];

function saveList(){
    localStorage.setItem(TODO_KEY,JSON.stringify(toDoLog));
}

function removeList(event){
    const li = event.target.parentElement;
    li.remove();
    toDoLog = toDoLog.filter((itme) => itme.id !== parseInt(li.id));
    saveList();
}

function printToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const i = document.createElement("i");
    span.innerText = newToDo.text;
    btn.innerText = "X";
    li.id = newToDo.id;
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
    btn.addEventListener("click",removeList);
}

function toDoSubmit(event){
    event.preventDefault();
    const newToDo = {
        text:toDoInput.value,
        id:Date.now()
    };
    toDoLog.push(newToDo);
    toDoInput.value = "";
    printToDo(newToDo);
    saveList();
}

toDoForm.addEventListener("submit",toDoSubmit);

const savedToDo = localStorage.getItem(TODO_KEY);
if(savedToDo !== null){
    const remainToDo = JSON.parse(savedToDo)
    toDoLog = remainToDo;
    remainToDo.forEach(printToDo);
}
function btnToggle(){
    toDoBox.classList.toggle("hidden");
}
toDoBtn.addEventListener("click",btnToggle);