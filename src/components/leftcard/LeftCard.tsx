import { Link } from "react-router-dom";

import saved from "../../assets/item-icon.svg";
import user from "../../assets/user.svg";

import "./leftcard.scss";

const LeftCard = () => {
  return (
    <>
      <div className="lcard">
        <div className="lcard__user">
          <div className="lcard__user__info">
            <div className="background_img"></div>
            <Link to="#">
              <img src={user} className="user_img" />
              <p>Welcome, there!</p>
            </Link>
          </div>
          <div className="lcard__widget">
            <span>
              <img src={saved} alt="" />
              My Items
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftCard;
