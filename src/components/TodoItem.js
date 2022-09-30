import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleted({ id: id, completed: !completed }));
	};

	const handleDelete = () => {
		dispatch(deleteTodo({ id: id }));
	};
	return (
		<div className={`todo-item ${completed && "item-checked"} `}>
			<div className="todo-item__name" onClick={handleCheckboxClick}>
				<input type="checkbox" checked={completed} />
				<span>{title}</span>
			</div>
			<button className="btn btn-danger" onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
};

export default TodoItem;
