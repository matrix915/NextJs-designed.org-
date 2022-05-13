import Link from "next/link";
import React from "react";
import { N_HOST_CLIENT } from "../../constants/nHost";

const ThirdPartyAuthLinks = () => {
	const handleSocialSignin = async (type) => {
		const Res = await N_HOST_CLIENT.auth.signIn({
			provider: type,
		});
	};
	return (
		<>
			<div className="google-container">
				<Link href="/passwordless">
					<button type="button" className="social-button">
						<div className="button-icon"></div>
						<span>Magic Login</span>
					</button>
				</Link>
			</div>
			<div className="google-container">
				<button
					type="button"
					className="social-button"
					onClick={() => handleSocialSignin("google")}
				>
					<div className="button-icon">
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M39.611 16.083H38V16H20V24H31.303C29.654 28.657 25.223 32 20 32C13.373 32 8 26.627 8 20C8 13.373 13.373 8 20 8C23.059 8 25.842 9.154 27.961 11.039L33.618 5.382C30.046 2.053 25.268 0 20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 18.659 39.862 17.35 39.611 16.083Z"
								fill="#FFC107"
							/>
							<path
								d="M2.30566 10.691L8.87666 15.51C10.6547 11.108 14.9607 8 19.9997 8C23.0587 8 25.8417 9.154 27.9607 11.039L33.6177 5.382C30.0457 2.053 25.2677 0 19.9997 0C12.3177 0 5.65566 4.337 2.30566 10.691Z"
								fill="#FF3D00"
							/>
							<path
								d="M20.0003 40C25.1663 40 29.8603 38.023 33.4093 34.808L27.2193 29.57C25.2113 31.091 22.7153 32 20.0003 32C14.7983 32 10.3813 28.683 8.71731 24.054L2.19531 29.079C5.50531 35.556 12.2273 40 20.0003 40Z"
								fill="#4CAF50"
							/>
							<path
								d="M39.611 16.083H38V16H20V24H31.303C30.511 26.237 29.072 28.166 27.216 29.571C27.217 29.57 27.218 29.57 27.219 29.569L33.409 34.807C32.971 35.205 40 30 40 20C40 18.659 39.862 17.35 39.611 16.083Z"
								fill="#1976D2"
							/>
						</svg>
					</div>
					<span>Sign in with Google</span>
				</button>
			</div>
			<div
				className="microsoft-container"
				onClick={() => handleSocialSignin("linkedin")}
			>
				<button type="button" className="social-button">
					<div className="button-icon">
						<svg
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M36 31C36 33.762 33.762 36 31 36H5C2.239 36 0 33.762 0 31V5C0 2.238 2.239 0 5 0H31C33.762 0 36 2.238 36 5V31Z"
								fill="#0078D4"
							/>
							<path
								opacity="0.05"
								d="M24 31V20.901C24 19.212 23.181 18.203 21.808 18.203C20.993 18.203 20.394 18.662 20.029 19.567C20.012 19.631 19.988 19.892 19.998 20.681L20 31H13V12H20V13.061C21.022 12.356 22.275 12 23.738 12C28.285 12 30.999 15.093 30.999 20.274L31 31H24ZM5 31V12H8.457C6.454 12 5 10.528 5 8.499C5 6.472 6.478 5 8.514 5C10.526 5 11.959 6.431 12 8.479C12 10.523 10.521 12 8.485 12H12V31H5Z"
								fill="black"
							/>
							<path
								opacity="0.07"
								d="M24.5 30.5V20.901C24.5 18.928 23.469 17.703 21.808 17.703C20.513 17.703 19.873 18.615 19.565 19.38C19.483 19.579 19.494 20.369 19.498 20.706L19.5 30.5H13.5V12.5H19.5V14.138C20.295 13.315 21.575 12.5 23.738 12.5C27.971 12.5 30.499 15.406 30.499 20.274L30.5 30.5H24.5ZM5.5 30.5V12.5H11.5V30.5H5.5ZM8.457 11.5C6.744 11.5 5.5 10.238 5.5 8.499C5.5 6.761 6.768 5.5 8.514 5.5C10.238 5.5 11.465 6.729 11.5 8.489C11.5 10.238 10.232 11.5 8.485 11.5H8.457Z"
								fill="black"
							/>
							<path
								d="M6 13H11V30H6V13ZM8.485 11H8.457C6.965 11 6 9.888 6 8.499C6 7.08 6.995 6 8.514 6C10.035 6 10.972 7.08 11 8.499C11 9.887 10.035 11 8.485 11ZM30 30H25V20.901C25 18.703 23.775 17.203 21.808 17.203C20.307 17.203 19.495 18.215 19.101 19.193C18.957 19.543 19 20.511 19 21V30H14V13H19V15.616C19.721 14.5 20.85 13 23.738 13C27.316 13 29.999 15.25 29.999 20.274L30 30Z"
								fill="white"
							/>
						</svg>
					</div>
					<span>Sign in with LinkedIn</span>
				</button>
			</div>
			<div
				className="facebook-container"
				onClick={() => handleSocialSignin("facebook")}
			>
				<button type="button" className="social-button">
					<div className="button-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							version="1.1"
							id="Layer_1"
							x="0px"
							y="0px"
							viewBox="0 0 266.893 266.895"
							enableBackground="new 0 0 266.893 266.895"
						>
							<path
								id="Blue_1_"
								fill="#3C5A99"
								d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812  c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225  H248.082z"
							/>
							<path
								id="f"
								fill="#FFFFFF"
								d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935  l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585  v99.803H182.409z"
							/>
						</svg>
					</div>
					<span>Sign in with Facebook</span>
				</button>
			</div>
			<div className="twitter-container hide">
				<button type="button" className="social-button">
					<div className="button-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							aria-label="Twitter"
							role="img"
							viewBox="0 0 512 512"
						>
							<rect width="512" height="512" rx="15%" fill="#1da1f3" />
							<path
								fill="#fff"
								d="M437 152a72 72 0 0 1-40 12 72 72 0 0 0 32-40 72 72 0 0 1-45 17 72 72 0 0 0-122 65 200 200 0 0 1-145-74 72 72 0 0 0 22 94 72 72 0 0 1-32-7 72 72 0 0 0 56 69 72 72 0 0 1-32 1 72 72 0 0 0 67 50 200 200 0 0 1-105 29 200 200 0 0 0 309-179 200 200 0 0 0 35-37"
							/>
						</svg>
					</div>
					<span>Sign in with Twitter</span>
				</button>
			</div>
		</>
	);
};

export default ThirdPartyAuthLinks;
