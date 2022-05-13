import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
// Page Images
import { N_HOST_CLIENT } from "../../constants/nHost";
import AuthHeader from "./authHeader";
import AuthPageMedia from "./auth_page_media";
import { emailValidation, validateAuthData } from "../utilities/validation";
import { MessageToast } from "../utilities/base";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [isValidate, setIsValidate] = useState(false);
	const handleChange = (e) => setEmail(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validate = emailValidation({ email });
		if (validate.status) {
			const res = await N_HOST_CLIENT.auth.resetPassword({ email });
			if (res.error)
				MessageToast("error", res.error.message)
			else
				MessageToast("success", "Reset email sent")
		} else
			MessageToast("error", validate.error)
	};
	useEffect(() => {
		const validate = emailValidation({ email });
		setIsValidate(validate.status);
	}, [email]);
	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<title>Forgot Password | Designed.org</title>
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
							<AuthHeader headerTitle="Forgot Password" />
							<div className="form-input">
								<form onSubmit={handleSubmit}>
									<input
										type="email"
										className="mb-2"
										name="email"
										placeholder="Your email"
										value={email}
										onChange={handleChange}
									/>
									<button
										className={`button full-width mt-3 ${isValidate && "primary"
											}`}
										disabled={!isValidate}
										type="submit"
									>
										<span className="tide-text-span">Send reset email</span>
									</button>
								</form>
							</div>
							<p className="meta-signup">
								Need help? <Link href="/contact">Chat with us!</Link>
							</p>
							<p className="meta-signup mt-3">
								<Link href="/login"> ← Return to login</Link>
							</p>
						</div>
					</div>
					<AuthPageMedia />
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;
