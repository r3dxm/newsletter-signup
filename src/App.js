import "./App.css";
import SignupForm from "./components/SignupForm";
import Success from "./components/Success";
import { useSelector } from "react-redux";

function App() {
	const success = useSelector((state) => state.success.value);
	return (
		<div className="App">
			{!success && <SignupForm />}
			{success && <Success />}
		</div>
	);
}

export default App;
