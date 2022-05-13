import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { N_HOST_CLIENT } from "/src/constants/nHost";
import Pages from "../constants/left-nav";
import { getUserID } from "/src/shared/user";
import { GET_USER_PROFILE } from "/data/queries/users";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import ToastComponent from "/src/components/toast";

const LeftMenu = () => {
	const router = useRouter();

	const [getuser, setGetuser] = useState();

	const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
		variables: { id: getUserID() },
	});

	useEffect(() => {
		const user = data?.users?.find((val) => val?.id === getUserID());
		if (user) {
			setGetuser(user);
		}
	}, [data?.users]);

	const handleLogout = async () => {
		localStorage.removeItem("token");
		localStorage.removeItem("reqToken");
		localStorage.removeItem("user");
		await N_HOST_CLIENT.auth.signOut();
		router.push("/");
		toast.success(
			<ToastComponent
				title={"You have successfully logged out!"}
				color="success"
			/>,
			{
				autoClose: 3000,
				hideProgressBar: true,
				closeButton: false,
				position: "bottom-center",
			}
		);
	};

	return (
		<div className="left-rail small nav">
			<ul className="nav">
				<li className="nav-group-label mt-3">
					<span>
						<strong>PROFILE</strong>
					</span>
				</li>
				<li>
					<Link href="/settings/general">
						<a className={router.asPath === "/settings/general" && "active"}>
							{Pages.BASIC_INFORMATION}
						</a>
					</Link>
				</li>
				<li>
					<Link href="/settings/location">
						<a className={router.asPath === "/settings/location" && "active"}>
							{Pages.LOCATION}
						</a>
					</Link>
				</li>
				<li>
					<Link href="/settings/social">
						<a className={router.asPath === "/settings/social" && "active"}>
							{Pages.SOCIAL_ACCOUNTS}
						</a>
					</Link>
				</li>
				<li>
					<Link href="/settings/experience">
						<a className={router.asPath === "/settings/experience" && "active"}>
							{Pages.EXPERIENCE}
						</a>
					</Link>
				</li>
				{getuser?.user_profile?.is_mentor && (
					<li>
						<Link href="/settings/mentoring">
							<a
								className={router.asPath === "/settings/mentoring" && "active"}
							>
								{Pages.MENTORING}
							</a>
						</Link>
					</li>
				)}
				<li className="nav-group-label mt-3">
					<span>
						<strong>ACCOUNT</strong>
					</span>
				</li>
				<li>
					<Link href="/settings/donations">
						<a className={router.asPath === "/settings/donations" && "active"}>
							{Pages.DONATIONS}
						</a>
					</Link>
				</li>
				<li>
					<Link href="/settings/delete">
						<a className={router.asPath === "/settings/delete" && "active"}>
							{Pages.DELETE}
						</a>
					</Link>
				</li>
				<li onClick={handleLogout}>
					<a>Logout</a>
				</li>
			</ul>
		</div>
	);
};

export default LeftMenu;
