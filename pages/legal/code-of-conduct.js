import React from "react";
import { Link } from "next";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import Layout from "/src/layouts/main";

// Page Images
import logoSlack from "/src/assets/images/logos/logo-slack.svg";

const CodeOfConduct = () => (
	<Layout>
		<Head>
			<meta charset="utf-8" />
			<title>Designed.org - Code of Conduct</title>
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
			<div className="header-wrapper">
				<div className="header-content">
					<h1>Code of Conduct</h1>
					<p>
						We building a global movement of designers who want to grow, that
						requires us to all do our part and respect each other at all times.
					</p>
				</div>
			</div>
			<div className="console-new pod">
				<div className="container xlarge legal-stuff">
					<section>
						<h5 className="mt-2 mb-3">Updated March 20, 2020</h5>
						<h3 className="mb-3">
							Our mission is to empower the designers of tomorrow through
							educational tools and mentoring. We are the only 501(c)(3)
							non-profit building an educational platform focused on providing
							equal-opportunity resources to designers globally.
						</h3>
						<p>
							Designed includes an extremely diverse group people from a wide
							range of cultures, languages, and experiences around the world.
							This is a strength and an opportunity for all of us to learn.
							Please ask and explore, with an eye towards improved understanding
							and connection.
						</p>
						<p>
							We require a certain level of human behavior to keep Designed a
							welcoming, growing, respectful, safe, and civil platform
							community. Harassment, hate, fear mongering, or similar behavior
							will not be allowed. Any such actions will be dealt with quickly
							and decisively. Refusal to comply with guidance from a Community
							Manager or Admin will result in being banned.
						</p>
						<h3 className="mb-2">Goals</h3>
						<p>
							Design thrives when the designer is open to understanding the
							needs and situations of others. Designed exists so that we can
							practice that with each other, as well as share knowledge,
							experience, training, resources, and advice. This is a place where
							people can become better designers and contribute to a better
							world.
						</p>
						<p>
							To learn more about our mission, vision, and values, head over to
							our <a href="/about">about page</a>.
						</p>
						<h3 className="mb-2">Encouraged Behavior</h3>
						<p>
							Even though it’s impossible to outline all the positive models and
							guidance for how we hope everyone will behave, here is a
							non-comprehensive list of some principles we hope to encourage and
							see in participants.
						</p>
						<ul>
							<li>
								Be Inclusive: A person is a person, with a right to exist and to
								expect to be treated with respect.
							</li>
							<li>
								Be Respectful While Giving and Receiving Feedback: Direct and
								constructive feedback is helpful. Being mean isn't. Give
								insight, not judgement. Everybody is learning. Listen if there’s
								a negative response to your words.
							</li>
							<li>
								Practice the Principle of Charity: In conversations, assume the
								other speaker’s words come from a place of rationality,
								compassion, and good intent.
							</li>
							<li>
								Be Humble: We value expertise, but we also know that we grow in
								expertise by listening.
							</li>
							<li>
								Ask &amp; Listen: Ask when you need to know something, and
								listen to the answers.
							</li>
							<li>
								Educate: Hear what’s being asked and share what you know for the
								asker’s benefit, not to promote yourself.
							</li>
							<li>
								Do Not Take Advantage: Though participants are committed to
								educating and helping, please be aware that this does not extend
								to others doing your work for you, or others being a resource
								for your personal or professional profit.
							</li>
							<li>
								Grow Personally and Professionally: This community is a great
								place to practice the values we promote in our work.
							</li>
							<li>
								Connect: We encourage everyone to get to know everyone.
								Encountering and accepting people from around the world can make
								us better.
							</li>
							<li>
								Be Nice: Before you react, think about how you’d feel to receive
								the comment you’re about to give.
							</li>
						</ul>
						<h3 className="mb-2">Unacceptable Behavior</h3>
						<ul>
							<li>
								Harassment: Simply put, we will not tolerate it. Harassment
								includes but is not limited to:
								<ul>
									<li>
										Negative comments based on race, sex, sexuality, gender,
										nationality, neurotypicality, political affiliation,
										physical appearance, home life or history, disability — and
										remember that it’s not up to the speaker to dispute what is
										or isn’t offensive
									</li>
									<li>Threats of violence, physical or virtual</li>
									<li>
										Unwelcome sexual actions, insinuations, attentions, or
										remarks
									</li>
									<li>Attempts at intimidation</li>
									<li>Publishing personally identifying information</li>
									<li>
										Patronizing, microaggressive, or other belittling comments
									</li>
								</ul>
							</li>
							<li>
								Disruption: Continued digressions, disruptions, and derailing of
								someone’s conversation when asked not to. This is up to
								moderator’s interpretation.
							</li>
							<li>
								Intolerance: In addition to what has been listed under
								Harassment, this can include (but is not limited to)
								blacklisting or freezing out other members, demonstration of
								unwillingness to listen to someone due to any or other
								characteristics as listed above.
							</li>
							<li>
								Spamming: Do not post ads or promotions for your
								company/product/project/etc. Do not try to sell things, recruit
								customers, or harvest personal information.
							</li>
						</ul>
						<h3>Grievance Process / Actions to Remedy</h3>
						<p>
							If you see or have experienced any unacceptable behavior, please
							contact a moderator as soon as you can via direct message. A
							moderator will let you know they’ve received your message, though
							be aware a response may not be immediate. (Responses are often
							decided after discussion among moderators.) To view the list of
							moderators, type !mods in the #_support channel. This also sends
							an alert to all moderators.
						</p>
						<p>
							By default, a report or complaint will be kept anonymous to the
							community, though shared among moderators; if you want to remain
							anonymous to moderators other than the one you file a report with,
							please make that explicit in your initial report. In either case,
							we will not name reporters without consent, and even then try to
							avoid any mention of a reporter.
						</p>
						<h3>Consequences</h3>
						<p>
							If a Community Manager contacts you and asks you to stop certain
							behavior, do so immediately. Failure to do so may result in the CM
							banning you, at their discretion.
						</p>
						<p>
							If your behavior has drawn attention that requires a CM contacting
							you, be aware that this will be remembered. Repeating the behavior
							that incurs warnings will result in banning.
						</p>
						<p>
							If you have been warned, then call out or personally attack
							another member whom you think reported you, you will be banned.
						</p>
						<p>Being banned is not up for appeal. Please, be nice.</p>
					</section>
				</div>
			</div>
			<div className="call-to-action slack">
				<div className="call-to-action-container">
					<div className="logo-slack">
						<Image
							src={logoSlack}
							alt="Slack Logo"
							loader={imageLoader}
							layout="fill"
						/>
					</div>
					<h3>JOIN OUR SLACK COMMUNITY</h3>
					<h5>
						Join our fast-growing platform community of 10k+ designers around
						the world to chat about design trends, your upcoming interview, how
						to work remote, or simply build your tribe of designer compadres.
					</h5>
					<div className="form-container">
						<div class="container-fluid">
							<div className="row">
								<div className="col-md-8">
									<form noValidate className="form-input">
										<input
											id="slack-email"
											type="email"
											placeholder="email@example.com"
										/>
									</form>
								</div>
								<div className="col-md-4">
									<a
										name="post-opportunity"
										className="button primary full-width"
										target="_blank"
										href="https://join.slack.com/t/designedorg/shared_invite/enQtODg1MzUyNjQ2MjA4LTg2MzZlNzZmODBmOTllZWQ5ZTk1NjgzZWQ2YTBiY2QxZDFmNTBiNGU1ZjM1YTlkZmM2MjQzNjMxYjRkYzM0ZjY"
									>
										Apply Today!
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

export default CodeOfConduct;
