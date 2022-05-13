import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactFlagsSelect from "react-flags-select";
import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { languages } from "/src/constants/languages";
import { timezones } from "/src/constants/timezones";
import { GET_USER_PROFILE } from "/data/queries/users";
import { UPDATE_USER_PROFILE } from "/data/mutations/users";
import MultiSelectTagList from "/src/helpers/TagList";
import { getUserID } from "/src/shared/user";

// Page Images
import AuthHeader from "/src/components/auth/authHeader";
import AuthPageMedia from "/src/components/auth/auth_page_media";

const schema = Yup.object().shape({
	city: Yup.string().required("City is required").nullable(),
	country_state: Yup.string().required("State/Region is required").nullable(),
});

const OnboardingStep3 = () => {
	const router = useRouter();
	const [timezoneList, setTimezoneList] = useState([]);
	const [languageList, setLanguageList] = useState([]);
	const [selectedTimezone, setSelectedTimezone] = useState({});
	const [selectedLanguage, setSelectedLanguage] = useState({});
	const [getuser, setGetuser] = useState();
	const [selectedCountry, setSelectedCountry] = useState("");

	const [update_user_profiles] = useMutation(UPDATE_USER_PROFILE);
	const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
		variables: { id: getUserID() },
	});

	useEffect(() => {
		const user = data?.users?.find((val) => val?.id === getUserID());
		if (user) {
			const data = {
				city: user?.user_profile?.city,
				country_state: user?.user_profile?.country_state,
			};
			Object.keys(data).map((key) => {
				setValue(key, data[key]);
			});
			setGetuser(user);
			setSelectedCountry(user?.user_profile?.country);
			setSelectedLanguage(
				user?.user_profile?.languages?.map((val) => languages?.find((x) => x.value == val))
			);
			setSelectedTimezone(timezones?.find((x) => x.value === user?.user_profile?.timezone));
		}
	}, [data?.users, timezones?.timezone, languages?.languages]);

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
						country: selectedCountry,
						timezone: selectedTimezone?.value,
						languages: selectedLanguage?.map((val) => val?.value),
						id: getUserID(),
					},
				});
			}
			router.push("/get-started/experience");
			refetch();
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
							<AuthHeader headerTitle="Where are you located?" />
							<div className="container-fluid">
								<div className="row  mt-4">
									<div className="col-md-12">
										<div className="form-input">
											<label>Country</label>
											<ReactFlagsSelect
												selected={selectedCountry}
												onSelect={(code) => setSelectedCountry(code)}
												className="select-country"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-input">
											<label>City</label>
											<input
												type="text"
												autocomplete="off"
												name="firstname"
												data-name="first-name"
												placeholder="What is your city"
												{...register("city")}
											/>
											<span className="text-danger">
												{errors?.city?.message}
											</span>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-input">
											<label>State / Province / Region</label>
											<input
												type="text"
												autocomplete="off"
												name="lastname"
												data-name="last-name"
												placeholder="What state?"
												{...register("country_state")}
											/>
											<span className="text-danger">
												{errors?.country_state?.message}
											</span>
										</div>
									</div>
								</div>
								<div className="row mt-2">
									<div className="col-md-12">
										<div className="form-input">
											<label>What timezones are you available?</label>
											<MultiSelectTagList
												optionsList={timezones}
												className="multiSelect"
												selectedValue={selectedTimezone}
												handleSelectChange={(e) => setSelectedTimezone(e)}
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="row mt-2">
								<div className="col-md-12">
									<div className="form-input">
										<label>What language(s) do you speak?</label>
										<MultiSelectTagList
											optionsList={languages}
											className="multiSelect"
											tagCreatable={true}
											selectedValue={selectedLanguage}
											handleSelectChange={(e) => setSelectedLanguage(e)}
										/>
									</div>
								</div>
							</div>
							<div className="bottom-panel mt-4">
								<Link href="/get-started/profile/">
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
									<span>Next: Experience</span>
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

export default OnboardingStep3;
