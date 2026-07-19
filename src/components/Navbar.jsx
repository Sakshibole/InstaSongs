import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"

function Navbar() {

  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("user");

    alert("Logout Successful");

    navigate("/login");

    window.location.reload();

  };

  return (

    <nav className="navbar">

      <h2>🎵InstaVibe</h2>

      <div>

        <Link to="/home">Home</Link>

        <Link to="/songs">Songs</Link>

        <Link to="/captions">Captions</Link>

        <Link to="/favorites">Favorites</Link>

        <Link to="/about">About</Link>

        {

          loggedInUser ?

            <button onClick={logout}>
              Logout
            </button>

            :

            <Link to="/login">
              <button>Login</button>
            </Link>

        }

      </div>

    </nav>

  );

}

export default Navbar;