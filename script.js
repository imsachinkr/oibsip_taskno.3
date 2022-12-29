let input = document.getElementById('input');
let tasks = document.getElementById('tasks');

function addTask(){
    if(input.value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        tasks.innerHTML += `<div id="temp">
        <span id="taskname">
        ${input.value}
        </span>
         
        <button class="done" onclick ="done(this)" ondblclick="rmv(this)"><i class="fa-solid fa-circle-check"></i></button>
        <button class="del" onclick="del(this)"><i class="fa-solid fa-times-circle"></i></button>
        
        </div>`;
    }
    input.value = ""
}

function del(e) {
    e.parentNode.remove();      
}

function done(e) {
    e.parentNode.classList.toggle('completed');
    
}
