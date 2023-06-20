/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// I disabled this until find a solution for them
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const GalleryPage = () => {
	const smallItemStyles = {
		cursor: "pointer",
		objectFit: "cover",
		width: "100%",
		maxHeight: "100%",
	};

	const items = [
		{
			original:
				"https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg",
			thumbnail:
				"https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg",
			width: "1600",
			height: "1600",
			caption: "Photo of seashore by Folkert Gorter",
		},
		{
			original:
				"https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg",
			thumbnail:
				"https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
			width: "1600",
			height: "1068",
			caption: "Photo of mountain lake by Samuel Rohl",
		},
		{
			original:
				"https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
			thumbnail:
				"https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
			width: "1600",
			height: "1066",
			caption: "Photo of fog in the village by Ales Krivec",
		},
		{
			original:
				"https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg",
			thumbnail:
				"https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg",
			width: "1600",
			height: "1066",
			caption: "Photo of river sunset by Michael Hull",
		},
		{
			original:
				"https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg",
			thumbnail:
				"https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg",
			width: "1600",
			height: "1066",
			caption: "Photo of bear by Thomas Lefebvre",
		},
	];


	return (
		<Gallery>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "240px 171px 171px",
					gridTemplateRows: "114px 114px",
					gridGap: 12,
				}}
			>
				{items.map((item, index) => (
					<Item
						key={index}
						original={item.original}
						thumbnail={item.thumbnail}
						width={item.width}
						height={item.height}
						caption={item.caption}
					>
						{({ ref, open }) => (
							<img
								style={
									index === 0
										? { ...smallItemStyles, cursor: "pointer" }
										: smallItemStyles
								}
								src={item.thumbnail}
								ref={ref}
								onClick={open}
								alt="picture"
							/>
						)}
					</Item>
				))}
			</div>
		</Gallery>
	);
};

export default GalleryPage;
