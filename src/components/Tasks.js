import React, { useState, useEffect } from "react";

const Tasks = () => {
	const [tasksData, setTasksData] = useState([]);

	const fetchData = async () => {
		// Query the API Gateway
		const resp = await fetch(
			"https://rvgxoasnxc.execute-api.eu-north-1.amazonaws.com/Production/tasks"
		);
		let jsonData = await resp.json();

		// Assign response data to our state variable
		setTasksData(jsonData);
	};

	useEffect(() => {
		// Load menu Links data from API Gateway
		fetchData();
	}, [tasksData]);

	return (
		<>
			{tasksData.map((task) => (
				<div
					key={task.taskId}
					className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6"
				>
					<h2>{task.taskName}</h2>
					<p>{task.clientName}</p>
					<p>{task.priority}</p>
				</div>
			))}
		</>
	);
};

export default Tasks;
