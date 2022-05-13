import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "./utilities/imageLoader";
import { TopNav } from "./top_nav";
import { getUser } from "../shared/user";
import { locale } from "../constants/locales";

// Page Images
import maskicon from "/src/assets/icon/mark-icon.svg";
import avatarImage from "/src/assets/icon/avatar.svg";
import { UserContext } from "../hooks/useUserProfile";

export function Header({ pageTitle, light }) {
	const [isLoggedIn, setLoginState] = useState("loading");
	const { user } = useContext(UserContext);

	useEffect(() => {
		const fetchData = async () => {
			const result = getUser();
			setLoginState(result);
		};
		fetchData();
	}, []);

	const avatarBase64 =
		(typeof window !== "undefined" &&
			window.localStorage.getItem("avatarBase64")) ||
		null;

	let avatarBackgroundImage = {};

	if (!avatarBase64) {
		if (
			typeof window !== "undefined" &&
			window.localStorage.getItem("picture")
		) {
			avatarBackgroundImage = {
				backgroundImage: "url(" + window.localStorage.getItem("picture") + ")",
			};
		} else {
			avatarBackgroundImage = {
				backgroundImage: "url(" + avatarImage + ")",
			};
		}
	} else if (avatarBase64) {
		avatarBackgroundImage = {
			backgroundImage: "url(" + avatarBase64 + ")",
		};
	}

	return (
		<header>
			<div className="top-nav">
				<div className="nav-wrapper">
					<div className="left-nav">
						<div className="logo-container">
							<a aria-current="page" className="" href="/">
								<div className="new-nav-logo">
									<Image className="new-nav-logo" loader={imageLoader} width={32} height={32} src={maskicon} alt="logo" />
								</div>
								<div className="page-id-container hide">
									<div className="app-id hide">Designed</div>
									{pageTitle ? (
										<div className="app-id">{pageTitle}</div>
									) : (
										<Link href="/">
											<a>
												{isLoggedIn ? null : (
													<div className="app-id-logo">
														<span className="wordmark" alt="wordmark"></span>
													</div>
												)}
											</a>
										</Link>
									)}
								</div>
							</a>
						</div>
						<div className="left-nav-container">
							<TopNav isLoggedIn={isLoggedIn} />
						</div>
					</div>
					<div className="right-nav">
						<div className="tertiary-container">
							<ul>
								{isLoggedIn === "loading" ? (
									""
								) : isLoggedIn ? (
									<li className="list-button">
										<Link href="/donate">
											<a className="icon-button hearty">
												<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
													<path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
												</svg>
											</a>
										</Link>
										<Link href="/contact">
											<a className="icon-button">
												<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
													<path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z" />
												</svg>
											</a>
										</Link>
									</li>
								) : (
									<li>
										<Link href="/donate">
											<a className="login">Donate</a>
										</Link>
										<Link href="/login">
											<a className="login">{locale.LOGIN}</a>
										</Link>
									</li>
								)}
							</ul>
						</div>
						<div className="user-container">
							{isLoggedIn === "loading" ? (
								""
							) : isLoggedIn ? (
								<Link href="/settings/general">
									<div className="avatar-container">
										<Image style={avatarBackgroundImage} className="login-avatar" loader={imageLoader} src={user?.avatar_url?.profile || "https://imagedelivery.net/Biz-7_vJO6O8Q9HnNqYfHg/17f715ad-06ff-4526-ad08-59bcaeb79900/profile"} width={48} height={48} alt="avatar" />
										{/* <div style={avatarBackgroundImage} className="login-avatar" /> */}
										<div className="user-status online"></div>
									</div>
								</Link>
							) : (
								<Link href="/join">
									<a className="button primary login-button">
										{locale.SIGN_UP}
									</a>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
