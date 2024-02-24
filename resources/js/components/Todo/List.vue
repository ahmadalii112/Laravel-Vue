<template>
    <div class="mx-auto max-w-lg mt-16">
        <div>
            <div class="text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"/>
                </svg>
                <h2 class="mt-2 text-base font-semibold leading-6 text-gray-900">Hello, Ahmad Ali</h2>
                <p class="mt-1 text-sm text-gray-500">What's Up, if you have any plans please write it here</p>
            </div>
            <form action="#" @submit.prevent="addTodo" class="mt-6 flex">
                <label for="todo" class="sr-only">Create A Todo</label>
                <input type="text" name="todo" id="todo" v-model="newTodo"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       placeholder="Learn Vue JS">
                <button type="submit"
                        class="ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Create
                </button>
            </form>
        </div>
        <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-500">List of your Todos</h3>
            <ul role="list" class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                <li class="flex items-center justify-between space-x-3 py-4"
                    v-for="(todo, index) in todos" :key="todo.id">
                    <div class="flex min-w-0 flex-1 items-center space-x-3">
                        <div class="flex-shrink-0">
                            <input :id="todo.name" name="notification-method" type="radio"
                                   class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                        </div>
                        <div class="min-w-0 flex-1">
                            <input type="text" name="todo" :id="todo.id" v-model="todo.name"
                                   v-if="index === editingIndex"
                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                   placeholder="Learn Vue JS">
                            <label :for="todo.name"
                                   v-else
                                   class="truncate text-sm font-medium text-gray-900 ">{{ todo.name }}</label>
                        </div>
                    </div>
                    <div class="flex-shrink-0">
                        <button type="button"
                                @click="editTodo(index)"
                                v-if="index !== editingIndex"
                                class="inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="h-5 w-5 text-gray-400 hover:text-blue-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                            </svg>
                        </button>
                        <button type="button"
                                @click="saveTodo"
                                v-if="index === editingIndex"
                        class="inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-400 hover:text-green-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>

                        </button>
                        <button type="button"
                                @click="removeTodo(todo)"
                                class="ml-3 inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="h-5 w-5 text-gray-400 hover:text-red-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                            </svg>

                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "list",
    data() {
        return {
            newTodo: "",
            editingIndex: -1,
            isEditing: false,
            todos: [
                {
                    id: 1,
                    name: "Learn Vue Js",
                    is_completed: true,
                },
                {
                    id: 2,
                    name: "Master Laravel ",
                    is_completed: false,
                }
            ]
        }
    },
    methods: {
        addTodo() {
            return this.todos.push(
                {
                    id: Math.random(),
                    name: this.newTodo,
                    is_completed: true,
                }
            )
        },
        removeTodo(todo) {
           this.todos = this.todos.filter(value  => value !== todo);
        },
        editTodo(index) {
            console.log(index);
           // this.isEditing = true;
            this.editingIndex = index;
        },
        saveTodo() {
            this.editingIndex = -1; // Reset editingIndex to indicate no item is being edited
        }
    }
}
</script>

<style>

</style>
