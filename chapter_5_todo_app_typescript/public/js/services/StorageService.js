import * as commonConstants from "./CommonConstants.js";
export class TaskLocalStorage {
    static count() {
        return this.taskLocalStorage.length;
    }
    static getTask(id) {
        const task = this.taskLocalStorage.find(task => task.id === id);
        return task;
    }
    static getAllTasks() {
        return this.taskLocalStorage;
    }
    static addTask(task, save = true) {
        let id;
        if (this.count() === 0) {
            id = 1;
        }
        else {
            id = this.taskLocalStorage[0].id + 1;
        }
        this.taskLocalStorage.unshift({ id, ...task });
        if (save)
            this.saveChanges();
    }
    static checkTask(id, save = true) {
        const task = this.taskLocalStorage.find(task => task.id === id);
        task.completed = !task.completed;
        if (save)
            this.saveChanges();
    }
    static deleteTask(id, save = true) {
        this.taskLocalStorage = this.taskLocalStorage.filter(task => task.id !== id);
        if (save)
            this.saveChanges();
    }
    static saveChanges() {
        localStorage.setItem(commonConstants.localStorageName, JSON.stringify(this.taskLocalStorage));
    }
}
TaskLocalStorage.taskLocalStorage = JSON.parse(localStorage.getItem("Tasks List")) || [];
