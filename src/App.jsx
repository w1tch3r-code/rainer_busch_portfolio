import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import DarkModeProvider from "./components/DarkModeProvider.jsx";
import Resume from "./pages/Resume.jsx";
import Home from "./pages/Home.jsx";
import "./App.scss";

function App() {

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	return (
		<DarkModeProvider>
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
						}
					/>
					<Route path="/resume" element={<Resume />} />
				</Routes>
			</Router>
		</DarkModeProvider>
	);
}

export default App;
