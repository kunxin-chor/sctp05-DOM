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

function updateTask(taskList, taskId, newTaskName, newUrgency, newIsDone) {
 
    // 1. find the index
    // let index = null;
    // for (let i =0; i < taskList.length; i++) {
    //     let currentTask = taskList[i];
      
    //     if (currentTask.id == taskId) {
    //         index = i;
    //         break;
    //     }
    // }

    // using findIndex
    let index = taskList.findIndex(function(task){
        return task.id == taskId; // if the annoymous function returns true,
                                 // then the index of task is the result
    })
    
    // 2. do the replacement
    // make sure index is no null, undefined or 0 etc.
    if (index) {
        taskList[index] = {
            "id": taskId,
            "name": newTaskName,
            "urgency": newUrgency,
            "done": newIsDone
        }
    }
}

function deleteTask(tasks, taskIdToDelete) {

    // 1. find the index of the task that I want to delete
    let indexToDelete = tasks.findIndex(function(t){
        return t.id == taskIdToDelete;
    })

    // 2. delete the task from the array
    tasks.splice(indexToDelete, 1);
}

function updateTaskDone(tasks, taskId) {
    let index = tasks.findIndex(function(t){
        return t.id == taskId
    });

    // if the the task is already done, check it as not done
    // if (tasks[index].done) {
    //     tasks[index].done = false;
    // } else {
    //     tasks[index].done = true;
    // }

    // or we can just use the ! operator to invert
    tasks[index].done = !tasks[index].done;
}