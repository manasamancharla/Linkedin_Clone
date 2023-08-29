import Navbar from "../../components/navbar/Navbar";
import LeftCard from "../../components/leftcard/LeftCard";
import Main from "../../components/main/Main";
import RightCard from "../../components/rightcard/RightCard";

import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__layout">
          <LeftCard />
          <Main />
          <RightCard />
        </div>
      </div>
    </>
  );
};

export default Home;
