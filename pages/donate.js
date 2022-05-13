import React from "react";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import Layout from "/src/layouts/main";

//Page Images
import amazonSmile from "/src/assets/images/logos/donations/amazon-smile.png";
import patreon from "/src/assets/images/logos/donations/patreon.jpg";
import paypal from "/src/assets/images/logos/donations/paypal.gif";
import donorbox from "/src/assets/images/logos/donations/donorbox.png";
import every from "/src/assets/images/logos/donations/every.png";

const Donate = () => (
	<Layout>
		<Head>
			<meta charset="utf-8" />
			<title>Donate Today | Designed.org</title>
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
		<div className="app-discuss">
			<div className="app-discuss-wrapper">
				<div className="discuss-header">
					<h1>Donate Today!</h1>
					<p>
						Designed is the fastest growing 501(c)(3) non-profit focused on
						providing design education resources and mentors. We count on you,
						our amazing community to make donations so we can continue to build
						the platform!
					</p>
				</div>
			</div>
		</div>
		<div className="new-section">
			<div className="wrapper">
				<div className="container small mb-s">
					<h2>Check out the many ways to Donate!</h2>

					<p className="mt-3 mb-3">
						Are you passionate about helping grow and educate the design
						community, but haven't been able to find a way to get involved? Look
						no further, we are looking for passionate people to volunteer time
						to help in the areas listed below! Whether you can contribute one
						hour a week, or 10+ you play a pivotal part in helping us turn
						Designed.org into a vital resource for the future of design.{" "}
					</p>
					<p className="call-out ta-c">
						<strong>
							Designed, Inc. (Formerly Design Mentors, Inc.), is a US based
							501(c)(3) public charity, and our EIN is 82-2806653.
						</strong>{" "}
						<br /> All donations made in the United States are tax-deductible!
					</p>

					<div className="simple-card-2 mt-4 mb-4">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-3">
									<div className="imageDonor svg-padding">
										<Image src={every} loader={imageLoader} />
									</div>
								</div>
								<div className="col-md-9">
									<h3 className="mb-3">Every.org</h3>
									<p>
										Why use every.org? Well besides the fact they are also an
										amazing 501(c)(3), it's easy — you can manage all your
										giving in one place, get one tax receipt at the end of the
										year, and never forget about a recurring donation.
									</p>
									<a
										className="button primary mt-3"
										href="https://s.designed.org/3iLdmgT"
										target="_blank"
									>
										Donate Now!
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="simple-card-2 mt-4 mb-4">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-3">
									<div className="imageDonor">
										<Image src={donorbox} loader={imageLoader} />
									</div>
								</div>
								<div className="col-md-9">
									<h3 className="mb-3">DonorBox</h3>
									<p>
										PayPal offers Designed discounted transaction rates for
										501(c)(3) charities for most products, and consistently low
										rates for all other nonprofits. The best thing of all, even
										if you don't have a Paypal account, they will still let you
										make a donation!
									</p>
									<a
										className="button primary mt-3"
										href="https://s.designed.org/2H5CtcZ"
										target="_blank"
									>
										Donate Now!
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="simple-card-2 mt-4 mb-4">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-3">
									<div className="imageDonor">
										<Image src={paypal} loader={imageLoader} />
									</div>
								</div>
								<div className="col-md-9">
									<h3 className="mb-3">Paypal</h3>
									<p>
										PayPal offers Designed discounted transaction rates for
										501(c)(3) charities for most products, and consistently low
										rates for all other nonprofits. The best thing of all, even
										if you don't have a Paypal account, they will still let you
										make a donation!
									</p>
									<a
										className="button primary mt-3"
										href="https://s.designed.org/2w4R8mF"
										target="_blank"
									>
										Donate Now!
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="simple-card-2 mt-4 mb-4">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-3">
									<div className="imageDonor svg-padding">
										<Image src={patreon} loader={imageLoader} />
									</div>
								</div>
								<div className="col-md-9">
									<h3 className="mb-3">Patreon</h3>
									<p>
										Patreon powers membership businesses for creators by giving
										them the tools they need to acquire, manage, and energize
										their paying patrons. This is an amazing way to make a
										donation commitment to Designed.org, every dollar counts and
										we can't do it without you!
									</p>
									<a
										className="button primary mt-3"
										href="https://s.designed.org/3bqbOp0"
										target="_blank"
									>
										Become a patron!
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="simple-card-2 mt-4 mb-4">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-3">
									<div className="imageDonor svg-padding">
										<Image src={amazonSmile} loader={imageLoader} />
									</div>
								</div>
								<div className="col-md-9">
									<h3 className="mb-3">Amazon Smile</h3>
									<p>
										AmazonSmile is a website operated by Amazon with the same
										products, prices, and shopping features as Amazon.com. The
										difference is that when you shop on AmazonSmile, the
										AmazonSmile Foundation will donate 0.5% of the purchase
										price of eligible products to Designed.org!
									</p>
									<a
										className="button primary mt-3"
										href="https://s.designed.org/3bnqGEY"
										target="_blank"
									>
										Signup for Amazon Smile!
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="new-section">
					<div className="wrapper">
						<div className="container small">
							<h3>Interested to Volunteer?</h3>
							<p className="mt-3 mb-4">
								Are you passionate about helping grow and educate the design
								community, but haven't been able to find a way to get involved?
								Look no further, we are looking for passionate people to
								volunteer time to help in the areas listed below! Whether you
								can contribute one hour a week, or 10+ you play a pivotal part
								in helping us turn Designed.org into a vital resource for the
								future of design.{" "}
							</p>
							<div className="container-fluid">
								<div className="row">
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
						<div className="container small">
							<h3 className="ta-c mt-5 mb-4">
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
				</div>
			</div>
		</div>
	</Layout>
);

export default Donate;
