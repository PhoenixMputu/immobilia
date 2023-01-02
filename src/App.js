import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './compenents/Login';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
