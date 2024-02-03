import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage';
import PublicProfilePage from './pages/PublicProfilePage';

interface Props { }

const App: React.FC<Props> = () => {

	return (
		<Routes>
			<Route path="/" element={<WelcomePage />} />
			<Route path="/public-profile" element={<PublicProfilePage />} />
		</Routes>
	);
};

export default App;
