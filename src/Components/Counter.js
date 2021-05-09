import React from "react";
import { useDispatch } from "react-redux";

const Counter = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<div>Counter: 12</div>
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
