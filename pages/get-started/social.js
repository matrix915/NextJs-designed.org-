import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { UPDATE_USER_PROFILE } from "/data/mutations/users";
import { getUserID } from "/src/shared/user";
import { GET_USER_PROFILE } from "/data/queries/users";

// Page Images
import AuthHeader from "/src/components/auth/authHeader";
import AuthPageMedia from "/src/components/auth/auth_page_media";

const schema = Yup.object().shape({});

const OnboardingStep5 = () => {
	const router = useRouter();
	const [getuser, setGetuser] = useState();

	const [update_user_profiles] = useMutation(UPDATE_USER_PROFILE);
	const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
		variables: { id: getUserID() },
	});

	useEffect(() => {
		const user = data?.users.find((val) => val?.id === getUserID());
		if (user) {
			const data = {
				website: user?.user_profile?.website,
				social_facebook: user?.user_profile?.social_facebook,
				social_twitter: user?.user_profile?.social_twitter,
				social_linkedin: user?.user_profile?.social_linkedin,
				social_dribbble: user?.user_profile?.social_dribbble,
				social_behance: user?.user_profile?.social_behance,
				social_instagram: user?.user_profile?.social_instagram,
				social_medium: user?.user_profile?.social_medium,
				social_youtube: user?.user_profile?.social_youtube,
			};
			Object.keys(data).map((key) => {
				setValue(key, data[key]);
			});
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
					variables: { ...getuser?.user_profile, ...value, id: getUserID() },
				});
			}
			refetch();
			router.push("/get-started/finale");
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
					<div className="auth-container wide">
						<div className="auth-container-wrapper">
							<AuthHeader headerTitle="Where can we find you online?" />
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-12">
										<div className="form-input">
											<label>Portfolio or Personal Site</label>
											<input
												type="text"
												className="inline"
												name="website"
												placeholder="www.superwebsite.com"
												{...register("website")}
											/>
										</div>
									</div>
								</div>
								<h4 className=" mt-2 mb-3">
									Please share a minimum of two social profiles.
								</h4>
								<div className="row">
									<div className="col-md-6">
										<div className="form-input">
											<label>Facebook</label>
											<div className="form-group">
												<div className="form-add-on">http://facebook.com/</div>
												<input
													type="text"
													className="inline"
													name="facebook"
													placeholder="superdesignr22"
													{...register("social_facebook")}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-input">
											<label>Twitter</label>
											<div className="form-group">
												<div className="form-add-on">http://twitter.com/</div>
												<input
													type="text"
													className="inline"
													name="twitter"
													placeholder="superdesignr22"
													{...register("social_twitter")}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-input">
											<label>LinkedIn</label>
											<div className="form-group">
												<div className="form-add-on">
													http://linkedin.com/in/
												</div>
												<input
													type="text"
													className="inline"
													name="linkedin"
													placeholder="superdesignr22"
													{...register("social_linkedin")}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-input">
											<label>Dribbble</label>
											<div className="form-group">
												<div className="form-add-on">http://dribbble.com/</div>
												<input
													type="text"
													className="inline"
													name="dribbble"
													placeholder="superdesignr22"
													{...register("social_dribbble")}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-input">
											<label>Behance</label>
											<div className="form-group">
												<div className="form-add-on">http://behance.net/</div>
												<input
													type="text"
													className="inline"
													name="behance"
													placeholder="superdesignr22"
													{...register("social_behance")}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-input">
											<label>Instagram</label>
											<div className="form-group">
												<div className="form-add-on">http://instagram.com/</div>
												<input
													type="text"
													className="inline"
													name="instagram"
													placeholder="superdesignr22"
													{...register("social_instagram")}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-input">
											<label>Medium</label>
											<div className="form-group">
												<div className="form-add-on">http://medium.com/</div>
												<input
													type="text"
													className="inline"
													name="medium"
													placeholder="superdesignr22"
													{...register("social_medium")}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-input">
											<label>Youtube</label>
											<div className="form-group">
												<div className="form-add-on">http://youtube.com/</div>
												<input
													type="text"
													className="inline"
													name="youtube"
													placeholder="superdesignr22"
													{...register("social_youtube")}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bottom-panel mt-4">
								<Link href="/get-started/experience/">
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
									<span>Next: Finale</span>
									<svg
										className="right"
										viewBox="0 0 27 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M25.5833 8.62655L17.5145 0.557696C16.7709 -0.185899 15.5317 -0.185899 14.7881 0.557696C14.0445 1.30129 14.0445 2.54049 14.7881 3.28408L19.5525 8.07572H1.92766C0.853652 8.07572 0 8.92938 0 10.0034C0 11.0774 0.853652 11.931 1.92766 11.931H19.5525L14.7881 16.6952C14.0445 17.4388 14.0445 18.678 14.7881 19.4216C15.1736 19.8071 15.6694 20 16.165 20C16.6606 20 17.1564 19.8071 17.542 19.4216L25.5833 11.3803C25.9414 11.0222 26.1617 10.5266 26.1617 10.0033C26.1617 9.48005 25.9688 8.98445 25.5833 8.6264L25.5833 8.62655Z"
											fill="white"
										/>
									</svg>
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

export default OnboardingStep5;
