import React from "react";
import Head from "next/head";
import LeftMenu from "/src/components/left-menu";
import Layout from "/src/layouts/main";

const Setting = () => {
  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <title>Designed.org - Settings </title>
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
      <div className="main-window center no-header">
        <div className="console">
          <LeftMenu />
          <div className="right-window small">
            <div className="action-panel">
              <h4 className="mb-2">
                <strong>Status:</strong> Not yet started.
              </h4>
              <p>This area will store future global account settings.</p>
              <p className="volunteer-yo">
                If you would like to volunteer time to help research, design,
                develop or test this feature please signup to volunteer here:{" "}
                <a
                  className="block mt-4"
                  href="https://s.designed.org/2OTyfJZ"
                  target="_blank"
                >
                  https://s.designed.org/2OTyfJZ
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Setting;
