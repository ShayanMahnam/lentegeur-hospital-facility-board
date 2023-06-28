import "./HistorySection.css";
import Line from "../../../../components/Line/Line";

import image from "../../../../assets/grey_image.svg";

const HistorySection = () => {
	return (
		<div className="history-section">
			<h2>History</h2>
			<Line />
			<div className="history-container">
				<div className="history-image-container">
					<img src={image} alt="grey square" />
				</div>

				<p className="history-text">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industrys standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
			</div>
		</div>
	);
};

export default HistorySection;