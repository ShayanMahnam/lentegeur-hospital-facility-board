import "./HomeGetInvolvedSection.css";
import { Link } from "react-router-dom";
import { FaHandHoldingMedical, FaPerson } from "react-icons/fa6";
import Line from "../../../../components/Line/Line";

const HomeGetInvolvedSection = () => {
	return (
		<section className="home-get-involved-section">
			<Link to="/get-involved" className="home-get-involved-title-link">
				<h2 className="home-get-involved-title">Get Involved</h2>
			</Link>
			<Line extraClass={"home-get-involved-line"} />
			<div className="home-get-involved-cards-container">
				<Link
					to="/get-involved#donate"
					className="home-get-involved-card fundraising"
				>
					<FaHandHoldingMedical className="home-get-involved-card-icon" />
					<div className="home-get-involved-card-subcontainer">
						<span className="home-get-involved-card-title">Fundraising</span>
						<p className="home-get-involved-card-summary">
							Help Us Help Others...
						</p>
					</div>
				</Link>
				<Link
					to="/get-involved#volunteer"
					className="home-get-involved-card volunteer"
				>
					<div className="home-get-involved-card-subcontainer">
						<span className="home-get-involved-card-title">Volunteer</span>
						<p className="home-get-involved-card-summary">
							Make a Difference...
						</p>
					</div>
					<FaPerson className="home-get-involved-card-icon" />
				</Link>
			</div>
		</section>
	);
};

export default HomeGetInvolvedSection;
