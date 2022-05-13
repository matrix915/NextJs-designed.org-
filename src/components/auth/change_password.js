import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
// Page Images
import { N_HOST_CLIENT } from "../../constants/nHost";
import AuthHeader from "./authHeader";
import AuthPageMedia from "./auth_page_media";
import { passwordValidation } from "../utilities/validation";
import { MessageToast } from "../utilities/base";

const ChangePassword = () => {
    const router = useRouter();
    const [passState, setPassState] = useState({ newPassword: "", confirmNewPassword: "" });
    const handleChange = (e) =>
        setPassState({ ...passState, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await N_HOST_CLIENT.auth.changePassword({ newPassword: passState.newPassword });
        if (res.error)
            MessageToast("error", res.error.message)
        else {
            MessageToast("success", "Password successfully updated");
            let user = N_HOST_CLIENT.auth.getUser();
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", localStorage.getItem("nhostRefreshToken"));
            router.push("/");
        }
    }

    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>Change Password | Designed.org</title>
                <meta name="keywords" content="#" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="author" content="Designed.org" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
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
                            <AuthHeader headerTitle="Change Password" />
                            <div className="form-input">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="password"
                                        className="mb-2"
                                        placeholder="New Password"
                                        name="newPassword"
                                        value={passState.newPassword}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="password"
                                        className="mb-2"
                                        placeholder="Confirm New Password"
                                        name="confirmNewPassword"
                                        value={passState.confirmNewPassword}
                                        onChange={handleChange}
                                    />

                                    <button
                                        className={`button full-width mt-3 ${passState.newPassword === passState.confirmNewPassword && passState.newPassword.length >= 8 && "primary"}`}
                                        disabled={passState.newPassword !== passState.confirmNewPassword || passState.newPassword.length < 8}
                                        type="submit"
                                    >
                                        <span className="tide-text-span">Change Password</span>
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
    )
}

export default ChangePassword;