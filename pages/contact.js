import React from "react";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import Layout from "/src/layouts/main";

//Page Images
import header from "/src/assets/images/hero/contact.svg";

const Contact = () => (
	<Layout>
		<Head>
			<meta charset="utf-8" />
			<title>Contact | Designed.org</title>
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
									<h1>Contact Designed</h1>
									<p>
										We would love to hear from you, our friendly staff and
										volunteers are ready to take your questions. Reach out
										below.
									</p>
								</div>
							</div>
							<div className="col-xl-6 col-lg-5 col-md-12">
								<div className="illustration">
									<Image loader={imageLoader} src={header} layout="fill" />
									<div className="author-credit">
										<a href="http:/undraw.co" target="_blank">
											<strong>Credit</strong> Undraw
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container large">
				<div className="row ta-c">
					<div className="col-md-4">
						<h2 className="mt-l mb-s ta-c">Email</h2>
						<p className="mb-s">
							Don't hesitate to shoot us an email to{" "}
							<a href="mailto:support@designed.org">support@designed.org</a> if
							you have any questions, or need help with navigating our platform.
						</p>
					</div>
					<div className="col-md-4">
						<h2 className="mt-l mb-s ta-c">Phone</h2>
						<p className="mb-s">
							You can reach us at <a href="tel:978-769-2555">(978) 769-2555</a>.
							We aren't always available to pickup the phone so leave a
							voicemail!
						</p>
					</div>
					<div className="col-md-4">
						<h2 className="mt-l mb-s ta-c">Chat</h2>
						<p className="mb-s">
							If you look down in the lower right hand of the browser you will
							see a pink chat bubble, let's chat if you need help!{" "}
						</p>
					</div>
				</div>
				<div className="row mt-4 ta-c">
					<div className="col-md-12">
						<h4 className="mb-3">
							Want to send us some cool swag or a donation by mail?{" "}
							<a href="mailto:support@designed.org">Email Us</a>
						</h4>
					</div>
				</div>
			</div>
			<div className="container small mb-s">
				<hr className="mt-l mb-l" />
				<h2 className="mt-l mb-s ta-c">Interested to Volunteer?</h2>

				<p className="ta-c">
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

export default Contact;
