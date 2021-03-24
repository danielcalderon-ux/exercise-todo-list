import React from "react";
import shortid from "shortid";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [tarea, setTarea] = React.useState("");
	const [arrayTareas, setArrayTareas] = React.useState([]);
	const agregarTarea = e => {
		e.preventDefault();
		setArrayTareas([
			...arrayTareas,
			{
				id: shortid.generate(),
				nombreTarea: tarea
			}
		]);
		setTarea("");
	};
	const Delete = id => {
		for (let i = 0; i < arrayTareas.length; i++) {
			if (arrayTareas[i].id === id) {
				arrayTareas.splice(i, 1);
				setArrayTareas([...arrayTareas]);
			}
		}
	};

	return (
		<div className="container">
			<h1 className="text-center">TODOS</h1>
			<div className="row">
				<div className="col-12">
					<ul className="list-group">
						<form onSubmit={agregarTarea}>
							<li className="list-group-item">
								<input
									type="text"
									className="form-control mb-2"
									placeholder="Enter task"
									onChange={e => setTarea(e.target.value)}
									value={tarea}
								/>
							</li>
						</form>
						{arrayTareas.map(item => (
							<li className="list-group-item" key={item.id}>
								<span className="blockquote-footer">
									{item.nombreTarea}
								</span>
								<button
									type="button"
									className="ml-2 mb-1 close"
									data-dismiss="toast"
									aria-label="Close"
									onClick={() => Delete(item.id)}>
									<span aria-hidden="true">&times;</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
