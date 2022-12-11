import { FC } from "react"

const Footer: FC = () => {
	const bg_img = require("../assets/footer_image.jpg")
	return (
		<footer>
			<div className="absolute bottom-0">
				<img
					src={bg_img}
					alt="footer_img"
					width={1000}
				/>
			</div>
		</footer>
	);
};

export default Footer