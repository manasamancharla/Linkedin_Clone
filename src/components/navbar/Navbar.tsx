import { Link } from "react-router-dom";

import logo from "../../assets/home-logo.svg";
import search from "../../assets/search-icon.svg";
import user from "../../assets/user.svg";
import { BiSolidHome } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";

import "./navbar.scss";

const Navbar = () => {
	return (
		<nav>
			<div className="content">
				<Link to="/home" className="home__icon">
					<img src={logo} alt="logo" />
				</Link>

				<div className="content__search">
					<div>
						<img src={search} alt="search" />
						<input type="text" placeholder="Search" />
					</div>
				</div>

				<div className="content__navlinks">
					<ul className="content__navlinks_wrapper">
						<li className="content__navlink">
							<Link to="/home" className="active">
								<BiSolidHome className="content__icon" />
								<span>Home</span>
							</Link>
						</li>

						<li className="content__navlink">
							<Link to="/home">
								<BsPeopleFill className="content__icon" />
								<span>My Network</span>
							</Link>
						</li>

						<li className="content__navlink">
							<Link to="/home">
								<BiSolidMessageRoundedDetail className="content__icon" />
								<span>Messaging</span>
							</Link>
						</li>

						<li className="content__navlink">
							<Link to="/home">
								<IoMdNotifications className="content__icon" />
								<span>Notifications</span>
							</Link>
						</li>

						<li className="content__me">
							<img src={user} alt="user" className="content__me__profile" />
							<span>
								Me
								<BiSolidDownArrow id="down" />
							</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
