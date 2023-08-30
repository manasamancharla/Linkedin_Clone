import Navbar from "../../components/navbar/Navbar";
import LeftCard from "../../components/leftcard/LeftCard";
import Main from "../../components/main/Main";
import RightCard from "../../components/rightcard/RightCard";

import "./home.scss";

const Home = () => {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "var(--color-light)", width: "100%" }}
      >
        <Navbar />

        <div style={{ height: "65px", width: "100%" }}></div>
        <div className="home">
          <div className="home__layout">
            <LeftCard />
            <Main />
            <RightCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
