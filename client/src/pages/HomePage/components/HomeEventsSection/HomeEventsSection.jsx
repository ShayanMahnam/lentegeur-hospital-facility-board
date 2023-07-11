import "./HomeEventsSection.css";
import { useQuery } from "@tanstack/react-query";
import Line from "../../../../components/Line/Line";
import HomeEventCardLeft from "./components/HomeEventCardLeft/HomeEventCardLeft";
import HomeEventCardRight from "./components/HomeEventCardRight/HomeEventCardRight";
import Loading from "../../../../components/Loading/Loading";
import ErrorComponent from "../../../../components/ErrorComponent/ErrorComponent";

const HomeEventsSection = () => {
	const fetchEvents = async () => {
		const response = await fetch(
			`${
				import.meta.env.VITE_API_URL
			}/events?populate=images&sort=startDate:ASC`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["events"],
		queryFn: fetchEvents,
	});
	const eventsData = data?.data;

	return (
		<section className="home-events-section">
			<h1 className="home-events-title">Upcoming Events</h1>
			<Line />
			{isLoading && <Loading />}
			{isError && <ErrorComponent error={error} />}
			<div className="home-events-container">
				{!!eventsData &&
					eventsData.map((homeEvent, index) => {
						const { slug, title, images, startDate, summary } = homeEvent;
						const isEventsCardRight = index % 4 === 2 || index % 4 === 3;

						if (isEventsCardRight) {
							return (
								<HomeEventCardRight
									key={slug}
									title={title}
									slug={slug}
									image={images[0].url}
									alternativeText={images[0].alternativeText}
									date={startDate}
									summary={summary}
								/>
							);
						} else {
							return (
								<HomeEventCardLeft
									key={slug}
									title={title}
									slug={slug}
									image={images[0].url}
									alternativeText={images[0].alternativeText}
									date={startDate}
									summary={summary}
								/>
							);
						}
					})}
			</div>
		</section>
	);
};

export default HomeEventsSection;
