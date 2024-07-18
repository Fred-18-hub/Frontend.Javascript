import * as commonConstants from "./CommonConstants.js"


export class TaskLocalStorage {
    private static taskLocalStorage: commonConstants.taskLocalStorageType = JSON.parse(localStorage.getItem("Tasks List")!) || [];

    static count() {
        return this.taskLocalStorage.length;
    }

    static getTask(id: number): commonConstants.taskType {
        const task = this.taskLocalStorage.find(task => task.id === id)!;

        return task;
    }

    static getAllTasks(): commonConstants.taskLocalStorageType {
        return this.taskLocalStorage;
    }

    static addTask(task: commonConstants.addTaskLType, save = true) {
        let id: number;

        if (this.count() === 0) {
            id = 1;
        }
        else {
            id = this.taskLocalStorage[0].id + 1;
        }

        this.taskLocalStorage.unshift({ id, ...task });

        if (save) this.saveChanges();
    }

    static checkTask(id: number, save = true) {
        const task = this.taskLocalStorage.find(task => task.id === id)!;
        task.completed = !task.completed;

        if (save) this.saveChanges();
    }

    static deleteTask(id: number, save = true) {
        this.taskLocalStorage = this.taskLocalStorage.filter(task => task.id !== id);

        if (save) this.saveChanges();
    }

    static saveChanges() {
        localStorage.setItem(commonConstants.localStorageName, JSON.stringify(this.taskLocalStorage));
    }
}