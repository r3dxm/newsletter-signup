import { createSlice } from "@reduxjs/toolkit";

export const successSlice = createSlice({
	name: "success",
	initialState: {
		value: false,
		email: "",
	},
	reducers: {
		changeSuccess: (state) => {
			state.value = !state.value;
		},
		changeEmail: (state, action) => {
			state.email = action.payload;
		},
	},
});

export const { changeSuccess, changeEmail } = successSlice.actions;
export default successSlice.reducer;
