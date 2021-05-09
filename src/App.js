import "./App.css";
import Counter from "./Components/Counter";
import CounterDisplay from "./Components/CounterDisplay";

function App() {
	return (
		<div className="App">
			<h1>Counter App With Redux</h1>
			<Counter />
			<CounterDisplay />
		</div>
	);
}

export default App;
