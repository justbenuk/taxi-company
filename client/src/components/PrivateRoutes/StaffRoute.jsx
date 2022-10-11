import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const StaffRoute = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout);
    navigate("/");
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === "Not Authenticated") {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-red-400 p-6 rounded-xl text-red-800 font-bold">
          <div className="flex flex-row justify-between">
            <p>Sorry, You have not been autherised to view this Page</p>
            <button onClick={onLogout}>Sign Out</button>
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
};

export default StaffRoute;
