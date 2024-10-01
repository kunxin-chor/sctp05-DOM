function addTask(taskList, newTaskName, urgency) {
     // update my tasks array
     let newTask = {
        // use a random number for the ID for the purpose of testing
        "id": Math.floor((Math.random() * 100000) + 9999),
        "name": newTaskName,
        "urgency": urgency
    }

    // add the new task to the array
    taskList.push(newTask);
}