import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
// Page Images
import { N_HOST_CLIENT } from "../../constants/nHost";
import AuthHeader from "./authHeader";
import AuthPageMedia from "./auth_page_media";
import { MessageToast } from "../utilities/base";

const Verify = () => {
    const router = useRouter();
    const [isResentMail, setIsResentMail] = useState(false);
    const handleEmailResend = async () => {
        if (router.query.email) {
            const res = await N_HOST_CLIENT.auth.sendVerificationEmail({ email: router.query.email });
            if (!res.error){
                MessageToast("success", "Email sent successfully");
                setIsResentMail(true)
            }
            else
                MessageToast("error", res.error.message)
        }
    }
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>Designed.org - Verify Email</title>
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
                <meta name="twitter:creator" content="@simpson" />
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
                            <AuthHeader headerTitle="Check your email" />
                            <p className="ta-c">
                                Please check your email for the confirmation link we sent
                                to you. Our account verification helps prevent
                                unauthorized accounts from being created. If you didn't
                                receive an email, please check your junk folder and make
                                sure it isn't being blocked.
                            </p>
                            <br />
                            {/* Add the ability to resend verification email */}
                           {!isResentMail ? <button className="button full-width link " onClick={handleEmailResend}>
                                <a href="#" className="ta-c">
                                    Resend Email Verification
                                </a>
                            </button> : <p className="text-center" >Email Resent</p>}

                            {/* After the user clicks the button switch to this message */}

                            <p className="meta-signup mt-5">
                                Need help? <Link href="/signup">Chat with us!</Link>
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

export default Verify