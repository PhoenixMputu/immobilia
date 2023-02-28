import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './compenents/Login';
import Home from './compenents/Home';
import Register from './compenents/Register';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" index element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
