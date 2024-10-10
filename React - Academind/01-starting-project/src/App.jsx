import Header from './Header.jsx';
import Input from './Input.jsx';
import Resultados from './Resultados.jsx';
import { useState } from 'react';

function App() {
	const [number, setNumber] = useState({
		initialInvestment: 15000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNumber({
			...number,
			[name]: value,
		});
	};

	return (
		<>
			<Header />
			<Input twb={handleChange} number={number} />
			<Resultados number={number} />
		</>
	);
}

export default App;
