import feed from "../../assets/feed-icon.svg";

import { Link } from "react-router-dom";

import "./rightcard.scss";

const RightCard = () => {
  return (
    <>
      <div className="rcard">
        <div className="rcard__titlediv">
          <div className="rcard__title">
            <h2>LinkedIn News</h2>
            <img src={feed} alt="" />
          </div>
          <ul className="rcard__list">
            <li>
              <Link to="#">
                Reimagining pay at India Inc
                <div>23h ago</div>
              </Link>
            </li>
            <li>
              <Link to="#">
                Achieving gender equity at work
                <div>1d ago</div>
              </Link>
            </li>
            <li>
              <Link to="#">
                From Armed Forces to corporate
                <div>3h ago</div>
              </Link>
            </li>
            <li>
              <Link to="#">
                India Inc seeks senior talent
                <div>3d ago</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightCard;
