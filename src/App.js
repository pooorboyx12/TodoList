import React from "react";
import AddForm from "./components/addForm";
import TodoList from "./components/TodoList";

const App = () => {
	return (
		<div className="container app">
			<h1 className="section__title">Todolist</h1>
			<AddForm />
      		<TodoList />

		</div>
	);
};

export default App;
