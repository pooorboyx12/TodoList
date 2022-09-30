import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const list = useSelector((state) => state.todos);
	const completedTodo = list.filter((todo) => todo.completed === true);
	return (
		<div className="todo">
			{list.map(({ id, title, completed }) => (
				<TodoItem id={id} title={title} completed={completed} />
			))}

			<p>Total completed items: {completedTodo.length}</p>
		</div>
	);
};

export default TodoList;
