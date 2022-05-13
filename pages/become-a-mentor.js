import React from "react";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import Head from "next/head";
import Layout from "/src/layouts/main";
import { useQuery } from "@apollo/client";
import NumberFormat from "react-number-format";

// Data
import mentorBanner from "/src/assets/images/hero/mentorBanner.jpg";
import { GET_COUNTS, GET_COUNTS_QUERY } from "../data/queries/mentors";
import { ALL_MENTORS_COUNT } from "/data/queries/mentors";
import { NEW_MENTORS } from "../data/queries/mentors";

const BecomeMentor = (props) => {
  const { data } = useQuery(ALL_MENTORS_COUNT);

  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <title>Become a Mentor | Designed.org</title>
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
      <div className="header-wrapper">
        <div className="header-content">
          <h1>Mentoring changes everything.</h1>
          <p>
            Our global network of{" "}
            {
              <NumberFormat
                value={data?.user_profiles_aggregate?.aggregate?.count || "-"}
                displayType="text"
                thousandSeparator={true}
              />
            }{" "}
            design mentors are here to help coach and encourage you to build the
            creative career you've always wanted.
          </p>
        </div>
      </div>
      <div className="console-new mentors-page">
        <div className="podcasts">
          <div className="podcast-featured">
            <div className="featured-banner-wrapper mentor-offset">
              <div className="featured-mentorBanner">
                <Image
                  loader={imageLoader}
                  src={mentorBanner}
                  layout="fill"
                  objectFit="cover"
                  className="featured-mentorBanner"
                />
              </div>
              <div className="banner-credit">
                Photo by{" "}
                <a
                  href="https://www.flickr.com/photos/wocintechchat"
                  target="_blank"
                >
                  #WOCinTech Chat
                </a>
              </div>
            </div>
            <h5 className="mb-3">Join our global team of mentors</h5>
            <p className="mb-3">
              Mentoring is more than the transfer of advice, knowledge and
              insights. The relationship offers reciprocal benefits for mentors
              willing to invest their time in developing another aspiring
              designer. Aside from the personal satisfaction of helping others,
              being involved in mentoring also provides many tangible benefits
              that can reward mentors professionally.
            </p>
            <p>
              <ul className="list mb-3">
                <li>Recognition as a subject matter expert and leader</li>
                <li>Exposure to fresh perspectives, ideas and approaches</li>
                <li>Opportunity to reflect on their own goals and practices</li>
                <li>
                  Development of their personal leadership and coaching styles
                </li>
              </ul>
            </p>
            <Link href="/join">
              <a className="button primary">Apply Today</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="website">
        <div className="container mt-8 mb-7 ta-c network-reach">
          <h3 className="mb-4 mt-6">Our Mentors Reach & Impact</h3>
          <div className="container-fluid network-impact">
            <div className="row">
              <div className="col-md-2">
                Over{" "}
                <span>
                  <NumberFormat
                    value={props?.COUNTS?.user_profiles[0]?.total_mentors || "-"}
                    displayType="text"
                    thousandSeparator={true}
                  />
                </span>{" "}
                mentors
              </div>
              <div className="col-md-2">
                in <span>{props?.COUNTS?.user_profiles[0]?.total_countries || "-"}</span> countries
              </div>
              <div className="col-md-2">
                across <span>{props?.COUNTS?.user_profiles[0]?.total_timezones || "-"}</span> time zones
              </div>
              <div className="col-md-2">
                speaking <span>94</span> languages
              </div>
              <div className="col-md-2">
                covering <span>300+</span> topic areas
              </div>
              <div className="col-md-2 impact">
                helping <span>
				{
					<NumberFormat
					value={props?.COUNTS?.user_profiles[0]?.total_users || "-"}
					displayType="text"
					thousandSeparator={true}
				  />
				}
				</span> mentees
              </div>
            </div>
          </div>
        </div>
        <div className="mentor-section">
          <div className="container mt-5 ta-c">
            <h2>Meet Some Mentors</h2>
            <p className="mb-2">
              Our diverse network of mentors work for some of the best companies
              and agencies around the world.
            </p>
            <div className="centered mb-4">
              <div className="container">
                <div className="row">
				{props.newMentors.user_profiles.slice(0,8).map((mentor, i) => (
                    <div className="col-md-3" key={i+1}>
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
        <div className="container small mt-6">
          <h2 className=" mb-s ta-c">Interested to become a mentor?</h2>
          <p className="mb-s">
            We are the fastest growing design education non-profit, but we need
            your help! Designed.org relies on amazing individuals who are
            willing to give their time to help others pursue their passion for
            design, and build a meaningful career that can support their future
            and the future of their loved ones. What are you waiting for, apply
            today!{" "}
          </p>
          <Link href="/join">
            <a className="button primary center" target="_blank">
              Apply to become a mentor!
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default BecomeMentor;

export async function getStaticProps() {
	const newMentors = await NEW_MENTORS();
	//console.log("newMentors", newMentors)
	const COUNTS = await GET_COUNTS(GET_COUNTS_QUERY);
	console.log("counts: ", COUNTS)
	return {
	  props: {
		newMentors,
		COUNTS
	  },
	};
  }