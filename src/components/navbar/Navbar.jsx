import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext); // Get the user and dispatch from AuthContext

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); 
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h3 className="logo">SplotQuest</h3>
        </Link>
        {user ? (
          <div className="navItems">
            <button className="headerBtn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/login" className="headerBtn1">
              <button className="headerBtn">Sign in</button>
            </Link>
            <Link to="/register" className="headerBtn1">
              <button className="headerBtn">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
