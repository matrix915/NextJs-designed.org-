import React from "react";
import Head from "next/head";
import Script from "next/script";

import PageHeader from "../components/page_header";
import PageFooter from "../components/page_footer";

//import "../sass/framework.sass";
import fluidlogo from "../assets/images/designed-mark.png";
import maskicon from "../assets/icon/mark-icon.svg";
import favicon32 from "../assets/icon/favico/favicon-32x32.png";
import favicon16 from "../assets/icon/favico/favicon-16x16.png";
import appletouch from "../assets/icon/apple/apple-touch-icon.png";
import appletouch144 from "../assets/icon/apple/ios-ipad-144x144.png";
import appletouch114 from "../assets/icon/apple/ios-iphone-114x114.png";
import appletouch57 from "../assets/icon/apple/ios-default-homescreen-57x57.png";
import header from "../assets/images/hero/signup.svg";
import logo from "../assets/images/logo-mobile.svg";
import wordmark from "../assets/images/designed-wordmark-w.svg";
import UserProfileContext from "../hooks/useUserProfile";

const Layout = ({ pageTitle, children }) => (
	<>
		<Head>
			<meta charset="utf-8" />
			<meta name="keywords" content="#" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			<meta name="author" content="#" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="#" />
			<meta property="fb:app_id" content="230314244163874" />
			<meta name="p:domain_verify" content="fe207a93b02e49b481a7b4a76f13b4a8" />

			{/* Icons */}

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="theme-color" content="#ffffff" />

			<Script
				src="https://cdn.usefathom.com/script.js"
				site="AVEZACVL"
				strategy="afterInteractive"
			/>
		</Head>
		<div id="body">
			<Script type="text/javascript">{`
						{
							!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});
						}
					`}</Script>
			<Script type="text/javascript">{`
						{ 
							window.Beacon('init', 'cf3bfdd8-e7e2-4d08-960d-4469b6bbe122')
						}
					`}</Script>
			<UserProfileContext>
				<div className="platform">
					<div className="main-window web-fix">
						<div className="new-navigation light">
							<PageHeader pageTitle={pageTitle} />
						</div>
						{children}
					</div>
					<PageFooter />
				</div>
			</UserProfileContext>
		</div>
	</>
);

export default Layout;
