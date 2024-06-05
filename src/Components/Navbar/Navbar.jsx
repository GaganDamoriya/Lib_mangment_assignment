import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const endpoint = useLocation();

  const handleNavigation = () => {
    if (endpoint.pathname === "/") {
      navigate("/mybookshelf");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="navbar">
      READER's ZONE
      <button className="shelfBtn" onClick={handleNavigation}>
        {endpoint.pathname === "/" ? "My Bookshelf" : "Go to Home"}
      </button>
    </div>
  );
};

export default Navbar;
