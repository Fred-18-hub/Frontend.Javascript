<template>
    <div class="input-wrap" :class="{ 'input-err': todoState.invalid }">
        <input ref="inputTitle" type="text" v-model="todoState.todoTitle" @keyup="createTodo" />
        <button @click="createTodo">Create</button>
    </div>
    <p v-show="todoState.invalid" class="err-msg">{{ todoState.errMessage }}</p>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    emits: ["createTodo"],
    setup(_, { emit }) {
        const todoState = reactive({
            todoTitle: "",
            invalid: false,
            errMessage: ""
        })

        const inputTitle = ref(null)

        const createTodo = (ev) => {
            todoState.invalid = false
            if (ev.type === "click" || (ev.type === "keyup" && ev.key == "Enter")) {
                if (todoState.todoTitle.trim() !== "") {
                    emit("create-todo", todoState.todoTitle.trim())
                    todoState.todoTitle = ""
                    return
                }

                todoState.invalid = true
                todoState.errMessage = "Todo title value cannot be empty"
                inputTitle.value.focus()
            }
        }

        return { todoState, createTodo, inputTitle }
    }
}
</script>

<style lang="scss" scoped>
.input-wrap {
    display: inline-block;
    padding: 0 0;
    transition: 250ms ease;
    border: 2px solid #41b080;

    &.input-err {
        border-color: red;
    }

    &:focus-within {
        box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
            0 -2px 4px -2px rgb(0 0 0 / 0.1);
    }

    button {
        padding: 8px 16px;
        border: none;
        width: 80px;
    }

    input {
        width: 384px;
        padding: 8px 6px;
        border: none;

        &:focus {
            outline: none;
        }
    }
}

.err-msg {
    margin-top: 6px;
    font-size: 12px;
    text-align: center;
    color: red;
}
</style>