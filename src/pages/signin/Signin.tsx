import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Topbar from "../../components/topbar/Topbar";
import { FcGoogle } from "react-icons/fc";

import hero from "../../assets/login-hero.svg";
import "./signin.scss";

const Signin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
          className="container"
        >
          <Topbar />

          <div className="auth container">
            <div className="auth__left">
              <form>
                <h1>Welcome to your professional community </h1>

                <div className="auth__left__wrapper1">
                  <div className="wrapper1__input">
                    <label htmlFor="email">Email</label>
                    <div className="auth__left__inputdiv">
                      <input type="email" id="email" />
                    </div>
                  </div>
                  <div className="wrapper1__input">
                    <label htmlFor="email">Password </label>
                    <div className="auth__left__inputdiv">
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
                  <div className="wrapper1__input">
                    <label htmlFor="email">Confirm Password </label>
                    <div className="auth__left__inputdiv">
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

                <div className="auth__left__wrapper2">
                  <span>
                    <small>
                      <Link to="/signup" className="link">
                        Forgot password?
                      </Link>
                    </small>
                    <button type="submit" className="btn btn--signin">
                      Sign in
                    </button>
                  </span>
                </div>

                <div className="auth__left__wrapper3">
                  <div className="auth__left__or">
                    <span>Or</span>
                  </div>
                </div>

                <div className="auth__left__wrapper4">
                  <span>
                    <button className="btn btn--Gsignin">
                      <FcGoogle style={{ fontSize: "20px" }} /> Continue with
                      Google
                    </button>
                    <button className="btn btn--Gsignin">
                      New to LinkedIn? Join now
                    </button>
                  </span>
                </div>
              </form>
            </div>

            <div className="auth__right">
              <img src={hero} alt="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
