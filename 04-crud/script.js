// need a way to store our data
let tasks = [
    {
        "id": 1,  // unique identifier for the record
        "name": "Wash the car",
        "urgency": 3,
        "done": false
    },
    {
        "id": 2,
        "name": "Buy groceries",
        "urgency":5,
        "done": false
    },
    {
        "id": 3,
        "name": "Wash the toilet",
        "urgency":2,
        "done": true
    }
]
// DOMContentLoaded is an event that fires
// when the HTML is loaded completely
window.addEventListener("DOMContentLoaded", function(){
    // render all the tasks in the database
    renderTasks();

    // select the button
    document.querySelector("#createTask").addEventListener("click", function(){
        let taskName = document.querySelector("#taskName").value;
        let urgency = document.querySelector(".urgency:checked").value;

        addTask(tasks, taskName, urgency);

        // re-render all the tasks
        renderTasks();

    });

})

// renderTasks is to update the ul#tasks with 
// all the tasks
function renderTasks() {

    let taskList = document.querySelector("#tasks");

    // empty the task list of all the <li> inside it
    taskList.innerHTML = ""; // remove all the children inside

    for (let t of tasks) {
        let liElement = document.createElement("li");
        liElement.innerHTML = `
            ${t.name} (${t.urgency}) 
        `

        // Using JS to write <input type="checkbox"/>
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = t.done;  // if task is done, checkbox will be checked

        liElement.appendChild(checkbox);

        taskList.appendChild(liElement);
    }
}