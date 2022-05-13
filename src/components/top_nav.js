import React, { useState } from "react";
import Popup from "./dropdown_menu";
import Link from "next/link";
import { locale } from "../constants/locales";
import Image from "next/image";
import imageLoader from "./utilities/imageLoader";

// Component Images
import caret from "../assets/icon/caret.svg";

export function TopNav({ isLoggedIn }) {
	const [currentDropdown, setDropdown] = useState("");

	return (
		<ul className="nav-menu light">
			<li>
				<Popup
					onOpen={() => setDropdown(locale.DISCOVER)}
					onClose={() => setDropdown("")}
					hoverable={true}
					trigger={
						<a
							className={`dropdown-toggle ${
								currentDropdown === locale.DISCOVER && "active"
							}`}
						>
							{locale.DISCOVER}{" "}
							<span className="caret">
								<Image
									src={caret}
									loader={imageLoader}
									layout="fill"
									unoptimized
								/>
							</span>
						</a>
					}
				>
					<ul>
						<li>
							<a href={isLoggedIn ? "/discuss" : "/discuss"}>Discussions</a>
						</li>
						<li>
							<Link href="/jobs">Jobs</Link>
						</li>
						<li>
							<Link href="/podcasts">Podcasts</Link>
						</li>
					</ul>
				</Popup>
			</li>
			<li>
				<Popup
					onOpen={() => setDropdown(locale.MENTORS)}
					onClose={() => setDropdown("")}
					hoverable={true}
					trigger={
						<a
							className={`dropdown-toggle ${
								currentDropdown === locale.MENTORS && "active"
							}`}
						>
							{locale.MENTORS}{" "}
							<span className="caret">
								<Image src={caret} loader={imageLoader} layout="fill" />
							</span>
						</a>
					}
				>
					<ul>
						<li>
							<Link href={isLoggedIn ? "/our-mentors" : "/our-mentors"}>
								Our Mentors
							</Link>
						</li>
						<li>
							<Link href="/become-a-mentor">Become a Mentor</Link>
						</li>
						<li>
							<Link href="/legal/code-of-conduct">Code of Conduct</Link>
						</li>
					</ul>
				</Popup>
			</li>
			<li>
				<Popup
					onOpen={() => setDropdown(locale.LEARN_MORE)}
					onClose={() => setDropdown("")}
					hoverable={true}
					trigger={
						<a
							className={`dropdown-toggle ${
								currentDropdown === locale.LEARN_MORE && "active"
							}`}
						>
							{locale.LEARN_MORE}{" "}
							<span className="caret">
								<Image src={caret} loader={imageLoader} layout="fill" />
							</span>
						</a>
					}
				>
					<ul>
						<li>
							<Link href="/about">About Us</Link>
						</li>
						<li>
							<Link href="/our-donors">Our Donors</Link>
						</li>
						<li>
							<Link href="/get-involved">Get Involved</Link>
						</li>
						<li>
							<Link href="/donate">Donate</Link>
						</li>
						<li>
							<a href="http://shop.designed.org" target="_blank">
								Shop Gear
							</a>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</Popup>
			</li>
		</ul>
	);
}
