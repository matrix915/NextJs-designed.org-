import React, { useState, useEffect, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Layout from "/src/layouts/main";
import Head from "next/head";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import LeftMenu from "/src/components/left-menu";
import { isLoginVerify } from "/src/components/utilities/base";
import { getUserID } from "/src/shared/user";
import { GET_USER_PROFILE, CHECK_USERNAME } from "/data/queries/users";
import {
	UPDATE_USER_PROFILE,
	UPDATE_USER_PROFILE_IMAGE,
} from "/data/mutations/users";
import MultiSelectTagList from "/src/helpers/TagList";
import imageLoader from "/src/components/utilities/imageLoader";
import ToastComponent from "/src/components/toast";
import Profile, { onChangeImage } from "/src/components/profile";
import axios from "axios";
import { UserContext } from "/src/hooks/useUserProfile";

const schema = Yup.object().shape({
	fileId: Yup.string().required(),
	first_name: Yup.string().required("First name is required").nullable(),
	last_name: Yup.string().required("Last name is required").nullable(),
	gender: Yup.string().required("Gender is required").nullable().nullable(),
	username: Yup.string()
		.min(5, "Username must be at least 5 characters")
		.required("Username is required")
		.nullable(),
	website: Yup.string()
		.trim()
		.matches(
			/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
			"Incorrect Website Format"
		)
		.required("Portfolio link is required")
		.nullable(),
	about: Yup.string().required("About is required").nullable(),
});

const SettingsGeneral = () => {
	const [getuser, setGetuser] = useState();
	const { getLatestUserdetails } = useContext(UserContext);

	const isLogin = isLoginVerify(false, "/login");
	if (!isLogin || isLogin === "No") return <h2>Loading...</h2>;

	const [update_users] = useMutation(UPDATE_USER_PROFILE);
	const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
		variables: { id: getUserID() },
	});

	const [
		getUsername,
		{
			data: checkUsername,
			error: checkUsernameError,
			loading: checkLoadingError,
		},
	] = useLazyQuery(CHECK_USERNAME, {
		variables: { username: getuser?.user_profile?.username },
	});
	const [update_user_image] = useMutation(UPDATE_USER_PROFILE_IMAGE);

	const [fileId, setFileId] = useState(
		"https://imagedelivery.net/Biz-7_vJO6O8Q9HnNqYfHg/ce4cf9e7-d014-4e83-e449-f34429ae5100/landscape"
	);
	const [usernameAvailable, setUsernameAvailable] = useState("");
	const [usernameStatus, setUsernameStatus] = useState(false);

	useEffect(() => {
		const user = data?.users.find((val) => val?.id === getUserID());
		if (user) {
			const data = {
				fileId: user?.user_profile?.avatar_url,
				first_name: user?.user_profile?.first_name,
				last_name: user?.user_profile?.last_name,
				email: user?.email,
				username: user?.user_profile?.username,
				gender: user?.user_profile?.gender,
				website: user?.user_profile?.website,
				about: user?.user_profile?.about,
			};
			Object.keys(data).map((key) => {
				setValue(key, data[key]);
			});
			setUsernameStatus(user?.user_profile?.username ? true : false);
			setGetuser(user);
			setFileId(user?.user_profile?.avatar_url);
		}
	}, [data?.users]);

	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const username = register("username", { required: true });

	const handleUsername = async (name) => {
		if (name?.length >= 5 && name !== getuser?.user_profile?.username) {
			const findusername = await getUsername({
				variables: { username: name },
			});
			const getStatus = findusername?.data?.user_profiles?.some(
				(val) => val?.username === name
			);
			if (getStatus) {
				setUsernameAvailable(
					<span className="text-danger">Sorry, {name} is not available</span>
				);
				setUsernameStatus(false);
			} else {
				setUsernameAvailable(
					<span className="text-success">
						{" "}
						The username {name} is available!
					</span>
				);
				setUsernameStatus(true);
			}
		}
	};

	const onSubmitHandler = async (value) => {
		if (value && usernameStatus) {
			if (getuser) {
				await update_users({
					variables: {
						...getuser?.user_profile,
						...value,
						avatar_url: value.fileId,
						id: getUserID(),
					},
				});
			}
			toast.success(
				<ToastComponent
					title={"Basic information update successfully!"}
					color="success"
				/>,
				{
					autoClose: 3000,
					hideProgressBar: true,
					closeButton: false,
					position: "bottom-center",
				}
			);
			refetch();
		}
	};

	const onSubmitImageUpload = async ({ imageUrl }) => {
		await update_user_image({
			variables: { id: getUserID(), avatar_url: imageUrl },
		});
	};

	return (
		<Layout>
			<Head>
				<meta charset="utf-8" />
				<title>Designed.org - Settings </title>
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
			<div className="main-window center no-header">
				<div className="console">
					<LeftMenu />
					<div className="right-window small full-height">
						<div className="profile-card">
							<div className="fixed-content small">
              <h3>Basic Information</h3>
								<div className="container-fluid">
									<Profile
										imageLoader={imageLoader}
										fileId={fileId}
										onChangeImage={(image) =>
											onChangeImage(
												image,
												setValue,
												"fileId",
												setFileId,
												getLatestUserdetails,
												onSubmitImageUpload
											)
										}
									/>
									<div className="row">
										<div className="col-md-6">
											<div className="form-input">
												<label>First Name</label>
												<input
													type="text"
													autoComplete="off"
													name="firstname"
													{...register("first_name")}
													placeholder="First name"
												/>
												<span className="text-danger">
													{errors?.firstname?.message}
												</span>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-input">
												<label>Last Name</label>
												<input
													type="text"
													autoComplete="off"
													name="lastname"
													{...register("last_name")}
													placeholder="Last name"
												/>
												<span className="text-danger">
													{errors?.lastname?.message}
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="form-input">
											<label>Username</label>
											<input
												type="text"
												autoComplete="off"
												name="username"
												placeholder="Username"
												{...username}
												onChange={(e) => {
													username.onChange(e);
													handleUsername(e.target.value);
												}}
											/>
											<span className="text-danger">
												{errors?.username?.message}
											</span>
											<div className="portfolio-link">
												{!errors?.username?.message && usernameAvailable}
												<br />
												{getuser?.user_profile?.is_mentor && (
													<>
														<span>Your mentor profile URL is </span>
														<a
															href={
																getuser?.user_profile?.username
																	? "https://designed.org/mentors/" +
																	  getuser?.user_profile?.username
																	: "username"
															}
															target="_blank"
														>
															http://designed.org/mentors/
															{getuser?.user_profile?.username
																? getuser?.user_profile?.username
																: "username"}
														</a>
													</>
												)}
											</div>
											<div className="portfolio-link  mb-4">
												Please note, any changes to your profile can take up to
												2 hours to show.
											</div>
										</div>
									</div>
								</div>
								<div className="form-input">
									<label>Email</label>
									<input
										type="text"
										autoComplete="off"
										name="email"
										{...register("email")}
										disabled
									/>
									<span className="text-danger">{errors?.email?.message}</span>
								</div>
								<div className="form-input mt-4">
									<label>Gender</label>
									<div className="form-group radio">
										<label className="control control--radio inline">
											Female
											<input
												type="radio"
												name="genderGroup"
												value="Female"
												{...register("gender")}
											/>
											<div className="control__indicator" />
										</label>
										<label className="control control--radio inline">
											Male
											<input
												type="radio"
												name="genderGroup"
												value="Male"
												{...register("gender")}
											/>
											<div className="control__indicator" />
										</label>
										<label className="control control--radio inline">
											Non-binary
											<input
												type="radio"
												name="genderGroup"
												value="Non-binary"
												{...register("gender")}
											/>
											<div className="control__indicator" />
										</label>
									</div>
									<span className="text-danger">{errors?.gender?.message}</span>
								</div>
								<div className="form-input">
									<label>Portfolio</label>
									<input
										type="text"
										placeholder="http://mywebsite.com"
										autoComplete="off"
										name="website"
										{...register("website")}
									/>
									<span className="text-danger">
										{errors?.website?.message}
									</span>
								</div>
								<div className="form-input">
									<label>Tell us about yourself</label>
									<textarea
										maxLength={300}
										rows="8"
										placeholder="Share a little snippet of your story and what areas you want to help mentor"
										{...register("about")}
									/>
									<span className="text-danger">{errors?.about?.message}</span>
									<div className="character-counter">22/300</div>
								</div>
								<button
									className="button primary mt-3"
									onClick={handleSubmit(onSubmitHandler)}
								>
									Update Profile
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default SettingsGeneral;
