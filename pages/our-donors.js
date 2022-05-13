import React from "react";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import Layout from "/src/layouts/main";

//Page Images
import aws from "/src/assets/images/logos/aws.png";
import github from "/src/assets/images/logos/github.png";
import google from "/src/assets/images/logos/google.png";
import segment from "/src/assets/images/logos/segment.png";
import slack from "/src/assets/images/logos/slack.png";
import dribbble from "/src/assets/images/logos/dribbble.svg";
import figma from "/src/assets/images/logos/figma.svg";
import sentry from "/src/assets/images/logos/sentry.svg";
import header from "/src/assets/images/hero/donors.svg";

const OurDonors = () => (
	<Layout>
		<Head>
			<meta charset="utf-8" />
			<title>Our Donors | Designed.org</title>
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
		<div className="website new-nav">
			<div className="app-page-header webby large">
				<div className="app-page-header-wrapper">
					<div className="container-fluid header-panel">
						<div className="row">
							<div className="col-xl-6 col-lg-7 col-md-12 header-info-wrapper">
								<div className="header-info">
									<h1>Our Donors</h1>
									<p>
										In-kind donations from our donors and partners allow
										Designed to pursue our mission to provide educational
										resources and access to mentors around the world.
									</p>
								</div>
							</div>
							<div className="col-xl-6 col-lg-5 col-md-12">
								<div className="illustration">
									<Image src={header} loader={imageLoader} layout="fill" />
									<div className="author-credit">
										<a
											href="http://dribbble.com/DarumaCreative"
											target="_blank"
										>
											<strong>Credit</strong> Undraw
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container small mb-m mt-5">
				<p>
					In-kind donations from our donors and partners allow Designed to
					pursue our mission to provide educational resources and access to
					mentors around the world. We are deeply grateful for those who have
					surprised us with their generosity. A big thanks to the following
					companies and people who have helped make Designed’s work possible:
				</p>
			</div>

			<div className="container small mb-m">
				<h4 className="mb-s">
					<strong>Major Product Donors</strong>
				</h4>
				<div className="container-fluid">
					<div className="row mb-s">
						<div className="col-md-4">
							<a href="https://aws.amazon.com/" target="_blank">
								<div className="donor-card">
									<div className="donorImage">
										<Image
											src={aws}
											loader={imageLoader}
											layout="fill"
											objectFit="contain"
										/>
									</div>
									<span className="service">Infrastructure</span>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="https://gsuite.google.com" target="_blank">
								<div className="donor-card">
									<div className="donorImage">
										<Image
											src={google}
											loader={imageLoader}
											layout="fill"
											objectFit="contain"
										/>
									</div>
									<span className="service">Biz Tools / Advertising</span>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="https://github.com" target="_blank">
								<div className="donor-card">
									<div className="donorImage">
										<Image
											src={github}
											loader={imageLoader}
											layout="fill"
											objectFit="contain"
										/>
									</div>
									<span className="service">Code/Collaboration</span>
								</div>
							</a>
						</div>
					</div>
					<div className="row mb-s">
						<div className="col-md-4">
							<a href="https://slack.com" target="_blank">
								<div className="donor-card">
									<div className="donorImage">
										<Image
											src={slack}
											loader={imageLoader}
											layout="fill"
											objectFit="contain"
										/>
									</div>
									<span className="service">Team Communication</span>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="https://segment.io" target="_blank">
								<div className="donor-card">
									<div className="donorImage">
										<Image
											src={segment}
											loader={imageLoader}
											layout="fill"
											objectFit="contain"
										/>
									</div>
									<span className="service">Analytics</span>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="https://sentry.io" target="_blank">
								<div className="donor-card">
									<div className="donorImage">
										<Image
											src={sentry}
											loader={imageLoader}
											layout="fill"
											objectFit="contain"
										/>
									</div>
									<span className="service">Bug Tracking</span>
								</div>
							</a>
						</div>
					</div>
					<div className="row mb-s">
						<div className="col-md-4">
							<a href="https://dribbble.com" target="_blank">
								<div className="donor-card">
									<div className="donorImage">
										<Image
											src={dribbble}
											loader={imageLoader}
											layout="fill"
											objectFit="contain"
										/>
									</div>
									<span className="service">Team Design</span>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="https://figma.com" target="_blank">
								<div className="donor-card">
									<div className="donorImage">
										<Image
											src={figma}
											loader={imageLoader}
											layout="fill"
											objectFit="contain"
										/>
									</div>
									<span className="service">Design Tools</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="container small">
				<h4 className="ta-c mt-l mb-s">
					<strong>Interested in getting your company involved?</strong>
				</h4>
				<div className="free-box">
					<a
						className="button primary center"
						href="mailto:donate@designed.org"
					>
						LEARN MORE
					</a>
				</div>
			</div>

			{/* <div className="container small">
				<hr className="mt-l mb-l" />
				<h4 className="mb-s">
					<strong>Personal Donors</strong>
				</h4>
				<p>Coming soon...</p>
			</div>
			<div className="container small">
				<h4 className="ta-c mt-l mb-s">
					<strong>
						Interested in making a personal tax-deductible donation?
					</strong>
				</h4>
				<div className="free-box">
					<a
						className="button primary center"
						href="https://www.paypal.com/us/fundraiser/charity/2703219"
						target="_blank"
					>
						DONATE NOW
					</a>
				</div>
			</div> */}

			<div className="container small mb-s">
				<hr className="mt-l mb-l" />
				<h2 className="mt-l mb-s">Interested to Volunteer?</h2>

				<p>
					Are you passionate about helping grow and educate the design
					community, but haven't been able to find a way to get involved? Look
					no further, we are looking for passionate people to volunteer time to
					help in the areas listed below! Whether you can contribute one hour a
					week, or 10+ you play a pivotal part in helping us turn Designed.org
					into a vital resource for the future of design.{" "}
				</p>

				<div className="container-fluid">
					<div className="row mt-m">
						<div className="col-sm-12 col-md-6">
							<h4>• Web Designers</h4>
							<h4>• Identity/Brand Designers</h4>
							<h4>• UX & Product Designers</h4>
							<h4>• Art Directors</h4>
						</div>
						<div className="col-sm-12 col-md-6">
							<h4>• Researchers</h4>
							<h4>• Marketing / Social Media Managers</h4>
							<h4>• Community Managers</h4>
							<h4>• Full-stack Engineers</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="container small mt-l">
				<h3 className="ta-c mb-s">
					<strong>Are you ready to get involved?</strong>
				</h3>
				<div className="free-box">
					<a
						className="button primary center"
						href="http://s.designed.org/2Yygt35"
						target="_blank"
					>
						Apply to Volunteer!
					</a>
				</div>
			</div>
		</div>
	</Layout>
);

export default OurDonors;
