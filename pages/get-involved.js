import React from "react";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import Layout from "/src/layouts/main";

const GetInvolved = () => (
	<Layout>
		<Head>
			<meta charset="utf-8" />
			<title>Get Involved | Designed.org</title>
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
					<h1>Get Involved</h1>
					<p>
						Designed is the fastest growing 501(c)(3) non-profit focused on
						providing design education resources and mentors. We have already
						help thousands of designers, of every background and all over the
						world be empowered to pursue a career in design!
					</p>
				</div>
			</div>
		</div>
		<div className="new-section">
			<div className="wrapper">
				<div className="container small mb-s">
					<h2>Interested to Volunteer?</h2>

					<p className="mt-3 mb-3">
						Are you passionate about helping grow and educate the design
						community, but haven't been able to find a way to get involved? Look
						no further, we are looking for passionate people to volunteer time
						to help in the areas listed below! Whether you can contribute one
						hour a week, or 10+ you play a pivotal part in helping us turn
						Designed.org into a vital resource for the future of design.{" "}
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
					<h3 className="ta-c mt-4 mb-3">
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
	</Layout>
);

export default GetInvolved;
