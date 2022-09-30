import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddForm = () => {
	const [value, setValue] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(addTodo({ title: value }));
		setValue("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					className="form__input"
					placeholder="Type your todo"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button className="btn btn-primary">Add</button>
			</form>
		</div>
	);
};

export default AddForm;
