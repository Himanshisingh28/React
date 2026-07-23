import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
      todos: [{ id: 1, text: "Write Todo" }]
}

export const todoSlice = createSlice({
      name: 'todo',
      initialState,
      reducers: {
            addTodo: (state, action) => {//state ke andar current state or action ke andar data
                  const todo = {
                        id: nanoid(),
                        text: action.payload
                  }
                  state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                  state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            },
      }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer