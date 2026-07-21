import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"

function Navbar() {

  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
   const [open, setOpen] = useState(false);

  const logout = () => {

    localStorage.removeItem("user");
    alert("Logout Successful");
    navigate("/login");
    window.location.reload();
  };

  return (

    <nav className="navbar">

      <h2>🎵InstaVibe</h2>

      <div className="nav-links">

        <Link to="/home">Home</Link>

        <Link to="/songs">Songs</Link>

        <Link to="/captions">Captions</Link>

        <Link to="/favorites">Favorites</Link>

        <Link to="/about">About</Link>

     </div>

          {loggedInUser ? (

        <div className="profile">

          <div
            className="profile-header"
            onClick={() => setOpen(!open)}
          >
            <img
              src={loggedInUser.profileImage || "/images/profile.jpg"}
              alt="Profile"
              className="profile-img"
            />

            <span>{loggedInUser.name}</span>

            <span>▼</span>
          </div>

          {open && (

            <div className="dropdown">

              <div className="dropdown-user">
                <h4>{loggedInUser.name}</h4>
                <p>{loggedInUser.email}</p>
              </div>

              <Link to="/favorites">❤️ Favorites</Link>

              <Link to="/Profile">👤 My Profile</Link>

              <Link to="/settings">⚙ Settings</Link>

              <button onClick={logout}>
                Logout
              </button>

            </div>

          )}

        </div>

      ) : (

        <Link to="/login">
          <button>Login</button>
        </Link>

      )}

    </nav>


  );

}

export default Navbar;