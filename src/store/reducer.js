const initialState = {
	counter: 0,
};

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, counter: state.counter++ };

		case "DECREMENT":
			return { ...state, counter: state.counter-- };

		case "RESET":
			return initialState;

		default:
			return state;
	}
};
