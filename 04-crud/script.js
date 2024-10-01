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

    // Creating Task Section
    // select the button
    document.querySelector("#createTask").addEventListener("click", function(){
        let taskName = document.querySelector("#taskName").value;
        let urgency = document.querySelector(".urgency:checked").value;

        // the addTask function is in data.js
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
      
           
        // METHOD ONE: Using createElement and appendChild to add the checkbox and the button
        // let liElement = document.createElement("li");
        // liElement.innerHTML = `
        //     ${t.name} (${t.urgency}) 
        // `


        // Using JS to write <input type="checkbox"/>
        // let checkbox = document.createElement("input");
        // checkbox.type = "checkbox";
        // checkbox.checked = t.done;  // if task is done, checkbox will be checked

        // liElement.appendChild(checkbox);

        // // Use JS to write <button>Edit</button>
        // let button = document.createElement("button");
        // button.innerHTML = "Edit";
        // button.addEventListener("click", function(){
        //     alert("Button clicked");
        // })

        // // Add the newly created button to the <li>
        // liElement.appendChild(button);

        
        // METHOD TWO: Using createElement to create the <li> but using innerHTML to set the <li>
        let liElement = document.createElement("li");
        liElement.innerHTML = `
            ${t.name} (${t.urgency}) <input type="checkbox" class="checkbox" /> <button class="edit">Edit</button> 
        `

        // we can call querySelector on any DOM object. If we do so, then the querySelector
        // will only search children within the object
        let checkbox = liElement.querySelector(".checkbox");
        checkbox.checked = t.done;

        let editButton = liElement.querySelector(".edit");
        // start the process of editing a task
        editButton.addEventListener("click", function(){
            let newTaskName = prompt("Enter the new task name: ", t.name);
            let newUrgency = prompt("Enter the new urgency: ", t.urgency);
            let newDone = prompt("Is the task done (y/n)");

            let isDone = false;
            if (newDone.toLowerCase() == 'y' ) {
                isDone = true;
            }

            updateTask(tasks, t.id, newTaskName, newUrgency, isDone);
            renderTasks(); // redraw all the tasks, along with any changes

        })

        taskList.appendChild(liElement);
    }
}