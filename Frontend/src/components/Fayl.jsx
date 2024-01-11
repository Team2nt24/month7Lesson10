import { useEffect, useState } from 'react';

export default function Fayl() {
	const [repo, setRepo] = useState([]);
	useEffect(() => {
		fetch('https://api.github.com/users/BuilderSIA/repos')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setRepo(data);
			});
	}, []);

	// console.log('Reppo', repo);
	return (
		<>
			{repo.map((item)=>{
				<h2>
					{item.name}
				</h2>
			})}
		</>
	);
}
