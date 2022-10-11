import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* Components */
import HolidayRequest from "../../components/Hioliday/HolidayRequest";
import HolidayList from "../../components/Hioliday/HolidayList";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [holidayForm, setHolidayForm] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout);
    navigate("/");
  };

  const holidayFormToggle = () => {
    setHolidayForm(!holidayForm);
  };

  return (
    <div className="mt-10 px-6">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="bg-white rounded-xl font-bold p-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-center">
            <div className="text-xl">
              {user.name} - {user.role}
            </div>
            <button
              className="text-yellow-500 border border-yellow-500 px-6 py-2"
              onClick={onLogout}
            >
              Sign Out
            </button>
          </div>
        </div>
        {/* Holiday Request form */}
        <div className="mt-4 bg-gray-900 text-white rounded-xl">
          {holidayForm ? (
            <HolidayRequest holidayFormToggle={holidayFormToggle} />
          ) : null}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
          {/* Holiday Request */}
          <div className="bg-white rounded-xl lg:col-span-3">
            <div className="font-bold flex flex-row justify-between items-center p-4 border-b">
              <div>Holiday Requests</div>
              <button
                className="text-green-500 border border-green-500 px-6 py-2"
                onClick={holidayFormToggle}
              >
                {holidayForm ? "Close Form" : "New Request"}
              </button>
            </div>
            <HolidayList />
          </div>
          {/* Message Section */}
          <div className="bg-white rounded-xl py-10 lg:py-0">
            <div className="font-bold flex flex-col justify-center items-center h-full text-center gap-8">
              <div className="font-bold text-xl">
                <div>Total Days Left</div>
                <div>{user.totalDays}</div>
              </div>
              <div className="font-bold text-xl">
                <div>Total Days Used</div>
                <div>{user.totalUsed}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
