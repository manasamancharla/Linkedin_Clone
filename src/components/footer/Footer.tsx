import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/login-logo.svg";

import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer container">
        <Link
          to=""
          style={{
            display: "flex",
            justifyContent: "center",
            gap: ".2rem",
          }}
        >
          <img src={logo} alt="logo" style={{ height: "12px" }} />
          &copy; 2023
        </Link>
        <Link to="">About </Link>
        <Link to="">Accessibility </Link>
        <Link to="">User Agreement</Link>
        <Link to="">Privacy Policy </Link>
        <Link to="">Cookie Policy </Link>
        <Link to=""> Copyright Policy </Link>
        <Link to="">Brand Policy </Link>
        <Link to="">Guest Controls</Link>
        <Link to="">Community Guidelines</Link>
      </div>
    </>
  );
};

export default Footer;
