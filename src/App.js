import "./index.css";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import Gradient from "./components/Gradient";
import MyDialog from "./components/MyDialog";

function App() {
	return (
		<div className="App">
			<Header />
			<Gradient />
			<div className="max-w-4xl px-5 mx-auto">
				<h2>Oppgaver</h2>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
					<Tasks />
				</div>
				<MyDialog />
			</div>
		</div>
	);
}

export default App;
