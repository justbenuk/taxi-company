/* import Core */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

/* import components */
const Register = () => {
  //set the form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //desctructire the form
  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //check if passwords match
    if (password !== confirmPassword) {
      //TODO: add toastify
      console.log("Your passwords dont match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData))
        .unwrap()
        .then((user) => {
          //TODO:: add toastify
          console.log("user added");
        })
        .catch(console.error());
    }
    if (isLoading) {
      return <p>Loading</p>;
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter Your Name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
          placeholder="Enter Your Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
          placeholder="Enter Your Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          placeholder="Conform Your Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default Register;
