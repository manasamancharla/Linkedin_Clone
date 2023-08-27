import React from "react";

import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";

import "./notfound.scss";

const Notfound: React.FC = () => {
  return (
    <div className="notfound container">
      <Topbar />
      <div style={{ flexGrow: 1 }}></div>
      <div className="notfound__wrapper">
        <h1>Page not found</h1>
        <p>Uh oh, we can't seem to find the page you're looking for.</p>
        <button className="btn">Go to your feed</button>
      </div>
      <div style={{ flexGrow: 1 }}></div>
      <Footer />
    </div>
  );
};

export default Notfound;
