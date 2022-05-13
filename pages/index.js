import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import Layout from "/src/layouts/main";
import NumberFormat from "react-number-format";
import { useRouter } from "next/router";

// Page Images
import logos from "/src/assets/images/logos.png";
import header from "/src/assets/images/hero/learn.svg";

// Data
import { N_HOST_CLIENT } from "../src/constants/nHost";
import { NEW_MENTORS } from "../data/queries/mentors";
import { GET_COUNTS, GET_COUNTS_QUERY } from "../data/queries/mentors";


function getHashValue(key) {
  var matches = location.hash.match(new RegExp(key + "=([^&]*)"));
  return matches ? matches[1] : null;
}
const loginAsUser = () => {
	let user = N_HOST_CLIENT.auth.getUser();
	if (user) {
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem(
			"token",
			localStorage.getItem("nhostRefreshToken")
		);
		N_HOST_CLIENT.graphql.request(
			`
			mutation insertUser($object: user_profiles_insert_input!) {
				insert_user_profiles_one(object: $object) {
					id
				}
			}										
			`,
			{
				object: {
					id: user.id,
				},
			}
		)
		window.location.reload();
	}
}
const IndexPage = (props) => {
  const router = useRouter();
	const handleExternalLink = () => {
		let linkType = getHashValue("type");
		let refreshToken = getHashValue("refreshToken");
		console.log(refreshToken)
		if (linkType === "signinPasswordless") {
			router.push("/");
			setTimeout(() => {
				loginAsUser()
			}, 1000);
		}
		if(refreshToken && !linkType){
			router.push("/");
			setTimeout(() => {
				loginAsUser()
			}, 1000);
		}
	};
	useEffect(() => {
		handleExternalLink();
	}, []);
  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <title>Designed.org</title>
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
      <div className="website new-nav">
        <div className="app-page-header webby large">
          <div className="app-page-header-wrapper">
            <div className="container-fluid header-panel">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-12 header-info-wrapper">
                  <div className="header-info">
                    <h1>Design Education for all.</h1>
                    <p>
                      We are a <strong>501(c)(3) non-profit</strong>{" "}
                      organization building the only career growth platform
                      focused on providing equal access to educational resources
                      and mentors for designers across the world.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5 col-md-12">
                  <div className="illustration">
                    <Image loader={imageLoader} src={header} layout="fill" />
                    <div className="author-credit">
                      <a
                        href="http://dribbble.com/DarumaCreative"
                        target="_blank"
                      >
                        <strong>Credit</strong> Undraw
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container small mt-l">
          <h2 className="ta-c narrow mt-6">
            Our network of mentors come from some of the top design teams around
            the world!
          </h2>
          <br />
          <p className="ta-c mb-4 narrow">
            We already have over{" "}
            <span>
              <NumberFormat
                value={props?.COUNTS?.user_profiles[0]?.total_mentors || "-"}
                displayType="text"
                thousandSeparator={true}
              />
            </span>
            + amazing mentors available across the world. Sign up today to get
            access to our mentors, and soon we will have many more resources
            available.
          </p>
          <Image loader={imageLoader} className="logos mb-2" src={logos} />
        </div>
        <div className="mentor-section">
          <div className="container grid">
            <h2 className="ta-c mt-5">Meet some of our Mentors</h2>
            <br />
            <p className="ta-c narrow">
              We already have over{" "}
            <span>
              <NumberFormat
                value={props?.COUNTS?.user_profiles[0]?.total_mentors || "-"}
                displayType="text"
                thousandSeparator={true}
              />
            </span>+ amazing mentors available across the
              world. Sign up today to get access to our mentors, and soon we
              will have many more resources available.
            </p>
            <p className="ta-c narrow mt-3">
              <a href="/our-mentors">View all mentors</a>
            </p>
            <div className="centered">
              <div className="container mt-3">
                <div className="row">
                  {props.newMentors.user_profiles
                    .slice(0, 8)
                    .map((mentor, i) => (
                      <div className="col-md-3" key={i + 1}>
                        <article className="mentor-card">
                          <div className="portfolio-avatar-placeholder">
                            <Image
                              loader={imageLoader}
                              layout="fill"
                              objectFit="cover"
                              className="portfolio-avatar-placeholder"
                              src={`${mentor.avatar_url}`}
                              alt={`${mentor.first_name} ${mentor.last_name}`}
                            />
                          </div>
                          <div className="card-content">
                            <h3 className="ta-c">{`${mentor.first_name} ${mentor.last_name}`}</h3>
                            <p className="title">
                              <span className="title-header">{`${mentor.job_title}`}</span>
                              <span className="hide">KAX Media</span>
                              <span>{mentor.country}</span>
                            </p>
                          </div>
                        </article>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container small mt-6 mb-3">
          <h2 className="ta-c mb-3">Ready to get started?</h2>
          <p className="ta-c mb-3">
            Whether you are a long time designer looking to connect with the
            community and share your insights, or are a young designer who is
            looking for someone to help answer questions and potentially shape
            their career path, this is the place for you. The first step is to
            create an account and then we can get you connected!
          </p>
          <div className="free-box ta-c">
            <Link href="/join">
              <a className="button primary mt-3">Join us for free!</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const newMentors = await NEW_MENTORS();
  const COUNTS = await GET_COUNTS(GET_COUNTS_QUERY);
  return {
	  props: {
		newMentors,
		COUNTS
	  }
	};
}
