import React from "react";
import Head from "next/head";
import LeftMenu from "/src/components/left-menu";
import Layout from "/src/layouts/main";

const Donations = () => {
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
          <div className="right-window small full-height">
            <div className="fixed-content big">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="mb-3 subtle">
                      Donation History on Donorbox
                    </h5>
                    <div className="base-card table">
                      <table className="rwd-table">
                        <tr className="header">
                          <th>ID</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Method</th>
                          <th>Type</th>
                        </tr>
                        <tr className="subtle">
                          <td data-th="ID" colSpan="5">
                            You have not made any donations yet {":("}
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <h5 className="ta-c mt-5">
                  Check out our <a href="/donate">donations page</a> to learn
                  more about how you <br /> can support Designed by making
                  tax-free donations!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donations;
