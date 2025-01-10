import React from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";

import "./notfound.scss";

const Notfound: React.FC = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};
	return (
		<div className="notfound container">
			<Topbar />
			<div style={{ flexGrow: 1 }}></div>
			<div className="notfound__wrapper">
				<h1>Page not found</h1>
				<p>Uh oh, we can't seem to find the page you're looking for.</p>
				<button className="btn" onClick={handleClick}>
					Go to your feed
				</button>
			</div>
			<div style={{ flexGrow: 1 }}></div>
			<Footer />
		</div>
	);
};

export default Notfound;
