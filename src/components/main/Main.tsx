import { BiSolidPhotoAlbum } from "react-icons/bi";
import { PiVideoFill } from "react-icons/pi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { PiArticleFill } from "react-icons/pi";

import user from "../../assets/user.svg";

import "./main.scss";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main__sharebox">
          <div className="main__sharebox__div1">
            <img src={user} alt="" />
            <button> Start a post</button>
          </div>

          <div className="main__sharebox__div2">
            <button>
              <BiSolidPhotoAlbum className="sharebox__icon" />
              <span>Photo</span>
            </button>

            <button>
              <PiVideoFill className="sharebox__icon" />
              <span>Video</span>
            </button>

            <button>
              <BsFillBriefcaseFill className="sharebox__icon" />
              <span>Job</span>
            </button>

            <button>
              <PiArticleFill className="sharebox__icon" />
              <span>Write article</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
