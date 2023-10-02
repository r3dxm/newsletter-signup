import { configureStore } from "@reduxjs/toolkit";
import successReducer from "./reducers/successSlice";

export default configureStore({
	reducer: {
		success: successReducer,
	},
});
