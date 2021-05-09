import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => {
		return state.counter;
	});
	return (
		<div>
			<div>Count: {count}</div>
			<div>
				<button
					onClick={() => {
						dispatch({ type: "INCREMENT" });
					}}
				>
					Increment
				</button>
				<button
					onClick={() => {
						dispatch({ type: "DECREMENT" });
					}}
				>
					Decrement
				</button>
				<button
					onClick={() => {
						dispatch({ type: "RESET" });
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Counter;
