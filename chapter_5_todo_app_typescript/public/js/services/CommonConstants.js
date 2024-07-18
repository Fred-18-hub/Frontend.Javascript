export const localStorageName = "Tasks List";
export const noTaskMessage = `<p class="no-tasks">You Have 0 Tasks</p>`;
export class SuccessMessage {
    constructor() {
        this.taskEditedMessage = "Task Successfully Created";
        this.taskCreatedMessage = "Task Successfully Edited";
        this.taskDeletedMessage = "Task Successfully Deleted";
    }
}
export class ActionType {
    constructor() {
        this.create = ["create", "Create"];
        this.edit = ["edit", "Edit"];
    }
    ;
}
