import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";

import { Link, useNavigate } from "react-router-dom";

import "./signup.scss";

const Signup: React.FC = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Topbar />
        <Footer />
      </div>
    </>
  );
};

export default Signup;
