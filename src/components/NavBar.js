import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(){

    const linkStyles = {
        padding: "12px",
        margin: "0 6px 6px",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div className="navBar">
            <NavLink to="/" exact style={linkStyles}>Home</NavLink>
            <NavLink to="/submissionForm" exact style={linkStyles}>Leave a Review</NavLink>
        </div>
    )
}

export default NavBar;