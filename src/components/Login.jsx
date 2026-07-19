import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:9091/login",
        user
      );

      // Save logged in user
      localStorage.setItem("user", JSON.stringify(response.data));

      alert("Login Successful");

      navigate("/Home");

    } catch (error) {

      alert("Invalid Email or Password");
      console.log(error);

    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register" style={{ marginTop: "20px" }}>
     Don't have an account?{" "}<br></br>
        <Link to="/register">Create Account</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;