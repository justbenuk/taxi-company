import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/* styles */
import "react-toastify/dist/ReactToastify.css";
/* 
imported pages
*/
import Register from "./Routes/Authentication/Register";
import Login from "./Routes/Authentication/Login";
import Profile from "./Routes/Profile/Profile";

/* Components */
import StaffRoute from "./components/PrivateRoutes/StaffRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<StaffRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
