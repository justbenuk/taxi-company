import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = { email, password };

    dispatch(login(userData))
      .unwrap()
      .then((user) => {
        toast.success(`User ${user.name} is Logged in`);
        navigate("/profile");
      })
      .catch(console.log("Error"));
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Enter password"
          required
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};
export default Login;
