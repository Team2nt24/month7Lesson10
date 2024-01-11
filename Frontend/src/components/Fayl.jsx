import { useEffect, useState } from 'react';

export default function Fayl() {
	const [repo, setRepo] = useState([]);
	useEffect(() => {
		fetch('https://api.github.com/users/hojiakbar/repos')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setRepo(data);
			});
	}, []);

	console.log('Reppo', repo);
	return (
		<div>
			<h2></h2>
			{/* <p>{repo[0].id}</p> */}
			{/* <h2>hello {repo[0].node_id} </h2>
			<p>{repo[0].name}</p>
			<p>{repo[0].full_name}</p>
			<p>{repo[0].private}</p> */}
		</div>
	);
}
