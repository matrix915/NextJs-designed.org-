import React from "react";
import Image from "next/image";
import imageLoader from "../../components/utilities/imageLoader";
import maskicon from "../../assets/icon/mark-icon.svg";

const AuthHeader = ({ headerTitle }) => {
    return (
        <>
            <a href="/" className="login-logo">
                <Image
                    className="login-logo"
                    src={maskicon}
                    loader={imageLoader}
                    layout="fill"
                />
            </a>
            <h1 className="mb-3">{headerTitle}</h1>
        </>
    )
}

export default AuthHeader;