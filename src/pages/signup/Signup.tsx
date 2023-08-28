import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";

import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import "./signup.scss";

const Signup = () => {
  const [showPassword, setShowPassword] = useState<unknown>(false);

  return (
    <>
      <div className="signup ">
        <Topbar />
        <h1>Make the most of your professional life </h1>

        <form>
          <div className="signup__wrapper1">
            <div className="signup__wrapper1__input">
              <label htmlFor="email">Email</label>
              <div className="signup__inputdiv">
                <input type="email" id="email" />
              </div>
            </div>
            <div className="signup__wrapper1__input">
              <label htmlFor="username">Username </label>
              <div className="signup__inputdiv">
                <input type="username" id="username" />
              </div>
            </div>
            <div className="signup__wrapper1__input">
              <label htmlFor="email">Password </label>
              <div className="signup__inputdiv">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                />
                <p
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </p>
              </div>
            </div>
          </div>

          <div className="signup__wrapper2">
            <span>
              <button type="submit" className="btn btn--signup">
                Agree & Join
              </button>
            </span>
          </div>

          <div className="signup__wrapper3">
            <div className="signup__or">
              <span>Or</span>
            </div>
          </div>

          <div className="signup__wrapper4">
            <span>
              <button className="btn btn--Gsignup">
                <FcGoogle style={{ fontSize: "20px" }} /> Continue with Google
              </button>
              <small>
                Already have an account? &nbsp;
                <Link to="/" className="link">
                  Log in
                </Link>
              </small>
            </span>
          </div>
        </form>
        <div style={{ flexGrow: 1 }}></div>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
