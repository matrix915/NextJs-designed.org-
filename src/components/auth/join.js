import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
// Page Images
import { N_HOST_CLIENT } from "../../constants/nHost";
import AuthHeader from "./authHeader";
import ThirdPartyAuthLinks from "./thirdPartyAuthLinks";
import {
	emailValidation,
	validateAuthData,
	validateIncludeNumber,
	validateIncludeSpecialChar,
	validateIncludeUppercase,
	validateLength,
} from "../utilities/validation";
import AuthPageMedia from "./auth_page_media";
import { MessageToast } from "../utilities/base";

const JoinUs = () => {
	const router = useRouter();
	const [signUpState, setSignUpState] = useState({ email: "", password: "" });
	const { email, password } = signUpState;
	const [validatePassword, setValidatePassword] = useState({
		includeSpecial: false,
		includeNumber: false,
		includeUppercase: false,
		includeLength: false,
		emailValidate: false,
	});
	const {
		includeLength,
		includeNumber,
		includeSpecial,
		includeUppercase,
		emailValidate,
	} = validatePassword;
	const handleChangeSignUp = (e) =>
		setSignUpState({ ...signUpState, [e.target.name]: e.target.value });

	const handleSignup = async (e) => {
		e.preventDefault();
		const validate = validateAuthData(signUpState, true);
		if (validate.status) {
			const res = await N_HOST_CLIENT.auth.signUp({
				email: signUpState.email,
				password: signUpState.password,
			});

			if (res.error) MessageToast("error", res.error.message);
			else
				await N_HOST_CLIENT.graphql.request(
					`
					mutation insertUser($object: user_profiles_insert_input!) {
						insert_user_profiles_one(object: $object) {
							id
						}
					}										
					`,
					{
						object: {
							id: res.session?.user?.id,
						},
					}
				);
			N_HOST_CLIENT.auth.sendVerificationEmail({ email: signUpState.email });
			router.push({ pathname: "/verify", query: { email: signUpState.email } });
		} else MessageToast("error", validate.error);
	};

	useEffect(() => {
		const status1 = validateIncludeSpecialChar(password);
		const status2 = validateIncludeUppercase(password);
		const status3 = validateIncludeNumber(password);
		const status4 = validateLength(password, 8);
		const status5 = emailValidation({ email });
		setValidatePassword({
			includeSpecial: status1,
			includeUppercase: status2,
			includeNumber: status3,
			includeLength: status4,
			emailValidate: status5.status,
		});
	}, [password, email]);
	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<title>Join | Designed.org</title>
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
					<div className="auth-container narrow">
						<div className="auth-container-wrapper">
							<AuthHeader headerTitle="Create your free account" />
							<div className="form-input">
								<form onSubmit={handleSignup}>
									<input
										type="email"
										className="mb-2"
										name="email"
										placeholder="Your email"
										onChange={handleChangeSignUp}
										value={email}
									/>
									<input
										type="password"
										name="password"
										placeholder="Your password"
										onChange={handleChangeSignUp}
										value={password}
									/>
									{/* {<p className="hint-password">{password && !isCorrectPassword ? "Bad Password" : "" }</p>} */}
									<ul className="hint-list">
										<li
											className={`hint ${
												password ? (includeLength ? "good" : "bad") : ""
											}`}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												viewBox="0 0 12 18"
												fill="#9eabb3"
											>
												<path
													fillRule="evenodd"
													d="M.168 10.46l5.48-.695L2.12 17.45 11.17 6.619l-5.685.72L7.787.496z"
												></path>
											</svg>{" "}
											8 characters minimum
										</li>
										<li
											className={`hint ${
												password ? (includeSpecial ? "good" : "bad") : ""
											}`}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												viewBox="0 0 12 18"
												fill="#9eabb3"
											>
												<path
													fillRule="evenodd"
													d="M.168 10.46l5.48-.695L2.12 17.45 11.17 6.619l-5.685.72L7.787.496z"
												></path>
											</svg>{" "}
											1 special character
										</li>
										<li
											className={`hint ${
												password ? (includeNumber ? "good" : "bad") : ""
											}`}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												viewBox="0 0 12 18"
												fill="#9eabb3"
											>
												<path
													fillRule="evenodd"
													d="M.168 10.46l5.48-.695L2.12 17.45 11.17 6.619l-5.685.72L7.787.496z"
												></path>
											</svg>{" "}
											1 number
										</li>
										<li
											className={`hint ${
												password ? (includeUppercase ? "good" : "bad") : ""
											}`}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												viewBox="0 0 12 18"
												fill="#9eabb3"
											>
												<path
													fillRule="evenodd"
													d="M.168 10.46l5.48-.695L2.12 17.45 11.17 6.619l-5.685.72L7.787.496z"
												></path>
											</svg>{" "}
											1 uppercase character
										</li>
									</ul>
									<button
										className={`button full-width mt-3 ${
											!includeLength ||
											!includeNumber ||
											!includeSpecial ||
											!includeUppercase ||
											!emailValidate
												? ""
												: "primary"
										}`}
										disabled={
											!includeLength ||
											!includeNumber ||
											!includeSpecial ||
											!includeUppercase ||
											!emailValidate
										}
										type="submit"
									>
										<span className="tide-text-span">Create free account</span>
									</button>
								</form>
							</div>
							<p className="meta-signup">
								Already have a Designed account?{" "}
								<Link href="/login">
									<a>Sign In</a>
								</Link>
							</p>
							<div className="separator">
								<p>or</p>
							</div>
							<ThirdPartyAuthLinks />
						</div>
					</div>
					<AuthPageMedia />
				</div>
			</div>
		</>
	);
};

export default JoinUs;
