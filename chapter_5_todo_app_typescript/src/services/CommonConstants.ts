
export type taskLocalStorageType = { id: number, taskTitle: string, taskDate: string, completed: boolean }[];
export type taskType = { id: number, taskTitle: string, taskDate: string, completed: boolean };
export type addTaskLType = { taskTitle: string, taskDate: string, completed: boolean };

export const localStorageName = "Tasks List";
export const noTaskMessage = `<p class="no-tasks">You Have 0 Tasks</p>`;

export const SuccessMessage = {
    taskCreatedMessage: "Task Successfully Created",
    taskEditedMessage: "Task Successfully Edited",
    taskDeletedMessage: "Task Successfully Deleted"
} as const;

export const ActionType = {
    create: ["create", "Create"],
    edit: ["edit", "Edit"]
}
