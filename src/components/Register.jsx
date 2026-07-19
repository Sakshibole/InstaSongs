import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !user.name ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      name: user.name,
      email: user.email,
      password: user.password
    };

    try {

      await axios.post(
        "http://localhost:9091/register",
        data
      );

      alert("Account Created Successfully!");

      setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      // Redirect to login page
      navigate("/login");

    } catch (error) {

      alert("Registration Failed");

      console.log(error);

    }

  };

  return (

    <div className="login-container">

      <div className="login-box">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="login" style={{ marginTop: "20px" }}>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>

    </div>

  );

}

export default Register;