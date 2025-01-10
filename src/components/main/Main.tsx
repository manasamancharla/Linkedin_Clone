import { BiSolidPhotoAlbum } from "react-icons/bi";
import { PiVideoFill } from "react-icons/pi";
import { PiArticleFill } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";

import user from "../../assets/user.svg";
import like from "../../assets/like-icon.png";
import clap from "../../assets/clap-icon.png";

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
							<PiArticleFill className="sharebox__icon" />
							<span>Write article</span>
						</button>
					</div>
				</div>

				<div className="main__article">
					<div className="main__articlediv1">
						<div className="articlediv1__sharedactor">
							<a>
								<img src={user} alt="" />
								<div>
									<span>Title</span>
									<span>Info</span>
									<span>Date</span>
								</div>
							</a>
							<button>Change</button>
						</div>
						<div className="articlediv1__description">Description</div>
						<div className="articlediv1__sharedimg">
							<a>
								<img src={user} alt="" />
							</a>
						</div>
						<ul className="articlediv1__socialcounts">
							<li>
								<button>
									<img src={like} alt="" />
									<img src={clap} alt="" />
									<span>62</span>
								</button>
							</li>
							<li>
								<a> comments</a>
							</li>
						</ul>

						<div className="articlediv1__socialactions">
							<button>
								<BiSolidLike />
								<span>Like</span>
							</button>
							<button>
								<FaRegCommentDots />
								<span>Comment</span>
							</button>
							<button>
								<BiRepost />
								<span>Share</span>
							</button>
							<button>
								<BsFillSendFill />
								<span>Send</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
