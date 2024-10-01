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