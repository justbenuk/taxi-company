import { configureStore } from "@reduxjs/toolkit";

//reducers
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
