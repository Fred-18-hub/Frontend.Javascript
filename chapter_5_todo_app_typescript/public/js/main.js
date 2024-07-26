import * as variableService from "./services/VariableService.js";
import * as storageService from "./services/StorageService.js";
import * as commonConstants from "./services/CommonConstants.js";
// Handling Showing Date & Time
function updateDateTime() {
    const now = new Date();
    const day = now.getDay();
    const date = now.getDate();
    const month = variableService.monthNames[now.getMonth()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let prevDay = 0;
    let prevMinutes = 0;
    if (prevDay !== day) {
        variableService.dateTime.children[0].textContent = `${variableService.dayNames[day]}, ${date} ${month}`;
        prevDay = day;
    }
    if (prevMinutes !== minutes) {
        variableService.dateTime.children[1].textContent = `
        ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        prevMinutes = minutes;
    }
}
// Handle Showing Form Dialog
function showFormDialog(action, taskId) {
    variableService.formDialog.innerHTML = variableService.generateForm(action);
    variableService.formDialog.show();
    const exitFormDialogBtn = document.getElementById("exit-dialog");
    const taskForm = document.getElementById("task-form");
    exitFormDialogBtn.addEventListener("click", closeFormDialog);
    taskForm.addEventListener("click", (e) => {
        e.stopPropagation();
    });
    if (taskForm.className === commonConstants.ActionType.create[0]) {
        taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            addTask();
        });
    }
    else if (taskForm.className === commonConstants.ActionType.edit[0]) {
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
    variableService.formDialog.close();
}
// Create Task
function addTask() {
    const taskTitle = document.getElementById("task-input-title");
    const taskDate = document.getElementById("task-input-date");
    if (!validateTask(taskTitle, taskDate))
        return;
    const task = {
        taskTitle: taskTitle.value,
        taskDate: taskDate.value,
        completed: false
    };
    storageService.TaskLocalStorage.addTask(task);
    taskTitle.value = "";
    taskDate.value = "";
    closeFormDialog();
    generateTasksList();
    showSuccessMessage(commonConstants.SuccessMessage.taskCreatedMessage);
}
// Generating tasks list
function generateTasksList() {
    if (storageService.TaskLocalStorage.count() === 0) {
        variableService.tasksList.innerHTML = commonConstants.noTaskMessage;
    }
    else if (storageService.TaskLocalStorage.count() <= 5) {
        variableService.tasksList.innerHTML = storageService.TaskLocalStorage.getAllTasks().map(task => {
            return variableService.generateTask(task);
        })
            .join("");
    }
    else {
        const tasksContainer = document.querySelector(".tasks-container");
        if (!tasksContainer.className.includes("details")) {
            let htmlValue = "";
            for (let i = 0; i < 5; i++) {
                const task = storageService.TaskLocalStorage.getAllTasks()[i];
                htmlValue += variableService.generateTask(task);
            }
            variableService.tasksList.innerHTML = htmlValue;
            variableService.viewMoreDiv.removeAttribute("style");
        }
        else {
            variableService.tasksList.innerHTML = storageService.TaskLocalStorage.getAllTasks().map(task => {
                return variableService.generateTask(task);
            })
                .join("");
        }
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
            showFormDialog(commonConstants.ActionType.edit, id);
        });
    }
}
// Deleting task
function deleteTask(id) {
    storageService.TaskLocalStorage.deleteTask(id);
    generateTasksList();
    showSuccessMessage(commonConstants.SuccessMessage.taskDeletedMessage);
}
// Checking task
function checkTask(id) {
    storageService.TaskLocalStorage.checkTask(id);
    generateTasksList();
}
// Editing task
function editTask(id) {
    const task = storageService.TaskLocalStorage.getTask(id);
    const taskTitle = document.getElementById("task-input-title");
    const taskDate = document.getElementById("task-input-date");
    taskTitle.value = task.taskTitle;
    taskDate.value = task.taskDate;
    const taskForm = document.getElementById("task-form");
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!validateTask(taskTitle, taskDate))
            return;
        task.taskTitle = taskTitle.value;
        task.taskDate = taskDate.value;
        task.completed = false;
        storageService.TaskLocalStorage.saveChanges();
        closeFormDialog();
        generateTasksList();
        showSuccessMessage(commonConstants.SuccessMessage.taskEditedMessage);
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
    messageDiv.innerHTML = variableService.createSuccessMessage(message);
    variableService.successMessageDiv.appendChild(messageDiv);
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}
// Run Date & Time
updateDateTime();
setInterval(updateDateTime, 1000);
// Generate Tasks
generateTasksList();
// Showing Form Dialog
variableService.createTaskBtn?.addEventListener("click", () => {
    showFormDialog(commonConstants.ActionType.create);
});
// Closing Form Dialog
variableService.formDialog?.addEventListener("click", closeFormDialog);
