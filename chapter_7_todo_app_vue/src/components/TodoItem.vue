<template>
    <li>
        <input type="checkbox" :checked="todo.isCompleted" @input="$emit('toggle-completed', index)">
        <div class="todo">
            <input  v-if="todo.isEditing" type="text" :value="todo.todoTitle"
                @input="$emit('update-todo', $event.target.value, index)" />
            <span v-else :class="{ 'todo-completed': todo.isCompleted }">#{{ ++index }}. {{ todo.todoTitle }}</span>
        </div>
        <div class="todo-actions">
            <Icon v-if="todo.isEditing" icon="lets-icons:check-fill" class="icon" width="22" height="22"
                style="color: #41b080" @click="$emit('toggle-editing', index)" />
            <Icon v-else icon="clarity:pencil-solid" class="icon" width="22" height="22" style="color: #ff8c00"
                @click="$emit('toggle-editing', index)" />
            <Icon icon="bi:trash-fill" class="icon" width="22" height="22" style="color: #f95e5e"
                @click="$emit('delete-todo', todo.id)" />
        </div>
    </li>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    props: ["todo", "index"],
    components: { Icon }
}
</script>

<style lang="scss" scoped>
li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 16px 10px;
    background-color: #f1f1f1;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);

    &:hover {
        .todo-actions {
            opacity: 1;
        }
    }

    input[type="checkbox"] {
        appearance: none;
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

        &:checked {
            background-color: #41b080;
        }
    }

    .todo {
        flex: 1;

        .todo-completed {
            text-decoration: line-through;
        }

        input[type="text"] {
            width: 100%;
            padding: 2px 6px;
            border: 2px solid #41b080;
        }
    }

    .todo-actions {
        display: flex;
        gap: 6px;
        opacity: 0;
        transition: 150ms ease-in-out;

        .icon {
            cursor: pointer;
        }
    }
}
</style>