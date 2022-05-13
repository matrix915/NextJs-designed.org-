import React from "react";
import Layout from "/src/layouts/full";
// Page Components
import Login from "../src/components/auth/login";
import Join from "../src/components/auth/join";
import ForgotPassword from "../src/components/auth/forgot_password";
import Verify from "../src/components/auth/verify";
import ChangePassword from "../src/components/auth/change_password";
import Passwordless from "../src/components/auth/passwordless";
import { isLoginVerify } from "../src/components/utilities/base";

const Auth = () => {
const isLogin = isLoginVerify("/settings/general",false);
	const getComponent = (type) => {
		switch (type) {
			case "/login":
				return <Login />
			case "/join":
				return <Join />
			case "/forgot-password":
				return <ForgotPassword />
			case "/verify":
				return <Verify />
			case "/change-password":
				return <ChangePassword />
			case "/passwordless":
				return <Passwordless />
			default:
				return;
		}
	};

	return (
		<Layout>
			{getComponent(
			isLogin === "No" && typeof window !== "undefined" && window?.location?.pathname
			)}
		</Layout>
	);
};

export default Auth;