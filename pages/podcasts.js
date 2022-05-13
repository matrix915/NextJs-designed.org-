import React from "react";
import { Link } from "next";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import Layout from "/src/layouts/main";

// Page Images
import featuredPodcast from "/src/assets/images/podcasts/featured/chrisdo.jpg";
import theFuturPodcast from "/src/assets/images/podcasts/cover/thefutur-podcast.jpg";
import designMattersPodcast from "/src/assets/images/podcasts/cover/design-matters-podcast.jpg";
import feastingOnDesignPodcast from "/src/assets/images/podcasts/cover/feasting-on-design-podcast.jpg";
import gritsAndGridsPodcast from "/src/assets/images/podcasts/cover/grits-and-grids-podcast.jpg";
import revisionPathPodcast from "/src/assets/images/podcasts/cover/revision-path-podcast.jpg";
import theBusinessOfArchitecturePodcast from "/src/assets/images/podcasts/cover/the-business-of-architecture-podcast.jpg";
import theLogoGeekPodcast from "/src/assets/images/podcasts/cover/the-logo-geek-podcast.jpg";
import theObservatoryPodcast from "/src/assets/images/podcasts/cover/the-observatory-podcast.jpg";
import wellMadePodcast from "/src/assets/images/podcasts/cover/wellmade-podcast.jpg";
import invisiblePodcast from "/src/assets/images/podcasts/cover/99-invisible-podcast.png";
import honestDesignersShowPodcast from "/src/assets/images/podcasts/cover/honest-designers-show-podcast.png";
import obsessedWithDesignPodcast from "/src/assets/images/podcasts/cover/obsessed-with-design-podcast.png";
import theBusyCreatorPodcast from "/src/assets/images/podcasts/cover/the-busy-creator-podcast.png";
import DNFMPodcast from "/src/assets/images/podcasts/cover/dn-fm.jpg";
import overtime from "/src/assets/images/podcasts/cover/overtime.jpg";

const Podcasts = () => (
	<Layout>
		<Head>
			<meta charset="utf-8" />
			<title>Design Podcasts | Designed.org</title>
			<meta name="keywords" content="#" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			<meta name="author" content="Designed.org" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta
				name="description"
				content="We empower the designers of tomorrow through educational tools and mentoring."
			/>
			<meta property="fb:app_id" content="230314244163874" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Designed.org" />
			<meta name="twitter:url" content="https://designed.org" />
			<meta
				name="twitter:description"
				content="We empower the designers of tomorrow through educational tools and mentoring."
			/>
			<meta name="twitter:site" content="@joindesigned" />
			<meta name="twitter:creator" content="@joindesigned" />
			<meta name="twitter:image" content="#" />

			<meta property="og:type" content="article" />
			<meta property="og:title" content="Designed.org" />
			<meta
				property="og:description"
				content="We empower the designers of tomorrow through educational tools and mentoring."
			/>
			<meta property="og:url" content="https://designed.org" />
			<meta property="og:site_name" content="Designed.org" />
			<meta property="og:image" content="#" />
		</Head>
		<div className="header-wrapper">
			<div className="header-content">
				<h1>Design Podcasts</h1>
				<p>
					A curated library of audio brain food that will{" "}
					<strong>educate and inspire</strong> all designers who dare to listen.
				</p>
			</div>
		</div>
		<div className="console-new pod">
			<div className="podcasts">
				<div className="podcast-featured">
					<div className="featured-banner-wrapper">
						<Image
							loader={imageLoader}
							src={featuredPodcast}
							layout="fill"
							objectFit="cover"
							className="featured-banner"
						/>
						<div className="podcast-cover">
							<Image
								loader={imageLoader}
								src={theFuturPodcast}
								layout="fill"
								objectFit="cover"
								className="podcast-cover"
							/>
						</div>
					</div>
					<h5 className="mb-4">Weekly Spotlight</h5>
					<h3>The Futur</h3>
					<h4 className="mb-2">Chris Do</h4>
					<p className="mb-3">
						Candid conversations with the most interesting and inspirational
						people that you’ve never heard of. Host, Chris Do, interviews people
						from all walks of life about the fringes of design, technology,
						marketing and business all in hopes of changing the way you think.
					</p>
					<a
						className="button primary"
						href="https://podcasts.apple.com/us/podcast/the-futur/id1209219220?mt=2?utm_source=designed&utm_medium=organic"
						target="_blank"
					>
						Learn More
					</a>
				</div>
				<div className="app-section">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<h5>Trending</h5>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-4 col-md-6 col-12">
								<a
									href="https://itunes.apple.com/us/podcast/design-matters-with-debbie-millman/id328074695?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="row featured-slot">
										<div className="col-md-4">
											<div className="podcast-cover">
												<Image
													loader={imageLoader}
													src={designMattersPodcast}
													layout="fill"
													objectFit="cover"
													className="podcast-container"
												/>
											</div>
										</div>
										<div className="col-md-8">
											<span className="podcast-title">Design Matters</span>
											<span className="podcast-author">Design Observer</span>
											<p className="podcast-summary">
												Design Matters with Debbie Millman is one of the world’s
												very first podcasts. Broadcasting independently for over
												14...
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="col-xl-4 col-md-6 col-12">
								<a
									href="https://podcasts.apple.com/ca/podcast/grits-x-grids-podcast/id1151185302?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="row featured-slot">
										<div className="col-md-4">
											<div className="podcast-cover">
												<Image
													loader={imageLoader}
													src={gritsAndGridsPodcast}
													layout="fill"
													objectFit="cover"
													className="podcast-container"
												/>
											</div>
										</div>
										<div className="col-md-8">
											<span className="podcast-title">
												Grits & Grids® Podcast
											</span>
											<span className="podcast-author">Grits & Grids</span>
											<p className="podcast-summary">
												Hosted by Joseph Szala, restaurant and beverage branding
												expert and principal of Vigor, GXG hosts small talk
												over...
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="col-xl-4 col-md-6 col-12">
								<a
									href="https://podcasts.apple.com/us/podcast/creative-south-podcast/id1081610301?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="row featured-slot">
										<div className="col-md-4">
											<div className="podcast-cover">
												<Image
													loader={imageLoader}
													src={feastingOnDesignPodcast}
													layout="fill"
													objectFit="cover"
													className="podcast-container"
												/>
											</div>
										</div>
										<div className="col-md-8">
											<span className="podcast-title">Feasting on Design</span>
											<span className="podcast-author">Jason Frostholm</span>
											<p className="podcast-summary">
												Design influences the world around us every day. We chat
												with designers, illustrators, photographers, and
												other...
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="col-xl-4 col-md-6 col-12">
								<a
									href="https://podcasts.apple.com/us/podcast/well-made/id1110562334?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="row featured-slot">
										<div className="col-md-4">
											<div className="podcast-cover">
												<Image
													loader={imageLoader}
													src={wellMadePodcast}
													layout="fill"
													objectFit="cover"
													className="podcast-container"
												/>
											</div>
										</div>
										<div className="col-md-8">
											<span className="podcast-title">Well Made</span>
											<span className="podcast-author">Lumi</span>
											<p className="podcast-summary">
												The people and ideas behind your favorite online brands.
												Hosted by Stephan Ango, co-founder of Lumi.com
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="col-xl-4 col-md-6 col-12">
								<a
									href="https://podcasts.apple.com/podcast/the-honest-designers-show/id1203778895?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="row featured-slot">
										<div className="col-md-4">
											<div className="podcast-cover">
												<Image
													loader={imageLoader}
													src={honestDesignersShowPodcast}
													layout="fill"
													objectFit="cover"
													className="podcast-container"
												/>
											</div>
										</div>
										<div className="col-md-8">
											<span className="podcast-title">
												The Honest Designers Show
											</span>
											<span className="podcast-author">Design Cuts</span>
											<p className="podcast-summary">
												Are you a designer struggling to find your way in the
												modern world? Learn how to make a dent in the
												creative...
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="col-xl-4 col-md-6 col-12">
								<a
									href="https://dribbble.com/overtime?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="row featured-slot">
										<div className="col-md-4">
											<div className="podcast-cover">
												<Image
													loader={imageLoader}
													src={overtime}
													layout="fill"
													objectFit="cover"
													className="podcast-container"
												/>
											</div>
										</div>
										<div className="col-md-8">
											<span className="podcast-title">Overtime</span>
											<span className="podcast-author">Dribbble</span>
											<p className="podcast-summary">
												Overtime, Dribbble's weekly podcast, explores the most
												interesting design news and gives you the tips you...
											</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="app-section">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<h5>Sponsors</h5>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3 col-6">
								<div className="sponsor-slot">
									<span>Become a sponsor!</span>
									<a className="learn" href="/our-donors">
										Learn More
									</a>
								</div>
							</div>
							<div className="col-md-3 col-6">
								<div className="sponsor-slot">
									<span>Become a sponsor!</span>
									<a className="learn" href="/our-donors">
										Learn More
									</a>
								</div>
							</div>
							<div className="col-md-3 col-6">
								<div className="sponsor-slot">
									<span>Become a sponsor!</span>
									<a className="learn" href="/our-donors">
										Learn More
									</a>
								</div>
							</div>
							<div className="col-md-3 col-6">
								<div className="sponsor-slot">
									<span>Become a sponsor!</span>
									<a className="learn" href="/our-donors">
										Learn More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="app-section">
					<div className="container-fluid">
						<h5>Explore</h5>
						<div className="row">
							<div className="col-md-9 col-6">
								<h6 className="design">Design</h6>
								<ul className="list-col-4">
									<a href="#">
										<li>Architecture</li>
									</a>
									<a href="#">
										<li>Interior Design</li>
									</a>
									<a href="#">
										<li>Landscape Design</li>
									</a>
									<a href="#">
										<li>Industrial Design</li>
									</a>
									<a href="#">
										<li>Business Architecture</li>
									</a>
									<a href="#">
										<li>Fashion Design</li>
									</a>
									<a href="#">
										<li>Engineering Design</li>
									</a>
									<a href="#">
										<li>Software Design</li>
									</a>
									<a href="#">
										<li>User Interface Design</li>
									</a>
									<a href="#">
										<li>Scenic Design</li>
									</a>
									<a href="#">
										<li>Motion Design</li>
									</a>
									<a href="#">
										<li>Graphic Design</li>
									</a>
									<a href="#">
										<li>Information Architecture</li>
									</a>
									<a href="#">
										<li>Game Design</li>
									</a>
									<a href="#">
										<li>User Experience</li>
									</a>
									<a href="#">
										<li>Lighting Design</li>
									</a>
									<a href="#">
										<li>Sound Design</li>
									</a>
								</ul>
							</div>

							<div className="col-md-3 col-6">
								<h6>Industry</h6>
								<ul className="list-col-2">
									<a href="#">
										<li>Product</li>
									</a>
									<a href="#">
										<li>Business</li>
									</a>
									<a href="#">
										<li>Leadership</li>
									</a>
									<a href="#">
										<li>Startup</li>
									</a>
									<a href="#">
										<li>Marketing</li>
									</a>
									<a href="#">
										<li>Tech</li>
									</a>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="app-section">
					<h5>Library</h5>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://itunes.apple.com/us/podcast/design-matters-with-debbie-millman/id328074695?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={designMattersPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">
										Design Matters with Debbie Millman
									</span>
									<span className="podcast-author">Design Observer</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/us/podcast/creative-south-podcast/id1081610301?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={feastingOnDesignPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">Feasting on Design</span>
									<span className="podcast-author">Jason Frostholm</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/ca/podcast/grits-x-grids-podcast/id1151185302?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={gritsAndGridsPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">Grits & Grids</span>
									<span className="podcast-author">Grits & Grids® Podcast</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/us/podcast/revision-path/id834173190?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={revisionPathPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">Revision Path</span>
									<span className="podcast-author">Glitch, Inc.</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/us/podcast/logo-geek-the-logo-design-branding-podcast/id762790918?mt=2#?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={theBusinessOfArchitecturePodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">
										The Business of Architecture
									</span>
									<span className="podcast-author">Enoch Sears</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://itunes.apple.com/us/podcast/design-matters-with-debbie-millman/id328074695?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={theLogoGeekPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">The Logo Geek Podcast</span>
									<span className="podcast-author">Ian Paget</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/us/podcast/the-observatory/id947128216?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={theObservatoryPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">The Observatory</span>
									<span className="podcast-author">Design Observer</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/us/podcast/the-futur/id1209219220?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={theFuturPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">The Futur</span>
									<span className="podcast-author">Chris Do</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/us/podcast/well-made/id1110562334?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={wellMadePodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">Well Made</span>
									<span className="podcast-author">Lumi</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/us/podcast/99-invisible/id394775318?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={invisiblePodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">99% Invisible</span>
									<span className="podcast-author">Radiotopia</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/podcast/the-honest-designers-show/id1203778895?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={honestDesignersShowPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">
										The Honest Designers Show
									</span>
									<span className="podcast-author">Design Cuts</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/us/podcast/obsessed-with-design/id1088398598?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={obsessedWithDesignPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">Obsessed Show</span>
									<span className="podcast-author">Josh Miles</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://podcasts.apple.com/us/podcast/busy-creator-podcast-prescott-perez-fox-conversations/id816956921?mt=2?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={theBusyCreatorPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">The Busy Creator Podcast</span>
									<span className="podcast-author">
										Prescott Perez-Fox & friends
									</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://www.designernews.co/podcast?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={DNFMPodcast}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">DN FM</span>
									<span className="podcast-author">Designer News</span>
								</a>
							</div>
							<div className="col-md-2 col-sm-4 col-6">
								<a
									className="podcast-item"
									href="https://dribbble.com/overtime?utm_source=designed&utm_medium=organic"
									target="_blank"
								>
									<div className="podcast-cover">
										<Image
											loader={imageLoader}
											src={overtime}
											layout="fill"
											objectFit="cover"
											className="podcast-container"
										/>
									</div>
									<span className="podcast-name">Overtime</span>
									<span className="podcast-author">Dribbble</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default Podcasts;
