import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
// Page Images
import { N_HOST_CLIENT } from "../../constants/nHost";
import AuthHeader from "./authHeader";
import ThirdPartyAuthLinks from "./thirdPartyAuthLinks";
import { toast } from "react-toastify";
import { GET_USER_PROFILE } from "/data/queries/users";
import { useLazyQuery } from "@apollo/client";
import { getUserID } from "/src/shared/user";
import { emailValidation, validateAuthData } from "../../components/utilities/validation";
import AuthPageMedia from "./auth_page_media";
import { MessageToast } from "../utilities/base";

const Login = () => {
	const router = useRouter();
	const [loginState, setLoginState] = useState({ email: "", password: "" });
	const [emailValidate, setEmailValidate] = useState({
		email: "",
		password: "",
	});

	const [getUserProfile,{ data, error, loading, refetch }] = useLazyQuery(GET_USER_PROFILE, {
		variables: { id: getUserID() },
	});

	const { email, password } = loginState;

	const handleChangeLogin = (e) =>
		setLoginState({ ...loginState, [e.target.name]: e.target.value });

	const handleLogin = async (e) => {
		e.preventDefault();
		const validate = validateAuthData(loginState);
		if (validate.status) {
			const res = await N_HOST_CLIENT.auth.signIn({
				email: loginState.email,
				password: loginState.password,
			});
			if (res.error)
				MessageToast("error", res.error.message)
			else {
				localStorage.setItem("user", JSON.stringify(res.session.user));
				localStorage.setItem("token", res.session.accessToken);
				localStorage.setItem("reqToken", res.session.refreshToken);
				const findUser = await getUserProfile({
					variables: {
						id: res?.session?.user?.id 
					} 
				})
				const userStatus = findUser?.data?.users?.find((val) => val?.id === getUserID());
				console.log("userStatus?.user_profile?.is_registration_complete",userStatus?.user_profile ,userStatus?.user_profile?.is_registration_complete)
				if(!userStatus?.user_profile?.is_registration_complete)
				{
					router.push("/get-started/intro")
				}
				else
				{
					router.back();
				}
				MessageToast("success", "You have successfully logged in!")
			}
		} else
			MessageToast("error", validate.error)
	};
	useEffect(() => {
		const validate = emailValidation({ email });
		setEmailValidate(validate.status);
	}, [email]);

	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<title>Login | Designed.org</title>
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
							<AuthHeader headerTitle="Login to your account" />
							<div className="form-input">
								<form onSubmit={handleLogin}>
									<input
										type="email"
										className="mb-2"
										name="email"
										placeholder="Your email"
										onChange={handleChangeLogin}
										value={email}
									/>
									<input
										type="password"
										name="password"
										placeholder="Your password"
										onChange={handleChangeLogin}
										value={password}
									/>
									<button
										className={`button full-width mt-3 ${emailValidate && password.length !== 0 && "primary"
											}`}
										disabled={!emailValidate || password.length === 0}
										type="submit"
									>
										<span className="tide-text-span">Sign In</span>
									</button>
								</form>
							</div>
							<p className="meta-signup">
								Need a Designed account?{" "}
								<Link href="/join">Create Free Account</Link>
							</p>
							<p className="meta-signup">
								Password not working?{" "}
								<Link href="/forgot-password">Forgot Password</Link>
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

export default Login;
