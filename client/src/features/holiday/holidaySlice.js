import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import holidayService from "./holidayService";

import { extractErrorMessage } from "../../utils";

const initialState = {
  holidays: null,
  isLoading: false,
};

export const createHoliday = createAsyncThunk(
  "holiday/create",
  async (holidayForm, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await holidayService.createHoliday(holidayForm, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const getHolidays = createAsyncThunk(
  "holiday/getall",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await holidayService.getHolidays(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const holidaySlice = createSlice({
  name: "holiday",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createHoliday.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createHoliday.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createHoliday.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getHolidays.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHolidays.fulfilled, (state, action) => {
        state.holidays = action.payload;
        state.isLoading = false;
      });
  },
});

export default holidaySlice.reducer;
