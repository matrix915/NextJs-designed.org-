import React from "react";
import { Link } from "next";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import Layout from "/src/layouts/main";
import header from "/src/assets/images/hero/world.svg";

const About = () => (
	<Layout>
		<Head>
			<meta charset="utf-8" />
			<title>About | Designed.org</title>
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
									<h1>Our Mission is simple.</h1>
									<p>
										We empower the designers of tomorrow through educational
										tools and mentoring. We are the only{" "}
										<strong>501(c)(3) non-profit</strong> building a career
										growth platform focused on designers.
									</p>
								</div>
							</div>
							<div className="col-xl-6 col-lg-5 col-md-12">
								<div className="illustration">
									<Image loader={imageLoader} src={header} layout="fill" />
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
			<div className="container small">
				<h4 className="mt-l tt-u ta-c header-title">Our Vision</h4>
				<h1 className="mb-s ta-c">
					Be the global career growth platform for designers and design
					leadership.
				</h1>
				<h4 className="mt-l mb-s tt-u ta-c header-title">Our Values</h4>

				<div className="value left">
					<h2>01:EDUCATE</h2>
					<div className="panel">
						<p>We prioritize opportunities to teach and grow.</p>
					</div>
				</div>
				<div className="value right">
					<h2>02:EMPATHIZE</h2>
					<div className="panel">
						<p>We approach every interaction with empathy and humility.</p>
					</div>
				</div>
				<div className="value left">
					<h2>03:EMPOWER</h2>
					<div className="panel">
						<p>
							We recognize that we all have the capacity to motivate and
							inspire.
						</p>
					</div>
				</div>
				<div className="value right">
					<h2>04:EQUIP</h2>
					<div className="panel">
						<p>
							We develop and provide the most relevant and innovative tools and
							resources.
						</p>
					</div>
				</div>
				<div className="value left">
					<h2>05:EVOLVE</h2>
					<div className="panel">
						<p>
							We will responsibly prepare the next generation of design leaders.
						</p>
					</div>
				</div>
				<hr className="mt-l mb-l" />
			</div>
			<div className="container small">
				<h2 className="mt-l mb-s ta-c">
					<strong>Meet Our Managing Director</strong>
					<br /> Sara Vilas
				</h2>
				<div className="managing-director">
					<Image
						loader={imageLoader}
						layout="fill"
						objectFit="cover"
						alt="Sara"
						className="managing-director"
						src="https://media-exp1.licdn.com/dms/image/C5603AQGsn64YTkPvQA/profile-displayphoto-shrink_800_800/0/1565190925043?e=2147483647&v=beta&t=hgykwoyIqkXJ_gtaGVrqJf_s7vIwK4M5rcjcb7SWrQQ"
					/>
				</div>
				<p>
					International Operations for Community and Design Education at Canva -
					Ensuring that our Creators program scales smoothly all around the
					globe Enterprise Design via Toptal.com - Keeping my design background
					hands-on by working with amazing clients for enterprise product design
					Design Mentor at Designlab - Mentoring entry-level designers for 6+
					months{" "}
				</p>
				<br />
				<h4>SOME THINGS I DO:</h4>
				<p>
					I turn chaos into clarity (the more chaotic, the better!) set up and
					evaluate processes and metrics, establish and grow teams, design
					products, mentor/coach product designers, manage performance (from a
					few to 400+), hold quality standards, and ultimately empower others to
					leverage the power of design.
				</p>
				<br />
				<br />
				<div className="free-box">
					<a
						className="button primary center  mt-l"
						href="https://medium.com/designed/new-year-new-adventures-61454de663f6"
						target="_blank"
					>
						Read Her Welcome Letter
					</a>
					<hr className="mt-l mb-l" />
				</div>
			</div>
			<div className="container small">
				<h2 className="mt-l mb-s ta-c">Our Board of Directors</h2>
				<p className="mb-s">
					We are a group of long time designers that are passionate about
					helping grow and educate the design community. While there are any
					great independent resources scattered about, there is no place
					dedicated to help educate and inform those looking to entire the
					design field. It is our goal to make this community-based app a
					premiere educational resource for designers to network and have a
					central repository of career opportunities, events and much more.{" "}
				</p>
			</div>

			<div className="container grid">
				<section className="cards">
					<article className="card">
						<div className="circle">
							<Image
								loader={imageLoader}
								layout="fill"
								alt="Todd Zaki Warfel"
								className="avatar x-large"
								src={
									"https://pbs.twimg.com/profile_images/1262579873073127425/A16_ZRaL_400x400.jpg"
								}
							/>
						</div>
						<div className="card-content web-card">
							<h3>Todd Zaki Warfel</h3>
							<p className="title">
								<span className="title-header">
									Leadership Coach @{" "}
									<a href="http://zakiwarfel.com/" target="_blank">
										ZWA
									</a>
								</span>
								San Mateo, California
							</p>
							<p className="mt-s about">
								Author, design executive, father, disciple, adventurous foodie,
								wine and scotch enthusiast, amateur furniture maker.
							</p>
							<div className="meta">
								<div className="site">
									<div className="left">Website:</div>
									<div className="right">
										<a href="http://zakiwarfel.com/" target="blank">
											http://zakiwarfel.com
										</a>
									</div>
								</div>
								<div className="site">
									<div className="left">Email:</div>
									<div className="right">
										<a href="mailto:zaki@designed.org">zaki@designed.org</a>
									</div>
								</div>
								<div className="site">
									<div className="left">Twitter:</div>
									<div className="right">
										<a href="http://twitter.com/zakiwarfel" target="_blank">
											@zakiwarfel
										</a>
									</div>
								</div>
							</div>
						</div>
					</article>
					<article className="card">
						<div className="circle">
							<Image
								alt="This Could be YOU"
								className="avatar x-large"
								loader={imageLoader}
								layout="fill"
								src="https://vignette.wikia.nocookie.net/gameofthrones/images/6/63/QueenSansa.PNG/revision/latest/top-crop/width/360/height/360?cb=20190520085809"
							/>
						</div>
						<div className="card-content web-card">
							<h3>Your Name Here</h3>
							<p className="title">
								<span className="title-header">House Stark</span>
								Winterfell
							</p>
							<p className="mt-s about">
								We are looking to add more members to our board! Please reach
								out to{" "}
								<a href="mailto:support@designed.org">support@designed.org</a>{" "}
								and we will get in touch!
							</p>
							<div className="meta">
								<div className="site">
									<div className="left">Website:</div>
									<div className="right">
										<a href="http://winterfell.com/" target="blank">
											http://winterfell.com
										</a>
									</div>
								</div>
								<div className="site">
									<div className="left">Email:</div>
									<div className="right">
										<a href="mailto:support@designed.org">name@got.com</a>
									</div>
								</div>
								<div className="site">
									<div className="left">Twitter:</div>
									<div className="right">
										<a href="http://twitter.com/joindesigned" target="_blank">
											@winterfellGOT
										</a>
									</div>
								</div>
							</div>
						</div>
					</article>
				</section>
			</div>

			<div className="container small">
				<hr className="mt-l mb-l" />
				<h2 className="mt-l mb-s">Our Contributors</h2>
				<p className="mb-s">
					A non-profit organization is only as good as the volunteers it is able
					to recruit to donate their time to help build our vision. We have been
					incredibly fortunate to find volunteers all over the world that want
					to support the mission and vision of Designed. Below are some of the
					integral members that have made signficant contributions to our
					platform!
				</p>

				<h4 className="mb-s mt-m">Founders Club</h4>
				<div className="row founders">
					<div className="col-md-4">
						<div className="founder">
							<div className="avatar-medium">
								<Image
									loader={imageLoader}
									layout="fill"
									alt="Tobi"
									className="avatar-medium"
									src="https://pbs.twimg.com/profile_images/628588587886362624/-qF-5A12_400x400.jpg"
								/>
							</div>
							<div className="metadata">
								<p>
									<a href="http://www.tobias-meixner.com/" target="_blank">
										Tobi Meixner
									</a>
									<span className="contributor-title">Platform Architect</span>
								</p>
							</div>
						</div>
						<div className="founder">
							<div className="avatar-medium">
								<div className="avatar-medium">
									<Image
										loader={imageLoader}
										layout="fill"
										alt="Tess"
										className="avatar-medium"
										src="https://pbs.twimg.com/profile_images/1269657927746551809/h1GGYFkA_400x400.jpg"
									/>
								</div>
							</div>
							<div className="metadata">
								<p>
									<a href="http://www.bradleyg.com/" target="_blank">
										Bradley Gabr-Ryn
									</a>
									<span className="contributor-title">Product Designer</span>
								</p>
							</div>
						</div>
						<div className="founder">
							<div className="avatar-medium">
								<Image
									loader={imageLoader}
									layout="fill"
									alt="Tess"
									className="avatar-medium"
									src="https://pbs.twimg.com/profile_images/1269657927746551809/h1GGYFkA_400x400.jpg"
								/>
							</div>
							<div className="metadata">
								<p>
									<a href="https://darumacreative.com/" target="_blank">
										Tatiana Bischak
									</a>
									<span className="contributor-title">Illustrator</span>
								</p>
							</div>
						</div>
						<div className="founder">
							<div className="avatar-medium">
								<Image
									loader={imageLoader}
									layout="fill"
									alt="Tess"
									className="avatar-medium"
									src="https://pbs.twimg.com/profile_images/1269657927746551809/h1GGYFkA_400x400.jpg"
								/>
							</div>
							<div className="metadata">
								<p>
									<a href="https://www.peterbooty.com/" target="_blank">
										Peter Chung
									</a>
									<span className="contributor-title">Product Designer</span>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="founder">
							<div className="avatar-medium">
								<Image
									loader={imageLoader}
									layout="fill"
									alt="Tess"
									className="avatar-medium"
									src="https://pbs.twimg.com/profile_images/1269657927746551809/h1GGYFkA_400x400.jpg"
								/>
							</div>
							<div className="metadata">
								<p>
									<a
										href="https://www.linkedin.com/in/stevendschneider/"
										target="_blank"
									>
										Steven Schneider
									</a>
									<span className="contributor-title">Compliance Attorney</span>
								</p>
							</div>
						</div>
						<div className="founder">
							<div className="avatar-medium">
								<Image
									loader={imageLoader}
									layout="fill"
									alt="Tess"
									className="avatar-medium"
									src="https://pbs.twimg.com/profile_images/1269657927746551809/h1GGYFkA_400x400.jpg"
								/>
							</div>
							<div className="metadata">
								<p>
									<a href="http://ladderstrategy.com" target="_blank">
										Michelle Douglas
									</a>
									<span className="contributor-title">Brand Strategist</span>
								</p>
							</div>
						</div>
						<div className="founder">
							<div className="avatar-medium">
								<Image
									loader={imageLoader}
									layout="fill"
									alt="Tess"
									className="avatar-medium"
									src="https://pbs.twimg.com/profile_images/1269657927746551809/h1GGYFkA_400x400.jpg"
								/>
							</div>
							<div className="metadata">
								<p>
									<a href="http://jaj.io" target="_blank">
										John Jackson
									</a>
									<span className="contributor-title">Product Designer</span>
								</p>
							</div>
						</div>
						<div className="founder">
							<div className="avatar-medium">
								<Image
									loader={imageLoader}
									layout="fill"
									alt="Tess"
									className="avatar-medium"
									src="https://pbs.twimg.com/profile_images/1269657927746551809/h1GGYFkA_400x400.jpg"
								/>
							</div>
							<div className="metadata">
								<p>
									<a href="https://dribbble.com/madebyrw2" target="_blank">
										Russell Wyatt
									</a>
									<span className="contributor-title">Product Designer</span>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="founder">
							<div className="avatar-medium">
								<Image
									loader={imageLoader}
									layout="fill"
									alt="Tess"
									className="avatar-medium"
									src="https://pbs.twimg.com/profile_images/1269657927746551809/h1GGYFkA_400x400.jpg"
								/>
							</div>
							<div className="metadata">
								<p>
									<a
										href="https://www.linkedin.com/in/tezzica/"
										target="_blank"
									>
										Tess Fuqua
									</a>
									<span className="contributor-title">Community & Design</span>
								</p>
							</div>
						</div>
						<div className="founder">
							<div className="avatar-medium">
								<Image
									loader={imageLoader}
									layout="fill"
									alt="Tess"
									className="avatar-medium"
									src="https://pbs.twimg.com/profile_images/1269657927746551809/h1GGYFkA_400x400.jpg"
								/>
							</div>
							<div className="metadata">
								<p>
									<a href="https://twitter.com/tyler_WAIN" target="_blank">
										Tyler Wain
									</a>
									<span className="contributor-title">Product Designer</span>
								</p>
							</div>
						</div>
						<div className="founder">
							<div className="avatar-medium">
								<Image
									loader={imageLoader}
									layout="fill"
									alt="Tess"
									className="avatar-medium"
									src="https://pbs.twimg.com/profile_images/1269657927746551809/h1GGYFkA_400x400.jpg"
								/>
							</div>
							<div className="metadata">
								<p>
									<a href="http://ranliudesign.github.io/" target="_blank">
										Ran Liu
									</a>
									<span className="contributor-title">Product Designer</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
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

export default About;
