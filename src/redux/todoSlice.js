import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const todoSlice = createSlice({
	name: "todos",
	initialState: [
		{ id: 1, title: "todo1", completed: false },
		{ id: 2, title: "todo2", completed: false },
		{ id: 3, title: "todo3", completed: false },
		{ id: 4, title: "todo4", completed: true },
	],
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: nanoid(),
				title: action.payload.title,
				completed: false,
			};
			state.push(newTodo);
		},
		toggleCompleted: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
	},
});

export const { addTodo, toggleCompleted, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
