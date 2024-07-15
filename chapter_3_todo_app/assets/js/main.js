// Handle Showing Form Dialog
function showFormDialog(action, taskId) {
    formDialog.innerHTML = generateForm(action);
    formDialog.show();

    const exitFormDialogBtn = document.getElementById("exit-dialog");
    const taskForm = document.getElementById("task-form");

    exitFormDialogBtn.addEventListener("click", closeFormDialog);

    taskForm.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    if (taskForm.className === "create") {
        taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            addTask();
        });
    }
    else if (taskForm.className === "edit") {
        editTask(taskId);
    }

    const taskTitle = document.getElementById("task-input-title");
    const taskDate = document.getElementById("task-input-date");

    taskTitle.addEventListener("input", () => {
        taskTitle.classList.contains("error") && taskTitle.classList.remove("error");
    });
    
    taskDate.addEventListener("input", () => {
        taskDate.classList.contains("error") && taskDate.classList.remove("error");
    });
}

// Handle Closing Form Dialog
function closeFormDialog() {
    formDialog.close();
}

// Showing Form Dialog
createTaskBtn.addEventListener("click", () => {
    showFormDialog("create");
});

// Closing Form Dialog
formDialog.addEventListener("click", closeFormDialog);

// Create Task
function addTask() {
    const taskTitle = document.getElementById("task-input-title");
    const taskDate = document.getElementById("task-input-date");

    if (!validateTask(taskTitle, taskDate)) return;

    let id;
    if (tasksListStorage.length === 0) {
        id = 1;
    }
    else {
        id = tasksListStorage[0].id + 1;
    }

    tasksListStorage.unshift({ 
        id, 
        taskTitle: taskTitle.value,
        taskDate: taskDate.value,
        completed: false
    });

    taskTitle.value = "";
    taskDate.value = "";

    saveTasksList();
    closeFormDialog();
    generateTasksList();
    showSuccessMessage("Task Successfully Created");
}

// Saving task to taskListStorage
function saveTasksList() {
    localStorage.setItem("Tasks List", JSON.stringify(tasksListStorage));
}

// Generating tasks list
function generateTasksList() {
    if (tasksListStorage.length === 0) {
        tasksList.innerHTML = `<p class="no-tasks">You Have 0 Tasks</p>`;
    }
    else {
        tasksList.innerHTML = tasksListStorage.map(task => {
            return generateTask(task);
        })
        .join("");
    }

    // Delete task
    const deleteTaskBtns = document.querySelectorAll(".delete-task-btn");

    for (const deleteTaskBtn of deleteTaskBtns) {
        deleteTaskBtn.addEventListener("click", () => {
            const id = Number(deleteTaskBtn.id.split('-')[2]);

            deleteTask(id);
        });
    }
    
    // Check task
    const checkboxes = document.querySelectorAll(".checkbox");

    for (const checkbox of checkboxes) {
        checkbox.addEventListener("input", () => {
            const id = Number(checkbox.id.split('-')[1]);
            
            checkTask(id);
        });
    }
    
    // Edit task
    const editTaskBtns = document.querySelectorAll(".edit-task-btn");

    for (const editTaskBtn of editTaskBtns) {
        editTaskBtn.addEventListener("click", () => {
            const id = Number(editTaskBtn.id.split('-')[2]);
            
            showFormDialog("edit", id);
        });
    }
}

generateTasksList();

// Deleting task
function deleteTask(id) {
    tasksListStorage = tasksListStorage.filter(task => task.id !== id);
    saveTasksList();
    generateTasksList();
    showSuccessMessage("Task Successfully Deleted");
}

// Checking task
function checkTask(id) {
    const task = tasksListStorage.find(task => task.id === id);
    task.completed = !task.completed;
    saveTasksList();
    generateTasksList();
}

// Editing task
function editTask(id) {
    const task = tasksListStorage.find(task => task.id === id);

    const taskTitle = document.getElementById("task-input-title");
    const taskDate = document.getElementById("task-input-date");

    taskTitle.value = task.taskTitle;
    taskDate.value = task.taskDate

    const taskForm = document.getElementById("task-form");
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!validateTask(taskTitle, taskDate)) return;

        task.taskTitle = taskTitle.value;
        task.taskDate = taskDate.value;
        task.completed = false;

        saveTasksList();
        closeFormDialog();
        generateTasksList();
        showSuccessMessage("Task Successfully Edited");
    });
}

// Validating task
function validateTask(title, date) {
    if (title.value.trim() !== "" && date.value.trim() !== "") {
        return true;
    }
    else {
        if (title.value.trim() === "") {
            !title.classList.contains("error") && title.classList.add("error");
        }
        
        if (date.value.trim() === "") {
            !date.classList.contains("error") && date.classList.add("error");
        }

        return false;
    }
}

// Success message
function showSuccessMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = createSuccessMessage(message);

    successMessageDiv.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}