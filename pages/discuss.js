import React from "react";
import { Link } from "next";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import Layout from "/src/layouts/main";

const Discuss = () => (
	<Layout>
		<Head>
			<meta charset="utf-8" />
			<title>Design Discussions | Designed.org</title>
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
					<h1 className="mt-6">
						Join the Designed Slack discussion, the first global design
						education nonprofit platform and community
					</h1>
					<p>
						Discuss current design trends, chat about your upcoming interview,
						or simply build your tribe of designer friends. After signing up for
						a free Designed.org account, you will gain access to our Slack
						community, and join our <span>10k+</span> users around the world!
					</p>
					<a
						name="post-opportunity"
						className="button primary center mt-5"
						href="https://s.designed.org/3blCIOE"
						target="_blank"
					>
						Create Free Slack Account <span className="ml-1">&#8594;</span>
					</a>
				</div>
			</div>
		</div>
		<div className="new-section">
			<div className="wrapper">
				<h3 className="mb-2">Design Community Discussions</h3>
				<p className="mb-4 short-paragraph">
					We know the Designed Slack channel isn't the only place to chat about
					design, below is a list of other amazing Slack, Facebook, Discord, and
					Linkedin Groups that you should check out!
				</p>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<div className="slack-logo">
											<Image
												loader={imageLoader}
												className="slack-logo"
												layout="fill"
												src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb3a303f59523274be1322b_315182589863_f36e6a001d08ececabe0_230.png"
											/>
										</div>
									</div>
									<div className="col-md-10">
										<h3>Animation at Work</h3>
									</div>
								</div>
								<p>
									Become a part of our animation community: Join the
									conversation and meet other web animation and UI animation
									folks like you!
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Animation</li>
										<li>Public</li>
										<li>Free</li>
									</ul>
									<a
										className="discuss-join-link"
										fref="http://damp-lake-50659.herokuapp.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<div className="slack-logo">
											<Image
												loader={imageLoader}
												className="slack-logo"
												layout="fill"
												src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf7bb76c54edd0d4a11755_126164400308_47a605546bc64362812b_132.jpg"
											/>
										</div>
									</div>
									<div className="col-md-10">
										<h3>Better Web Type</h3>
									</div>
								</div>
								<p>
									Better Web Type is a web typography course/community for web
									designers and web developers. Join to see what's new in the
									world of web typography, from cool fonts to tutorials and
									everyday type geek chats.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Typography</li>
										<li>Public</li>
										<li>Free</li>
										<li>12k users</li>
									</ul>
									<a
										className="discuss-join-link"
										fref="https://slofile.com/slack/betterwebtype"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<div className="slack-logo">
											<Image
												loader={imageLoader}
												className="slack-logo"
												layout="fill"
												src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb1c201f623cb64cbb6bc39_584906677507_022beca0b5f25a686fc2_132.png"
											/>
										</div>
									</div>
									<div className="col-md-10">
										<h3>BetterUX Community</h3>
									</div>
								</div>
								<p>
									A design community of people + ideas. Hosts the weekly uxchat
									and regular BetterUX events and is free to join.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience (UX)</li>
										<li>Public</li>
										<li>Free</li>
									</ul>
									<a
										className="discuss-join-link"
										fref="https://betterux.community/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<div className="slack-logo">
											<Image
												loader={imageLoader}
												className="slack-logo"
												layout="fill"
												src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb1ca56f623cbc66db71c54_Blackformat.svg"
											/>
										</div>
									</div>
									<div className="col-md-10">
										<h3>Blackformat</h3>
									</div>
								</div>
								<p>
									Blackformat is a diverse international collective of
									designers, illustrators, animators, and developers created to
									provide support, share inspiration, receive feedback, and
									encourage healthy discussion of all things design.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Public</li>
										<li>Free</li>
									</ul>
									<a
										className="discuss-join-link"
										href="http://blackformat.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<div className="slack-logo">
											<Image
												loader={imageLoader}
												className="slack-logo"
												layout="fill"
												src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb3a05d6a6e841cebee31c9_2589452-0-UXfavi2.png"
											/>
										</div>
									</div>
									<div className="col-md-10">
										<h3>Boston UX</h3>
									</div>
								</div>
								<p>
									The most active and largest collaborative UX group in Boston.
									We use Slack to stay in touch, help each other and foster
									positive community. UX Boston.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience (UX)</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="http://www.bostonuxarmy.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<div className="slack-logo">
											<Image
												loader={imageLoader}
												className="slack-logo"
												layout="fill"
												src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf936fb8d39c80127b4686_13882539303_60efd818879c3c5ded95_132.jpg"
											/>
										</div>
									</div>
									<div className="col-md-10">
										<h3>Content + UX</h3>
									</div>
								</div>
								<p>
									A community of professionals celebrating content strategy,
									content itself, and its role in the user experience.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Content, User Experience (UX)</li>
										<li>Public</li>
										<li>4k users</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://contentandux.org/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<div className="slack-logo">
											<Image
												loader={imageLoader}
												className="slack-logo"
												layout="fill"
												src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb1b56309c4ef95feadc200_favicon.ico.png"
											/>
										</div>
									</div>
									<div className="col-md-10">
										<h3>Design Gigs for Good</h3>
									</div>
								</div>
								<p>
									Design Gigs for Good is a free community-driven resource to
									help more people use the tools of design to create positive
									social change.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Content, User Experience (UX)</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://www.designgigsforgood.org/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://designleaders.team/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_placeholder-512.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Design Leaders</h3>
									</div>
								</div>
								<p>
									Design Leaders is the place for experienced and practising
									design leaders to come together and level-up one another.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Leadership</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://designleaders.team/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://designleadership.io/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb07794203ab369b0ce3bad_cropped-favicon-white-1-1-192x192.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Design Leadership</h3>
									</div>
								</div>
								<p>
									The fastest growing design leadership community focused on
									people building & leading design teams, forging cross
									functional alliances , and shaping a design culture within
									their organization.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Leadership</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://designleadership.io/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a
											href="https://www.designdept.co/community"
											target="_blank"
										>
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb076525b8c1c7e07345769_favicon.ico.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Design Leadership Community</h3>
									</div>
								</div>
								<p>
									Whether it’s requesting feedback on career ladders or asking
									for advice on performance management challenges, we’re here
									for you. We’re leveling up our industry, together.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Design Leadership</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://www.designdept.co/community"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a
											href="https://docs.google.com/forms/d/e/1FAIpQLSeKT_LC8kKTzJ4JjmgVQVpfl24i1qBkjJ7TYyQcNHL7fBQkYQ/viewform?c=0&w=1"
											target="_blank"
										>
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf771485c94f72f6b56ca9_8715699347_889147dd5059ecf44416_44.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Design Talks</h3>
									</div>
								</div>
								<p>
									We talk about UI/UX Design, Web Design, Illustrations,
									freelancing, Design critiques, give each other feedbacks.
									Learn from others, teach others what you already know.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://docs.google.com/forms/d/e/1FAIpQLSeKT_LC8kKTzJ4JjmgVQVpfl24i1qBkjJ7TYyQcNHL7fBQkYQ/viewform?c=0&w=1"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://www.designops.lol/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb2f74c1e474e02aeb074a5_apple-touch-icon-152x152.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>DesignOps</h3>
									</div>
								</div>
								<p>
									The DesignOps community helps you connect with others, share
									your experiences and level up your craft. The most dangerous
									design meetup in Melbourne.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Design Operations</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://www.designops.lol/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://designed.community/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb351806a6e84d60bec4eec_nb6NEV3o_200x200.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Designed.org</h3>
									</div>
								</div>
								<p>
									The first 501(c)(3) non-profit to build a platform dedicated
									to empowering the designers of tomorrow through educational
									resources, career tools and mentoring!
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://designed.community/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://designx.community/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf589730994e930d12a057_slack-icon.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>DesignX</h3>
									</div>
								</div>
								<p>
									Share, learn and grow with over 3000+ active ux designers,
									service designers, graphic designers, ux researchers from all
									over North America & Europe.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Design Operations</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://designx.community/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://www.designerhangout.co/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf59cf85c94f2109b499bf_206578084145_39aa69fd544736a7d3fa_230.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Design Hangout</h3>
									</div>
								</div>
								<p>
									Designer Hangout is a UX design community. Connect with our UX
									designers and researchers from around the globe.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience</li>
										<li>Public</li>
										<li>12k users</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://www.designerhangout.co/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="http://www.designertalk.co/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf778da0d3e466186cf79c_15874769767_4adb7fa0573e8f91054b_132.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Designer Talk</h3>
									</div>
								</div>
								<p>
									We’re a group of designers continuing the conversation past
									happy hour. Designer Talk is a place to collaborate, discuss
									new products, find work, or get feedback on what you’re
									working on.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Product Design</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="http://www.designertalk.co/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://thedesignership.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf5a5f6af9c85a59e553b2_270411521904_9884ed5f6440562662d8_230.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>The Designership</h3>
									</div>
								</div>
								<p>
									Join our community of creatives. Share, learn and grow with
									over 2,000+ active designers and makers from all over the
									world.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Public</li>
										<li>2k users</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://thedesignership.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://email.geeks.chat/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb1d85a903700cc93cf3718_apple-touch-icon.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Email Geeks</h3>
									</div>
								</div>
								<p>
									Join our community of creatives. Share, learn and grow with
									over 2,000+ active designers and makers from all over the
									world.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Marketing</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://email.geeks.chat/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="#" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_placeholder-512.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Fearless Community</h3>
									</div>
								</div>
								<p>A global design community. Formely known as Candles.</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Invite Only</li>
									</ul>
									<a className="discuss-join-link" href="#" target="_blank">
										Coming Soon
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://www.fenders.co/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb2f87911df0ade46b407f2_Unknown.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Fenders</h3>
									</div>
								</div>
								<p>
									A community for people who love the web! Join us on Slack or
									at one of our events.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Web Design</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://www.fenders.co/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="http://www.frenchdesigners.club/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf77cb6af9c84328e5f5ef_39001641717_d701febf6d37c1a4c36a_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>French Designers Club</h3>
									</div>
								</div>
								<p>
									Dès le départ, la communauté s’est appropriée l’outil Slack
									pour rassembler les designers francophones du monde entier. Le
									French Designers Club, c’est un peu comme la maison des
									designers francophones du monde entier.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="http://www.frenchdesigners.club/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a
											href="https://friendsoffigma.slack.com/join/shared_invite/zt-cwvccimc-cemnI92WUkgt4qU4ZAvePA#/"
											target="_blank"
										>
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb0691fef5980033f95de16_1014271126883_15d4dfb0f1e97fcffa02_230.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Friends of Figma</h3>
									</div>
								</div>
								<p>
									A Slack community with over 1500 Figmates. We talked about
									anything related to Figma, design, remote work, or just about
									anything.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Design Tools</li>
										<li>Public</li>
										<li>1.5k users</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://friendsoffigma.slack.com/join/shared_invite/zt-cwvccimc-cemnI92WUkgt4qU4ZAvePA#/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://gsiuxd.herokuapp.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf78aaabe8f54f6489a49b_514552031793_f7935f8059c4409c7821_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Get Started in UX Design</h3>
									</div>
								</div>
								<p>
									A UX design community in India, driven to spread awareness &
									help new UXers transition into the field & make a place for
									themselves.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience (UX)</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://gsiuxd.herokuapp.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="http://hexagonux.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf58def728bbd7443ad124_favicon.ico.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Hexagon UX</h3>
									</div>
								</div>
								<p>
									Hexagon is a non-profit organization aimed to empower and
									support womxn and non-binary folx in UX through our community,
									events, and mentorship around the world.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience (UX)</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="http://hexagonux.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a
											href="https://slofile.com/slack/indiandesigncommunity"
											target="_blank"
										>
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf7ace30994e472a139741_659955964311_3ee45caa2ca8836eef33_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Indian Design Community</h3>
									</div>
								</div>
								<p>
									We're a group of UI, UX, graphic and product designers based
									in India.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>UX</li>
										<li>UI</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://slofile.com/slack/indiandesigncommunity"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://www.latinxswhodesign.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb2f6f4ce03ef9537365a14_gvh69n30_200x200.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Latinxs Who Design</h3>
									</div>
								</div>
								<p>
									A directory of thriving Latinxs in the design industry. A
									place to find outstanding people to follow, look for a mentor,
									make new friends, or discover talented people to join your
									team.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://www.latinxswhodesign.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://leadingdesign.com/join" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb39fb6fa63c84ffaa34cbf_HEVPHbNr_200x200.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Leading Design</h3>
									</div>
								</div>
								<p>
									A supportive community nurturing design leadership through
									inspiring and engaging events, conferences and retreats.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Leadership</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://leadingdesign.com/join"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="http://midwestdesignchat.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb3a3a660483b58db7b7478_15242987636_59c6a91b11a3db55e56c_68.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Midwest Design Chat</h3>
									</div>
								</div>
								<p>
									MIDWEST DESIGN CHAT is a Slack team for designers in the
									Midwest. Initially inspired by Midwest Dev Chat, this exists
									to help the Midwest connect.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="http://midwestdesignchat.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://www.mixed-methods.org/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf91b7cd1146d2997fe9de_152060249729_6e2bd6210461251a515f_230.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Mixed Methods</h3>
									</div>
								</div>
								<p>
									Mixed Methods is a community interested in the hows and whys
									of user experience research. Through interviews with industry
									experts and hands-on trial and error, we indulge and celebrate
									curiosity.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://www.mixed-methods.org/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://motionslack.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_placeholder-512.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Motion Design Artist</h3>
									</div>
								</div>
								<p>
									The Motion Design Artist slack community is a place for
									professionals to engage in meaningful conversations with one
									another.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Motion Design</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://motionslack.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://nidesignchat.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb2f5eb1e474e9fe6b06336_dPjuZC5l_200x200.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>NI Design Chat</h3>
									</div>
								</div>
								<p>
									A Slack community for designers in Northern Ireland to discuss
									the local design industry, make new connections and get
									feedback.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://nidesignchat.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://nidesignchat.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb2f5eb1e474e9fe6b06336_dPjuZC5l_200x200.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Orlando Designers</h3>
									</div>
								</div>
								<p>
									A Slack community of designers, cultivators, artists, and
									creators from the Orlando area.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://nidesignchat.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://slack.overflow.io/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb1d9be6f301df48e318695_323622244034_236117e49b2d14fb5f95_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Overflow Community</h3>
									</div>
								</div>
								<p>
									A community for Overflow. The world’s first user flow
									diagramming tool tailored for designers. Build and present
									beautiful user flow diagrams that tell a story.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Design Tools</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://slack.overflow.io/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://phase.com/community/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb1da5be6149f41e41499b1_314288580834_031c0b61305285895751_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Phase Community</h3>
									</div>
								</div>
								<p>
									A community for Phase. A tool for designing and prototyping
									websites and apps visually and intuitively, in a new powerful
									product reworked for the digital age.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Design Tools</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://phase.com/community/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://procreator.app/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf7c7e6c54edc2bba119fc_945577718371_5d0d527f40f122e538b8_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Pro - Learn Design</h3>
									</div>
								</div>
								<p>
									We have built a product called Pro that helps people get
									started with design. You can learn different design
									fundamentals from our app. This community is built on the
									similar grounds of sharing and learning.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Design Tools</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://procreator.app/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://www.producthive.org/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb2482ef2d2bf6a49eb2db1_0UbF6p-s_200x200.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Product Hive</h3>
									</div>
								</div>
								<p>
									We are a community of product managers, strategists and
									designers in Utah. We exist to help each other learn,
									contribute, and connect through volunteer-led opportunities.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Product Management</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://www.producthive.org/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://queerdesign.club/slack/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb1b3cebab329714aa63b94_touch.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Queer Design Club</h3>
									</div>
								</div>
								<p>
									The Queer Design Club Slack is a closed space for LGBTQ+
									designers to build community—whether you want to ask other
									queer professionals for job advice, share the inspiration you
									just found, or ask for feedback on your latest project.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://queerdesign.club/slack/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://sddd.org/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf7c2cb41a94a8d1c06dda_454541054786_1f3409527059c62ba515_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>San Diego Digital Designers</h3>
									</div>
								</div>
								<p>
									Online meeting place for digital designers in San Diego to
									meet and greet.Discuss design, get feedback, land jobs, find
									tools, hire designers, commiserate, celebrate.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>General</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://sddd.org/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://www.seoulstartups.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf7a9b30994e3508139569_153454699955_2c98f30490231c4c3e3f_132.jpg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Seoul Startups</h3>
									</div>
								</div>
								<p>
									Seoul Startups is an English-speaking startup community for
									expats and Koreans in Seoul. We are a community of designers,
									developers, marketers and entrepreneurs in Korea.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Startups</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://www.seoulstartups.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a
											href="https://discord.com/invite/eCZUDtH"
											target="_blank"
										>
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb33f1e8038fdf269ec19af_25b2d76ab46c264314392ce96375cccb.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Service Design Club</h3>
									</div>
								</div>
								<p>
									🔎 Consultas, charlas, proyectos y networking 📚 Somos manijas
									del UX y Service Design Súmate a nuestra comunidad en
									Discord!👇🏼
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Service Design</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://discord.com/invite/eCZUDtH"
										target="_blank"
									>
										Join this Discord discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a
											href="https://designmunich.slack.com/join/shared_invite/zt-dqvigqxf-jvD~fWuJl8xgOmc_q3LMGg#/"
											target="_blank"
										>
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_placeholder-512.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Sketch & Design Munich</h3>
									</div>
								</div>
								<p>
									This is a Meetup for designers interested in Sketch. Join us
									here to share knowledge, discover tricks, plugins and new
									workflows or see how others utilise the powerful tool – no
									matter if you are a newbie or a pro.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Design Tools</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://designmunich.slack.com/join/shared_invite/zt-dqvigqxf-jvD~fWuJl8xgOmc_q3LMGg#/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a
											href="https://slofile.com/slack/sketch-app"
											target="_blank"
										>
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf797800e6c6b4d4f4ff8b_237489400258_931a93ad8b17c9435555_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>SketchApp</h3>
									</div>
								</div>
								<p>It is all about UI/UX design and SketchApp software.</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Design Tools</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://slofile.com/slack/sketch-app"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://slackcommunity.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb1d8e9bab3293edfa779fb_Slack_Mark_9BIvOE5.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Slack Community</h3>
									</div>
								</div>
								<p>
									Join this Slack Platform Community group to connect with other
									developers, builders, designers, and product managers who are
									interested in building the future of work. We get together to
									talk about what we’ve built, check out new platform releases,
									and learn from each other.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Productivity Tools</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://slackcommunity.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://triangledesigners.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf7a1cb41a9403d9c0643f_219138776916_91125ebebb46cb2b39d9_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Triangle Designers</h3>
									</div>
								</div>
								<p>
									Triangle Designers is a resource for digital and print
									designers throughout North Carolina’s Triangle to connect and
									inspire one another.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Digital Design</li>
										<li>Print Design</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://triangledesigners.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://uxmastery.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf9336b8d39c96b47b45f5_22132596128_aa61f32d920fd0fe6924_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>UX Mastery</h3>
									</div>
								</div>
								<p>
									We're a community of learners, practitioners, mentors and
									design leaders with a common interest in user experience and
									human-centred design. Together we share and help each other
									grow the skills needed for a successful career in the user
									experience profession.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience (UX)</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://uxmastery.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="http://uxandproduct.com/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb2f7efce03ef030b3660cb_uxandproduct-white-p-500.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>UX & Product Munich</h3>
									</div>
								</div>
								<p>
									Stay in touch with the brightest minds in the UX and Product
									field by joining our Slack workspace
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience (UX)</li>
										<li>Product</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="http://uxandproduct.com/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="http://ux.guide/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf7610cd114601b87f3839_20521642832_fe19c80b307beb3ddeeb_132.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>UX.guide</h3>
									</div>
								</div>
								<p>
									UX.guide is a collection of useful information for people
									interested in User Experience, Product Design, and the general
									art and science of improving the human condition through
									making things of value.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience (UX)</li>
										<li>Public</li>
									</ul>
									<a
										className="discuss-join-link"
										href="http://ux.guide/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a
											href="https://www.surveygizmo.com/s3/4568607/UXPA-Boston-Slack-Invite-Request-Form"
											target="_blank"
										>
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb3a1298038fd3c91ee5353_gyIEm9xD_200x200.jpeg"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>UXPA Boston</h3>
									</div>
								</div>
								<p>
									The Boston Chapter of the User Experience Professionals’
									Association is a highly active community for persons with
									individual and professional interests in usability, user
									experience design, and their many related fields.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience (UX)</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://www.surveygizmo.com/s3/4568607/UXPA-Boston-Slack-Invite-Request-Form"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a
											href="https://docs.google.com/forms/d/e/1FAIpQLSePL0dRncx0hiadfGcvogtTwlZZvpT-M6oe3kRFi1ajwXDZzw/viewform"
											target="_blank"
										>
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eaf952e153c28537a6a35cf_924670466487_63b455ad96495bc3b01d_230.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>UXR Collective</h3>
									</div>
								</div>
								<p>
									The UXR Collective is a small team of people who believe that
									research practitioners have a critical role to play in the
									development of all new experiences and technologies.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience (UX)</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://docs.google.com/forms/d/e/1FAIpQLSePL0dRncx0hiadfGcvogtTwlZZvpT-M6oe3kRFi1ajwXDZzw/viewform"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://uniteddesigners.chat/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb321dce2d2b34d34113413_apple-touch-icon.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>United Designers</h3>
									</div>
								</div>
								<p>
									We are United Designers, a not-for-profit global community of
									over four hundred designers and developers who share a passion
									for creating.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>User Experience (UX)</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://uniteddesigners.chat/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a href="https://witchat.github.io/" target="_blank">
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb321fcf7d1cc33226de572_apple-touch-icon.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>Women in Technology</h3>
									</div>
								</div>
								<p>
									Our group is a safe, confidential space for women who work in
									technology to chat and support each other. Please consider
									joining us whether you are new to the tech industry or you are
									a long-time practitioner.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>Technology</li>
										<li>Invite Only</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://witchat.github.io/"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="slack-card">
								<div className="row">
									<div className="col-md-2">
										<a
											href="https://join.slack.com/t/xr-designworkspace/shared_invite/zt-dwvclof9-EjSFydWntRwtYGHIlJDuqQ"
											target="_blank"
										>
											<div className="slack-logo">
												<Image
													loader={imageLoader}
													className="slack-logo"
													layout="fill"
													src="https://uploads-ssl.webflow.com/5eaf5840f728bb2eb83acecf/5eb071015b8c1cdd093432a6_1104027870804_c5984f33d4e1c309878c_230.png"
												/>
											</div>
										</a>
									</div>
									<div className="col-md-10">
										<h3>XR-Design</h3>
									</div>
								</div>
								<p>
									Our group is a safe, confidential space for women who work in
									technology to chat and support each other. Please consider
									joining us whether you are new to the tech industry or you are
									a long-time practitioner.
								</p>
								<div className="bottom-card">
									<ul className="list-tags">
										<li>AR/VR</li>
										<li>General</li>
									</ul>
									<a
										className="discuss-join-link"
										href="https://join.slack.com/t/xr-designworkspace/shared_invite/zt-dwvclof9-EjSFydWntRwtYGHIlJDuqQ"
										target="_blank"
									>
										Join this Slack discussion
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default Discuss;
