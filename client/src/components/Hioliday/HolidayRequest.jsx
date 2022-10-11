import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createHoliday } from "../../features/holiday/holidaySlice";

const HolidayRequest = ({ holidayFormToggle }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const initialState = {
    user: user._id,
    fromDate: "",
    toDate: "",
    returnToWorkDate: "",
    totalDaysUsed: "",
  };

  const [holidayForm, setHolidayForm] = useState(initialState);

  const { fromDate, toDate, returnToWorkDate, totalDaysUsed } = holidayForm;

  const onChange = (e) => {
    setHolidayForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHolidayForm = (e) => {
    e.preventDefault();
    dispatch(createHoliday(holidayForm));
    setHolidayForm(initialState);
    holidayFormToggle();
  };

  return (
    <div className="absolute z-10 w-full h-full bg-black/60 top-0 left-0 text-black">
      <div className="flex flex-col items-center justify-center h-full">
        <form
          onSubmit={onSubmitHolidayForm}
          className="bg-white rounded-xl shadow-2xl p-6"
        >
          <div className=" flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
              <label className="font-bold" htmlFor="fromDate">
                Start Date
              </label>
              <input
                type="date"
                name="fromDate"
                className="border border-gray-500 p-2 w-auto text-gray-700"
                value={fromDate}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label className="font-bold" htmlFor="fromDate">
                End Date
              </label>
              <input
                type="date"
                name="toDate"
                className="border border-gray-500 p-2 text-gray-700"
                value={toDate}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label className="font-bold" htmlFor="fromDate">
                Return To Work
              </label>
              <input
                type="date"
                name="returnToWorkDate"
                className="border border-gray-500 p-2 text-gray-700"
                value={returnToWorkDate}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label className="font-bold" htmlFor="totalDaysUsed">
                Total days needed
              </label>
              <input
                type="number"
                name="totalDaysUsed"
                className="border border-gray-500 p-2 text-gray-700 w-1/3"
                value={totalDaysUsed}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="mt-10 flex flex-row justify-between p-6">
            <button
              className="text-red-500 Holiday  border border-red-500 px-6 py-2 hover:bg-red-500 hover:text-white"
              onClick={holidayFormToggle}
            >
              Close Form
            </button>
            <button className="text-yellow-500 Holiday  border border-yellow-500 px-6 py-2 hover:bg-yellow-500 hover:text-white">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HolidayRequest;
