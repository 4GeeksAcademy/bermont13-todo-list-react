import React, { useState } from "react";

//useState when you use state
//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	//add into array -> concat
	//delete from array -> filter
	//update -> map
	return (
		<div className="container">
			<h1>My todos</h1>
			
			<ul>
				<li>
						<input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key == "Enter") {
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="what do you need to do?"></input>
				</li>
				{todos.map((item, index) => (

					<li key={index}>
						{item}{" "}
						 <i 
						 className="fas fa-trash-alt" 
						 //aqui se elimina las lineas con el icono de la basura
						 onClick={() => 
							setTodos(
							todos.filter(
								(t, currentIndex) => 
								index != currentIndex
								)
								)
								}></i>
					</li>
				))}
			</ul>
			<div>{todos.length} tasks</div>
		</div >
	)
};

export default Home;