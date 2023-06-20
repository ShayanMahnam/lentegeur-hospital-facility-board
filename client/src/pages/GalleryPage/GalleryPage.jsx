import "./GalleryPage.css";
// import { useState } from "react";
import { Gallery } from "react-grid-gallery";

import { images } from "./components/Images";

const GalleryPage = () => {
	// const [index, setIndex] = useState(-1);

	// const currentImage = images[index];
	// const nextIndex = (index + 1) % images.length;
	// const nextImage = images[nextIndex] || currentImage;
	// const prevIndex = (index + images.length - 1) % images.length;
	// const prevImage = images[prevIndex] || currentImage;

	const handleClick = (index) => setIndex(index);
	// const handleClose = () => setIndex(-1);
	// const handleMovePrev = () => setIndex(prevIndex);
	// const handleMoveNext = () => setIndex(nextIndex);
	return (
		<>
			<h1>Gallery</h1>
			<div>
				<Gallery
					images={images}
					onClick={handleClick}
					enableImageSelection={false}
				/>
				{/* {!!currentImage && (
					<Lightbox
						mainSrc={currentImage.original}
						imageTitle={currentImage.caption}
						mainSrcThumbnail={currentImage.src}
						nextSrc={nextImage.original}
						nextSrcThumbnail={nextImage.src}
						prevSrc={prevImage.original}
						prevSrcThumbnail={prevImage.src}
						onCloseRequest={handleClose}
						onMovePrevRequest={handleMovePrev}
						onMoveNextRequest={handleMoveNext}
					/>
				)} */}
			</div>
		</>
	);
};

export default GalleryPage;
