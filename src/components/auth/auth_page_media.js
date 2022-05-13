import React from "react";
import Image from "next/image";
import imageLoader from "../../components/utilities/imageLoader";
import header from "../../assets/images/hero/signup.svg";

const AuthPageMedia = () => {
	return (
		<div className="media-container">
			<div className="illustration-container">
				<Image
					src={header}
					loader={imageLoader}
					objectFit="contain"
					layout="fill"
				/>
			</div>
			<div className="author-credit">
				<a href="https://undraw.co/" target="_blank">
					<strong>Credit</strong>
					<br />
					Undraw
				</a>
			</div>
		</div>
	);
};

export default AuthPageMedia;
