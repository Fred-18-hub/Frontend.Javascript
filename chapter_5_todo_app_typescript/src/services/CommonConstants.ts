
export type taskLocalStorageType = { id: number, taskTitle: string, taskDate: string, completed: boolean }[];
export type taskType = { id: number, taskTitle: string, taskDate: string, completed: boolean };
export type addTaskLType = { taskTitle: string, taskDate: string, completed: boolean };

export const localStorageName = "Tasks List";
export const noTaskMessage = `<p class="no-tasks">You Have 0 Tasks</p>`;

export class SuccessMessage {
    readonly taskCreatedMessage: string;
    readonly taskEditedMessage: string;
    readonly taskDeletedMessage: string;

    constructor() {
        this.taskEditedMessage = "Task Successfully Created"
        this.taskCreatedMessage = "Task Successfully Edited";
        this.taskDeletedMessage = "Task Successfully Deleted";
    }
}

export class ActionType {
    readonly create: [string, string];
    readonly edit: [string, string];

    constructor() {
        this.create = ["create", "Create"];
        this.edit = ["edit", "Edit"];
    };
}
