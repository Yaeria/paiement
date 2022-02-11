import { useState } from 'react';
import './App.css';
import spatula from './assets/pizza-montagnarde.jpg';
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>Le retour du pâton</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>10,00€</h3>
					<img src={spatula} alt='Pizza Montagnarde' />
					<button onClick={() => setShowItem(true)}>Acheter</button>
				</>
			)}
		</div>
	);
}

export default App;
