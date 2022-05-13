import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "next";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import dateFormat from "dateformat";
import { useRouter } from "next/router";
import { ALL_JOBS } from "/data/queries/jobs";
import Layout from "/src/layouts/main";
import Select from "react-select";
import { useLazyQuery, useQuery } from "@apollo/client";
import Pagination from "/src/components/utilities/pagination";
import { JOBS_TYPES, JOBS_EXPERIENCE } from "/data/queries/jobs";

const Jobs = () => {
	const router = useRouter();

	const [firstLoad, setFristLoad] = useState(false);
	const [joblists, setJobLists] = useState([]);
	const [typelist, setTypeList] = useState([]);
	const [experiencelist, setExperienceList] = useState([]);
	const [filterType, setFilterType] = useState("");
	const [filterExperience, setFilterExperience] = useState("");
	const [filterLocation, setFilterLocation] = useState("");

	const [getJobs ,{ data, error, loading }] = useLazyQuery(ALL_JOBS);
	const { data: typeList, error: typeError, loading: typeLoading } = useQuery(JOBS_TYPES);
	const { data: experienceList, error: experienceError, loading: experienceLoading } = useQuery(JOBS_EXPERIENCE);

	const query = router.query;
	const allJobs = data ? data?.jobs_listings : [];
	const totalCount = data ? data?.jobs_listings_aggregate?.aggregate?.count : 0;
	const perPage = parseInt(50);
	const totalPage = data
		? parseInt(totalCount / perPage) + (totalCount % perPage ? 1 : 0)
		: 1;

	useEffect(() => {
		typeList?.jobs_listings_aggregate?.nodes?.map((element) => {
			if (!typelist?.some((x) => x?.value === element?.type) && element?.type !== null) {
				typelist.push({ label: element?.type, value: element?.type });
			}
		});
		experienceList?.jobs_listings_aggregate?.nodes?.map((element) => {
			if (!experiencelist?.some((x) => x?.value === element?.experience) && element?.experience !== null) {
				experiencelist.push({ label: element?.experience, value: element?.experience });
			}
		  });
		getJobs({variables: {
			type: filterType,
			experience: filterExperience,
			location: filterLocation,
			from: perPage * ((query.page ? query.page : 1) - 1),
			to: perPage,
		}});
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [query, filterType, filterExperience, filterLocation, typeList?.jobs_listings_aggregate?.nodes, experienceList?.jobs_listings_aggregate?.nodes]);

	useEffect(() => {
		const jobs_array = [];
		const result = data?.jobs_listings;
		result?.map((item) => {
			if (
				jobs_array?.some(
					(val) => val?.date === dateFormat(item?.created_at, "mmmm dd")
				)
			) {
				const foundIndex = jobs_array.findIndex(
					(x) => x?.date === dateFormat(item?.created_at, "mmmm dd")
				);
				if (
					!jobs_array[foundIndex]?.jobs?.some((val) => val?.id === item?.id)
				) {
					const mergejobs = [...jobs_array[foundIndex]?.jobs, item];
					jobs_array[foundIndex]["jobs"] = mergejobs;
				}
			} else {
				jobs_array.push({
					date: dateFormat(item.created_at, "mmmm dd"),
					jobs: [item],
				});
			}
		});
		jobs_array.sort(function (a, b) {
			return new Date(b?.date) - new Date(a?.date);
		});
		setJobLists(jobs_array);

		if (joblists.length > 0) {
			setFristLoad(true);
		}
	}, [data?.jobs_listings]);

	return (
		<Layout>
			<Head>
				<meta charset="utf-8" />
				<title>Design Jobs | Designed.org</title>
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
					<h1>Design Jobs</h1>
					<p>
						A list of thousands of design jobs that are currently available
						across the world, best of all <strong>it is free</strong>.
					</p>
				</div>
			</div>
			<div className="console-new">
				<div className="left-rail hide-tablet">
					<div className="section small-margin">
						<div className="filter-header horizontal-menu">
							<h4 className="fw-b">Filters</h4>
							<a href="/jobs/" className="button link f-r">
								Reset
							</a>
						</div>
						<div className="filter-section horizontal-menu mb-3">
							<h5 className="mb-2">Location</h5>
							<div className="form-input mb-3 autocomplete">
								<input
									type="text"
									id="location"
									name="location"
									placeholder="Search Location..."
									onChange={(e) => setFilterLocation(e.target.value)}
								/>
							</div>
						</div>
						<div className="filter-section horizontal-menu mb-3">
							<div className="filter-section horizontal-menu mb-3">
								<h5 className="mb-2">Type</h5>
								<Select
									name="job_type"
									classNamePrefix="react-select"
									placeholder="Choose a job type"
									options={typelist}
									onChange={e => setFilterType(e?.value)}
								/>
							</div>
						</div>
						<div className="filter-section horizontal-menu">
							<h5 className="mb-2">Experience Level</h5>
							<Select
									name="job_type"
									classNamePrefix="react-select"
									placeholder="Choose a job experience"
									options={experiencelist}
									onChange={e => setFilterExperience(e?.value)}
								/>
						</div>
					</div>
					<div className="section">
						<h4>Need a Mentor?</h4>
						<p>
							Need help your with your resume? Want help figuring out where to
							go next in your career? Designed provides access to free mentors!
						</p>
						<a
							name="post-opportunity"
							className="button primary full-width"
							href="/our-mentors"
						>
							Apply Today!
						</a>
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
						<ul className="job-list-web nav mb-5">
							{loading ? (
								<SkeletonTheme>
									<h5 className="light mt-4 mb-3">
										<Skeleton count={1} width="150px" height="30px" />
									</h5>
									{new Array(7).fill(1).map((item, index) => (
										<a href="#" target="_blank" key={"skeleton:" + index}>
											<li className="container-fluid job-item">
												<div className="row">
													<div className="col-md-8 col-sm-8 details empty">
														<div className="featured-job">
															<span className="avatar medium job-logo-image">
																<Skeleton
																	count={1}
																	width="60px"
																	height="60px"
																/>
															</span>
														</div>
														<div className="posting-info">
															<Skeleton count={1} width="200px" height="24px" />
															<span className="company">
																<Skeleton
																	count={1}
																	width="150px"
																	height="20px"
																/>
															</span>
														</div>
													</div>
													<div className="col-md-4 col-sm- job-actions">
														<span className="location">
															<Skeleton count={1} width="120px" height="22px" />
														</span>
													</div>
												</div>
											</li>
										</a>
									))}
								</SkeletonTheme>
							) : joblists?.length > 0 ? (
								joblists?.map((item, index) => {
									return (
										<>
											<h5 className="light mt-4 mb-3" key={index}>
												{item?.date}
											</h5>
											{item?.jobs?.map((job, i) => {
												return (
													<a target="_blank" href={job?.job_url}>
														<li className="container-fluid job-item">
															<div className="row">
																<div className="col-md-8 col-9 details ">
																	{job?.logo_url && (
																		<div className="featured-job">
																			<span className="avatar medium job-logo-image">
																				<Image
																					loader={imageLoader}
																					layout="fill"
																					objectFit="cover"
																					className="avatar medium job-logo-image"
																					src={job?.logo_url}
																				/>
																			</span>
																		</div>
																	)}
																	<div className="posting-info">
																		<span className="title">{job?.title}</span>
																		<span className="company">
																			<label>
																				<strong className="companyName">
																					{job?.company}
																				</strong>
																				<span className="bullet">•</span>
																				<span className="type">
																					{job?.type}
																				</span>
																			</label>
																		</span>
																	</div>
																</div>
																<div className="col-md-4 col-3 job-actions">
																	<span className="location">
																		{job?.location}
																	</span>
																</div>
															</div>
														</li>
													</a>
												);
											})}
										</>
									);
								})
							) : (
								firstLoad && (
									<>
										<p className="mt-4">No jobs match your filters :(</p>
									</>
								)
							)}
						</ul>
					</div>
					<br />
						<br />
						{(totalCount > perPage && allJobs?.length == perPage) ||
						query?.page > 1 ? (
							<Pagination totalPage={totalPage} />
						) : (
							""
						)}
						<br />
				</div>
			</div>
		</Layout>
	);
};

export default Jobs;
