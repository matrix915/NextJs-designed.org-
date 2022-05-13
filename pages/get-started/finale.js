import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import MultiSelectTagList from "/src/helpers/TagList";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER_PROFILE } from "/data/queries/users";
import { UPDATE_USER_PROFILE } from "/data/mutations/users";
import { getUserID } from "/src/shared/user";

// Page Images
import AuthHeader from "/src/components/auth/authHeader";
import AuthPageMedia from "/src/components/auth/auth_page_media";

const schema = Yup.object().shape({
	agress_status: Yup.boolean().oneOf(
		[true],
		"You must accept the Designed Code of  Conduct"
	),
});

const hearAboutUsList = [
	{ value: "LinkedIn", label: "LinkedIn" },
	{ value: "Facebook", label: "Facebook" },
	{ value: "Google Search", label: "Google Search" },
	{ value: "Word of mouth", label: "Word of mouth" },
];

const OnboardingStep6 = () => {
	const router = useRouter();
	const [getuser, setGetuser] = useState();
	const [hearAboutUs, setHearAboutUs] = useState([]);

	const [update_user_profiles] = useMutation(UPDATE_USER_PROFILE);
	const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
		variables: { id: getUserID() },
	});

	useEffect(() => {
		const user = data?.users.find((val) => val?.id === getUserID());
		if (user) {
			const data = {
				mentoring_experience: user?.user_profile?.mentoring_experience,
				mentoring_why: user?.user_profile?.mentoring_why,
			};
			Object.keys(data).map((key) => {
				setValue(key, data[key]);
			});
			setHearAboutUs(user?.user_profile?.hear_about_us ? user?.user_profile?.hear_about_us : []);
			setGetuser(user);
		}
	}, [data?.users]);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmitHandler = async (value) => {
		if (value) {
			if (getuser) {
				await update_user_profiles({
					variables: {
						...getuser?.user_profile,
						...value,
						hear_about_us: hearAboutUs,
						is_registration_complete: true,
						id: getUserID(),
					},
				});
			}
			refetch();
			router.push("/settings/general");
		}
	};

	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<title>Get Started | Designed.org</title>
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
			<div className="auth-wrapper">
				<div className="designed-auth">
					<div className="auth-container">
						<div className="auth-container-wrapper">
							<AuthHeader headerTitle="The Finale" />
							<div className="container-fluid">
								{getuser?.is_mentor ? (
									<>
										<div className="row">
											<div className="col-md-12">
												<div className="form-input">
													<label>Have you ever mentored someone before?</label>
													<textarea
														name="have_perform_role"
														rows="6"
														{...register("mentoring_experience")}
														placeholder="Please share a short summary of previous experiences. If you have not mentored before, please put N/A"
													></textarea>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="form-input">
													<label>Why do you want to mentor others?</label>
													<textarea
														name="why_perform_role"
														rows="6"
														{...register("mentoring_why")}
														placeholder="Please share why you are interested in mentoring others!"
													></textarea>
												</div>
											</div>
										</div>
									</>
								) : (
									<>
										<div className="row">
											<div className="col-md-12">
												<div className="form-input">
													<label>Have you ever had a mentor before?</label>
													<textarea
														name="have_perform_role"
														rows="6"
														{...register("mentoring_experience")}
														placeholder="Please share a short summary of previous experiences. If you have not mentored before, please put N/A"
													></textarea>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="form-input">
													<label>
														What goals do you have to work on with a mentor?
													</label>
													<textarea
														name="why_perform_role"
														rows="6"
														{...register("mentoring_why")}
														placeholder="Please share more about your career goals and what you hope to accomplish with your mentor!sss"
													></textarea>
												</div>
											</div>
										</div>
									</>
								)}
								<div className="row mt-3">
									<div className="col-md-12">
										<div className="form-input">
											<label>How did you hear about Designed?</label>
											<MultiSelectTagList
												optionsList={hearAboutUsList}
												className="multiSelect"
												tagCreatable={true}
												selectedValue={hearAboutUs}
												handleSelectChange={(e) => setHearAboutUs(e)}
												placeholder="Choose a source"
											/>
										</div>
									</div>
								</div>
								<div className="row mt-3 mb-3">
									<div className="col-md-12">
										<div className="agreement-panel">
											<div className="form-group checkbox">
												<label className="control control--checkbox inline">
													<span>I agree to the </span>
													<strong>
														<a href="/legal/code-of-conduct/" target="_blank">
															Designed Code of Conduct
														</a>
													</strong>
													<input
														type="checkbox"
														name="agree"
														{...register("agress_status")}
													/>
													<div className="control__indicator"></div>
												</label>
												<br />
												<span className="text-danger">
													{errors?.agress_status?.message}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bottom-panel mt-4">
								<Link href="/get-started/social/">
									<a
										data-name="previous-step"
										className="button link no-h-padding left"
									>
										<span>Previous</span>
									</a>
								</Link>
								<a
									data-name="next-step"
									className="button right primary svg right"
									onClick={handleSubmit(onSubmitHandler)}
								>
									<span>Submit</span>
								</a>
							</div>
						</div>
					</div>
					<AuthPageMedia />
				</div>
			</div>
		</>
	);
};

export default OnboardingStep6;
