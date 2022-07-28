import { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => setData(response.data));
	}, []);

	return (
		<>
			{data.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</>
	);
};

export default UserList;
