import React from "react";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "./utilities/imageLoader";
import {
	TOP_NAV_DISCOVER_SCHEME,
	TOP_NAV_LEARN_MORE_SCHEME,
	TOP_NAV_MENTORS_SCHEME,
} from "../constants/footer-nav";
import { locale } from "../constants/locales";

// import logo from "../images/logo-mobile.svg";
import logo from "../assets/images/logo-mobile.svg";

function Footer({ siteTitle }) {
	return (
		<footer>
			<div className="platform-footer">
				<div className="platform-footer-wrapper">
					<div className="platform-footer-top">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-6">
									<div className="footer-logo">
										<Image
											loader={imageLoader}
											layout="fill"
											src={logo}
											alt="logo"
										/>
									</div>
									<h2>
										We are the only 501(c)(3) charity building a diverse design
										community and platform of educational tools and mentoring.
									</h2>
								</div>
								<div className="col-md-2">
									<ul className="footer-list">
										<li className="footer-header">{locale.DISCOVER}</li>
										{Object.keys(TOP_NAV_DISCOVER_SCHEME).length &&
											TOP_NAV_DISCOVER_SCHEME.map((item) => (
												<li key={item.name}>
													<Link href={item.to}>
														<a>{item.name}</a>
													</Link>
												</li>
											))}
									</ul>
								</div>
								<div className="col-md-2">
									<ul className="footer-list">
										<li className="footer-header">{locale.MENTORS}</li>
										{Object.keys(TOP_NAV_MENTORS_SCHEME).length &&
											TOP_NAV_MENTORS_SCHEME.map((item) => (
												<li key={item.name}>
													<Link key={item.name} href={item.to}>
														<a>{item.name}</a>
													</Link>
												</li>
											))}
									</ul>
								</div>
								<div className="col-md-2">
									<ul className="footer-list">
										<li className="footer-header">{locale.LEARN_MORE}</li>
										{Object.keys(TOP_NAV_LEARN_MORE_SCHEME).length &&
											TOP_NAV_LEARN_MORE_SCHEME.map((item) => (
												<li key={item.name}>
													{item.external ? (
														<a href={item.to}>{item.name}</a>
													) : (
														<Link key={item.name} href={item.to}>
															<a>{item.name}</a>
														</Link>
													)}
												</li>
											))}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="platform-footer-bottom">
						<div className="container-fluid">
							<div className="row mb-3">
								<div className="col-md-12">
									<a href="http://facebook.com/joindesigned" target="_blank">
										<svg
											role="img"
											viewBox="0 0 24 24"
											className="footer-social-icon"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Facebook</title>
											<path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
										</svg>
									</a>
									<a href="http://twitter.com/joindesigned" target="_blank">
										<svg
											role="img"
											viewBox="0 0 24 24"
											className="footer-social-icon"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Twitter</title>
											<path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
										</svg>
									</a>
									<a href="http://instagram.com/joindesigned" target="_blank">
										<svg
											role="img"
											className="footer-social-icon"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Instagram</title>
											<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
										</svg>
									</a>
									<a
										href="https://www.linkedin.com/company/joindesigned/"
										target="_blank"
									>
										<svg
											role="img"
											viewBox="0 0 24 24"
											className="footer-social-icon"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>LinkedIn</title>
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
										</svg>
									</a>
									<a href="http://medium.com/designed" target="_blank">
										<svg
											svg
											role="img"
											viewBox="0 0 24 24"
											className="footer-social-icon"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z" />
										</svg>
									</a>
									<a href="http://pinterest.com/joindesigned" target="_blank">
										<svg
											role="img"
											viewBox="0 0 24 24"
											className="footer-social-icon"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Pinterest</title>
											<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
										</svg>
									</a>
									<a href="http://youtube.com/DesignedTV" target="_blank">
										<svg
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											className="footer-social-icon"
											viewBox="0 0 24 24"
										>
											<title>YouTube</title>
											<path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
										</svg>
									</a>
									<a href="http://dribbble.com/designed" target="_blank">
										<svg
											role="img"
											viewBox="0 0 24 24"
											className="footer-social-icon"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Dribbble</title>
											<path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
										</svg>
									</a>
									<a href="http://producthunt.com/designed" target="_blank">
										<svg
											role="img"
											viewBox="0 0 24 24"
											className="footer-social-icon"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Product Hunt</title>
											<path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z" />
										</svg>
									</a>
									<a
										href="https://join.slack.com/t/designedorg/shared_invite/enQtODg1MzUyNjQ2MjA4LTg2MzZlNzZmODBmOTllZWQ5ZTk1NjgzZWQ2YTBiY2QxZDFmNTBiNGU1ZjM1YTlkZmM2MjQzNjMxYjRkYzM0ZjY"
										target="_blank"
									>
										<svg
											role="img"
											viewBox="0 0 24 24"
											className="footer-social-icon"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Slack</title>
											<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
										</svg>
									</a>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<p className="small uppercase mb-5">
										<a href="/legal/code-of-conduct/">Code of Conduct</a>
										<span className="footer-separator">•</span>
										<a href="/legal/privacy-policy/">Privacy Policy</a>
										<span className="footer-separator">•</span>
										<a href="/legal/terms-of-service/">Terms of Service</a>
									</p>
									<div className="languageSelector">
										<div
											data-component="CountrySwitcher"
											data-props='{"mirrorUrl":"https://uk.charitywater.org","ukCurrencyFullName":"Pound sterling","ukFlagIconUrl":"https://d26p6gt0m19hor.cloudfront.net/assets/icons/uk-flag-d76fa02971fc1c313b22005a0616e2b8.svg","usCurrencyFullName":"United States dollar","usFlagIconUrl":"https://d26p6gt0m19hor.cloudfront.net/assets/icons/us-flag-562473448c9c2a6a506b855fd2a08a9a.svg"}'
											id="c819bd7ea4cd1e0672448b86b11bc143"
										>
											<div
												className="input-wrapper country-f mb-0"
												data-reactroot=""
											>
												<div className="hide">
													<span className="flag"></span>
													<select
														className="country-footer pl-3"
														name="country"
													>
														<option value="us">English</option>
														<option value="uk">Español</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-md-12">
									© 2017-2021 | Designed, Inc. (Formerly Design Mentors, Inc.),
									is a US based 501(c)(3) public charity, EIN 82-2806653.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
