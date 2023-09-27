import 'tailwindcss/tailwind.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import HomePage from "src/pages/Home";
import MyIdeaPage from 'src/pages/MyIdea';
import CreateIdeaPage from 'src/pages/CreateIdea';
import SignInPage from 'src/pages/SignIn';
import SignUpPage from 'src/pages/SignUp';
import DetailIdeaPage from 'src/pages/DetailIdea';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/my-idea" element={<MyIdeaPage />} />
				<Route path="/create-idea" element={<CreateIdeaPage />} />
				<Route path="/detail-idea" element={<DetailIdeaPage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Routes>
		</>
	);
}

export default App;
