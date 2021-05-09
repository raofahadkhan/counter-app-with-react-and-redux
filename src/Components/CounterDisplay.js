import React from "react";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
	const counter = useSelector((state) => {
		return state.counter;
	});
	return <div>Counter Display {counter}</div>;
};

export default CounterDisplay;
