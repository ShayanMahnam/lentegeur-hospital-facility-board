import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Line from "../../components/Line/Line";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./GalleryAlbumPage.css";

const GalleryAlbumPage = () => {
	const { slug } = useParams();

	const fetchGalleryAlbum = async (slug) => {
		const response = await fetch(
			`${
				import.meta.env.VITE_API_URL
			}/gallery-albums?filters[slug][$eq]=${slug}&populate=images`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["gallery-albums", slug],
		queryFn: () => fetchGalleryAlbum(slug),
	});
	const galleryAlbumData = data?.data[0];

	return (
		<div className="gallery-album-page">
			<h1>Gallery Album Page</h1>
			<Line />
			{isLoading && <Loading />}
			{isError && <ErrorComponent error={error} />}
			{!!galleryAlbumData && (
				<div className="gallery-album-container">
					<Link to="/gallery" className="gallery-album-link-back">
						{"< Back"}
					</Link>
					<h2 className="gallery-album-title">{galleryAlbumData.title}</h2>
					<p className="gallery-album-summary">{galleryAlbumData.summary}</p>
					<div className="gallery-album-list">
						<ImageGallery
							items={galleryAlbumData.images.map((image) => ({
								original: image.url,
								thumbnail: image.url,
								description: image.alternativeText,
							}))}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default GalleryAlbumPage;
