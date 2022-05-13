import React, { useEffect, useState } from "react";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";
import { GET_USER_PROFILE } from "/data/queries/users";
import { getUserID } from "/src/shared/user";
import { UPDATE_USER_PROFILE } from "/data/mutations/users";

// Page Images
import AuthHeader from "/src/components/auth/authHeader";
import AuthPageMedia from "/src/components/auth/auth_page_media";

const schema = Yup.object().shape({
	is_mentor: Yup.string().required("Profile type is required").nullable(),
});

const OnboardingStep1 = () => {
	const router = useRouter();

	const [getuser, setGetuser] = useState();

	const [update_user_profiles] = useMutation(UPDATE_USER_PROFILE);
	const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
		variables: { id: getUserID() },
	});

	useEffect(() => {
		const user = data?.users?.find((val) => val?.id === getUserID());
		if (user) {
			const data = {
				is_mentor: user?.user_profile?.is_mentor?.toString(),
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
			router.push("/get-started/profile");
		}
	};

	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<title>Designed.org - Get-Started </title>
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
							<AuthHeader headerTitle="Lets get started!" />
							<p>
								Our Mission is simple. We empower the designers of tomorrow
								through educational tools and mentoring. We are the only
								501(c)(3) non-profit building a career growth platform focused
								only on designers.
							</p>
							<p>
								We are excited you joined the global Designed.org community, we
								have users from over 62 countries and growing. Let's create your
								profile and help you get connected with everyone!
							</p>
							<div className="container-fluid">
								<div className="row mt-3">
									<div className="col-md-12">
										<div className="form-input">
											<label>
												What type of profile would you like to create?
											</label>
											<div className="mt-2">
												<label className="control control--radio">
													<strong>Mentor</strong> (I'm ready to help others)
													<input
														type="radio"
														name="genderradio"
														value={"true"}
														{...register("is_mentor")}
													/>
													<div className="control__indicator"></div>
												</label>
												<label className="control control--radio">
													<strong>Mentee</strong> (I'm looking for help from the
													community)
													<input
														type="radio"
														name="genderradio"
														value={false}
														{...register("is_mentor")}
													/>
													<div className="control__indicator"></div>
												</label>
												<span className="text-danger">
													{errors?.is_mentor?.message}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bottom-panel mt-4">
								<div data-name="previous-step" className="hide">
									<span>Previous</span>
								</div>
								<Link href="/get-started/profile">
									<a
										data-name="next-step"
										className="button right primary svg right"
										onClick={handleSubmit(onSubmitHandler)}
									>
										<span>Next: Profile Info</span>
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
								</Link>
							</div>
						</div>
					</div>
					<AuthPageMedia />
				</div>
			</div>
		</>
	);
};

export default OnboardingStep1;
