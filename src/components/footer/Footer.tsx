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
          className="link__variant"
        >
          <img src={logo} alt="logo" style={{ height: "12px" }} />
          &copy; 2023
        </Link>
        <Link to="" className="link__variant">
          About
        </Link>
        <Link to="" className="link__variant">
          Accessibility
        </Link>
        <Link to="" className="link__variant">
          User Agreement
        </Link>
        <Link to="" className="link__variant">
          Privacy Policy
        </Link>
        <Link to="" className="link__variant">
          Cookie Policy
        </Link>
        <Link to="" className="link__variant">
          Copyright Policy
        </Link>
        <Link to="" className="link__variant">
          Brand Policy
        </Link>
        <Link to="" className="link__variant">
          Guest Controls
        </Link>
        <Link to="" className="link__variant">
          Community Guidelines
        </Link>
      </div>
    </>
  );
};

export default Footer;
