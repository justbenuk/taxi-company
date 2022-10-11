import { configureStore } from "@reduxjs/toolkit";

//reducers
import authReducer from "../features/auth/authSlice";
import holidayReducer from "../features/holiday/holidaySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    holiday: holidayReducer,
  },
});
