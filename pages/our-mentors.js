import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NumberFormat from "react-number-format";
import Head from "next/head";
import Layout from "/src/layouts/main";
import Select from "react-select";
import { experiences } from "/src/constants/experiences";
import { languages } from "/src/constants/languages";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
	USER_COUNTRIES,
	USER_TOPICS,
	USER_TIMEZONES,
	USER_LANGUAGES,
} from "/data/queries/users";
import { ALL_MENTORS } from "/data/queries/mentors";

// Page Images
import { useRouter } from "next/router";
import Pagination from "/src/components/utilities/pagination";

const VARIABLE = "allMentors";

const OurMentors = () => {
	const router = useRouter();
	const query = router.query;
	const [getMentors, { data, error, loading }] = useLazyQuery(ALL_MENTORS);
	const { data: topicList, error: topicError, loading: topicLoading } = useQuery(USER_TOPICS);
	const { data: countryList, error: countryError, loading: countryLoading } = useQuery(USER_COUNTRIES);
	const { data: languageList, error: languageError, loading: languageLoading } = useQuery(USER_LANGUAGES);
	const { data: timezoneList, error: timezoneError, loading: timezoneLoading } = useQuery(USER_TIMEZONES);

	const allMentors = data ? data.user_profiles : [];
	const totalCount = data ? data.user_profiles_aggregate.aggregate.count : 0;

	const perPage = 10;
	const totalPage = data
		? parseInt(totalCount / perPage) + (totalCount % perPage ? 1 : 0)
		: 1;

	const [firstLoad, setFristLoad] = useState(false);	
	const [countrylist, setCountryList] = useState([]);
	const [topiclist, setTopicsList] = useState([]);
	const [timezonelist, setTimezonelist] = useState([]);
	const [languagelist, setLanguagelist] = useState([]);
	const [filterGender, setFilterGender] = useState("");
	const [filterCountry, setFilterCountry] = useState("");
	const [filterExperience, setFilterExperience] = useState("");
	const [filterTimezone, setFilterTimezone] = useState("");
	const [filterLanguage, setFilterLanguage] = useState([]);
	const [filterTopics, setFilterTopics] = useState([]);

	useLayoutEffect(() => {
		router.push({ pathname: "/our-mentors" });
	}, []);

	useEffect(() => {
		topicList?.user_profiles_aggregate?.nodes?.map((element) => {
			element?.topics?.length > 0 &&
				element?.topics?.map((val) => {
					if (!topiclist?.some((x) => x?.value === val)) {
						topiclist.push({ label: val, value: val });
					}
				});
		});
		countryList?.user_profiles_aggregate?.nodes?.map((element) => {
			if (
				!countrylist?.some((x) => x?.value === element?.country) &&
				element?.country !== null
			) {
				countrylist.push({ label: element?.country, value: element?.country });
			}
		});
		languageList?.user_profiles_aggregate?.nodes?.map((element) => {
			element?.languages?.length > 0 &&
				element?.languages?.map((val) => {
					if (!languagelist?.some((x) => x?.value === val) && val !== null) {
						languagelist.push({
							label: languages?.find((x) => x?.value === val)?.label
								? languages?.find((x) => x?.value === val)?.label
								: val,
							value: val,
						});
					}
				});
		});
		timezoneList?.user_profiles_aggregate?.nodes?.map((element) => {
			if (
				!timezonelist?.some((x) => x?.value === element?.timezone) &&
				element?.timezone !== null
			) {
				timezonelist.push({
					label: element?.timezone,
					value: element?.timezone,
				});
			}
		});
		getMentors({
			variables: {
				country: filterCountry,
				gender: filterGender,
				years_of_experience: filterExperience,
				timezone: filterTimezone,
				languages: filterLanguage,
				topics: filterTopics,
				from: perPage * ((query.page ? query.page : 1) - 1),
				to: perPage,
			},
		});
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		if (allMentors.length > 0) {
			setFristLoad(true);
		}
	}, [
		query, filterGender, filterTimezone, filterCountry, filterExperience, filterLanguage, filterTopics,
		topicList?.user_profiles_aggregate?.nodes,
		countryList?.user_profiles_aggregate?.nodes,
		languageList?.user_profiles_aggregate?.nodes,
		timezoneList?.user_profiles_aggregate?.nodes,
	]);

	const handleTopics = (e) => {
		router.push({
			query: {
				...query,
				topic: e?.value,
				page: 1,
			},
		});
	};

	const HandleReset = (e) => {
		e.preventDefault();
		selectTopicsRef.clearValue();

		router.push({
			pathname: "/our-mentors/",
		});
	};

	return (
		<Layout>
			<Head>
				<meta charset="utf-8" />
				<title>Design Mentors | Designed.org</title>
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
			<div className="portfolio">
				<div className="portfolio-header">
					<div className="breadcrumb-wrapper">
						<div className="breadcrumb">
							<Link href="/">
								<a>
									<svg
										class="flex-shrink-0 h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
									</svg>
								</a>
							</Link>
							<span>
								<svg
									class="flex-shrink-0 h-5 w-5 text-gray-500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									></path>
								</svg>
							</span>
							<div className="d-ib">Our Mentors</div>
						</div>
					</div>
				</div>
			</div>
			<div className="console-new">
				<div className="left-rail hide-tablet">
					<div className="section small-margin">
						<div className="filter-header horizontal-menu">
							<h4 className="fw-b">Filters</h4>
							<a href="/our-mentors" className="button link f-r">
								Reset
							</a>
						</div>
						<div className="filter-section horizontal-menu hide">
							<h5 className="mb-3">Scheduling</h5>
							<label className="control control--checkbox ">
								Book Online
								<input type="checkbox" name="genderradio" selected />
								<div className="control__indicator"></div>
							</label>
						</div>
						<div className="filter-section horizontal-menu mb-3">
							<div className="filter-section horizontal-menu mb-3">
								<h5 className="mb-2">Topics</h5>
								<Select
									name="job_type"
									classNamePrefix="react-select"
									placeholder="Choose a topic"
									options={topiclist}
									onChange={(e) => setFilterTopics([e?.value])}
									
								/>
							</div>
						</div>
						<div className="filter-section horizontal-menu mb-3">
							<div className="filter-section horizontal-menu mb-3">
								<h5 className="mb-2">Country</h5>
								<Select
									name="job_type"
									classNamePrefix="react-select"
									placeholder="Choose a Country"
									options={countrylist}
									onChange={(e) => setFilterCountry(e?.value)}
								/>
							</div>
						</div>
						<div className="filter-section horizontal-menu mb-3">
							<div className="filter-section horizontal-menu mb-3">
								<h5 className="mb-2">Languages</h5>
								<Select
									name="job_type"
									classNamePrefix="react-select"
									placeholder="Choose a Languages"
									options={languagelist}
									onChange={(e) => setFilterLanguage([e?.value])}
								/>
							</div>
						</div>

						<div className="filter-section horizontal-menu mb-3">
							<div className="filter-section horizontal-menu mb-3">
								<h5 className="mb-2">Timezone</h5>
								<Select
									name="job_type"
									classNamePrefix="react-select"
									placeholder="Choose a Timezone"
									options={timezonelist}
									onChange={(e) => setFilterTimezone(e?.value)}
								/>
							</div>
						</div>
						<div className="filter-section horizontal-menu ">
							<h5 className="mb-2">Experience Level</h5>
							<Select
								name="job_type"
								classNamePrefix="react-select"
								placeholder="Choose a Experience"
								options={experiences}
								onChange={(e) => setFilterExperience(e?.value)}
							/>
						</div>
						<div className="filter-section horizontal-menu mt-2">
							<h5 className="mb-3">Gender</h5>
							<label className="control control--radio">
								Female
								<input
									type="radio"
									name="genderradio"
									value="Female"
									onChange={() => setFilterGender("Female")}
								/>
								<div className="control__indicator"></div>
							</label>
							<label className="control control--radio">
								Male
								<input
									type="radio"
									name="genderradio"
									onChange={() => setFilterGender("Male")}
								/>
								<div className="control__indicator"></div>
							</label>
							<label className="control control--radio">
								Non-binary
								<input
									type="radio"
									name="genderradio"
									onChange={() => setFilterGender("Non-binary")}
								/>
								<div className="control__indicator"></div>
							</label>
						</div>
					</div>
					<div className="section small-margin">
						<h4 className="mb-2">Our Sponsors</h4>
						<div className="sponsor-slot small">
							<span>Become a sponsor!</span>
							<a className="learn" href="/our-donors">
								Learn More
							</a>
						</div>
						<div className="sponsor-slot small">
							<span>Become a sponsor!</span>
							<a className="learn" href="/our-donors">
								Learn More
							</a>
						</div>
						<div className="sponsor-slot small">
							<span>Become a sponsor!</span>
							<a className="learn" href="/our-donors">
								Learn More
							</a>
						</div>
					</div>
					<div className="section" id="mc_embed_signup">
						<h4>Newsletter</h4>
						<p>
							Get signed up for our monthly newsletter and don't miss a thing!
						</p>
						<form
							action="https://designed.us16.list-manage.com/subscribe/post?u=e2732d19be0d7808db3a28996&amp;id=27c9439e82"
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							className="validate"
							target="_blank"
							noValidate
						>
							<div className="form-input">
								<input
									type="email"
									autoComplete="off"
									name="EMAIL"
									id="mce-EMAIL"
									placeholder="Enter your email"
									required
								/>
							</div>
							<input
								type="submit"
								value="Subscribe"
								name="subscribe"
								id="mc-embedded-subscribe"
								className="button primary full-width"
							></input>
						</form>
					</div>
					<div className="section last-section donate">
						<h4>Donate</h4>
						<p>
							Did you know Designed is a 501(c)(3) non-profit charity? With your
							donation, we can continue to provide equal opportunity resources
							to aspiring designers across the world.
						</p>
						<a
							name="post-opportunity"
							className="button donate full-width custom-dbox-popup"
							target="_blank"
							href="https://donorbox.org/designed"
						>
							Donate Today!
						</a>
					</div>
				</div>
				<div className="right-window new-header">
					<div className="fixed-content big career">
						{loading ? (
							<SkeletonTheme>
								<h5 className="light mt-1 mb-4">
									<Skeleton count={1} width="150px" height="30px" />
								</h5>
							</SkeletonTheme>
						) : (
							<>
								<h4 className="mt-2 mb-3 d-ib">{
								<NumberFormat
									value={data?.user_profiles_aggregate?.aggregate?.count || "-"}
									displayType="text"
									thousandSeparator={true}
								/>
								} Mentors</h4>
							</>
						)}

						<div className="mentor-list">
							{loading ? (
								<SkeletonTheme>
									<ul>
										{new Array(7).fill(1).map((item, index) => (
											<li
												className="container-fluid job-item"
												key={"skeleton:" + index}
											>
												<div>
													<div className="w-1/4 inline-block align-middle">
														<Skeleton
															count={1}
															width={220}
															height={300}
															style={{ borderRadius: "1.5rem" }}
														/>
													</div>
													<div className="w-3/4 inline-block align-middle">
														<Skeleton
															className="mb-2"
															count={1}
															width="200px"
															height={35}
														/>
														<Skeleton
															className="mb-2"
															count={1}
															width="150px"
															height={25}
														/>
														<div className="flex items-center mb-3">
															<Skeleton
																className="mr-2"
																count={1}
																width={100}
																height={45}
																style={{ borderRadius: "2rem" }}
															/>
															<Skeleton
																className="mr-2"
																count={1}
																width={100}
																height={45}
																style={{ borderRadius: "2rem" }}
															/>
															<Skeleton
																className="mr-2"
																count={1}
																width={100}
																height={45}
																style={{ borderRadius: "2rem" }}
															/>
														</div>
														<Skeleton
															className="mb-2"
															count={3}
															width="100%"
															height={17}
														/>
														<Skeleton
															className="mt-3"
															count={1}
															width={150}
															height={50}
														/>
													</div>
												</div>

												<Skeleton
													className="mt-4 mb-4"
													count={1}
													width="100%"
													height={1}
												/>
											</li>
										))}
									</ul>
								</SkeletonTheme>
							) : allMentors.length > 0 ? (
								allMentors.map((item, index) => (
									<div className="mentor" key={"mentor" + index}>
										<div className="image-container">
											<div className="mentor-profile-image">
												<Image
													loader={imageLoader}
													layout="fill"
													className="mentor-profile-image"
													objectFit="cover"
													src={`${item.avatar_url}`}
													alt={`${item.first_name} Profile Image`}
												/>
											</div>
										</div>
										<div className="mentor-card-profile">
											<h2>
												{item?.first_name} {item?.last_name}
											</h2>
											<h3>{item.job_title} at {item.job_employer} </h3>

											<ul className="mentor-tags">
												{item?.topics?.map((item) => (
													<li>{item}</li>
												))}
											</ul>
											<p>{item.about}</p>
											<Link href={`/mentors/${item?.username}`}>
												<a className="button primary mt-3">View Profile</a>
											</Link>
										</div>
									</div>
								))
							) : (
								firstLoad && (
									<h2>Sorry, no mentors match your search</h2>
								)
							)}
						</div>
						<br />
						<br />
						{(totalCount > perPage && allMentors?.length === perPage) ||
						query.page > 1 ? (
							<Pagination totalPage={totalPage} />
						) : (
							""
						)}
						<br />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default OurMentors;
