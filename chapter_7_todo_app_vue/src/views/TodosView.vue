<template>
    <div>
        <h1>Create Todo</h1>
        <TodoCreator @create-todo="createTodo" />
        <ul v-if="todoList.length" class="todo-list">
            <TodoItem v-for="(todo, indx) in todoList" :key="todo.id" :todo="todo" :index="indx"
                @toggle-completed="toggleCompleted" @toggle-editing="toggleEditing" @update-todo="updateTodo"
                @delete-todo="deleteTodo" />
        </ul>
        <p v-else class="todos-msg">
            <Icon icon="noto-v1:sad-but-relieved-face" width="22" height="22" />
            <span>You have no todos to complete! Add one!</span>
        </p>
        <p v-if="todosCompleted && todoList.length" class="todos-msg">
            <Icon icon="noto-v1:party-popper" width="22" height="22" />
            <span>You have completed all your todos!</span>
        </p>
    </div>
</template>

<script>
import TodoCreator from '@/components/TodoCreator.vue';
import TodoItem from '@/components/TodoItem.vue';
import { Icon } from '@iconify/vue';
import { uid } from 'uid';
import { computed, ref, watch } from 'vue';


export default {
    name: 'HomeView',
    components: { TodoCreator, TodoItem, Icon },
    setup() {
        const todoList = ref([])

        const fetchTodoListFromLocalStorage = () => {
            const getList = JSON.parse(localStorage.getItem("vueTodoList"))
            if (getList) {
                todoList.value = getList
            }
        }

        fetchTodoListFromLocalStorage()

        const saveTodoListToLocalStorage = () => {
            localStorage.setItem("vueTodoList", JSON.stringify(todoList.value))
        }

        watch(todoList, () => {
            saveTodoListToLocalStorage()
        },
            {
                deep: true  // allows to watch for changes deep within objects
            }
        )

        const todosCompleted = computed(() => {
            return todoList.value.every(todo => todo.isCompleted)
        })

        const createTodo = (todoTitle) => {
            todoList.value.unshift({
                id: uid(),
                todoTitle,
                isCompleted: null,
                isEditing: null
            })
        }

        const toggleCompleted = (todoIndx) => {
            todoList.value[todoIndx].isCompleted = !todoList.value[todoIndx].isCompleted
        }

        const toggleEditing = (todoIndx) => {
            todoList.value[todoIndx].isEditing = !todoList.value[todoIndx].isEditing
        }

        const updateTodo = (newTitle, todoIndx) => {
            todoList.value[todoIndx].todoTitle = newTitle
        }

        const deleteTodo = (todoId) => {
            todoList.value = todoList.value.filter(todo => todo.id !== todoId)
        }

        return { createTodo, todoList, toggleCompleted, toggleEditing, updateTodo, deleteTodo, todosCompleted }
    }
}
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 16px;

    h1 {
        margin-bottom: 16px;
        text-align: center;
    }

    .todo-list {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-top: 24px;
        gap: 20px;
    }

    .todos-msg {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-top: 24px;
    }
}
</style>