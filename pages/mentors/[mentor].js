import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getUser } from "/src/shared/user";
import Head from "next/head";
import Layout from "/src/layouts/main";
import moment from "moment";
import { useQuery } from "@apollo/client";

// Import Custom Component
import { languages } from "/src/constants/languages";
import { allcountry } from "/src/constants/allcountry";
import SendMessageModal from "../../src/components/mentors/message_mentor";
import {
  GET_MENTOR_PROFILE,
  GET_MENTOR,
  ALL_MENTORS_PROFILE,
} from "../../data/queries/mentors";
import { USER_EMAIL_DATA } from "../../data/queries/users";
import { MENTEE_EMAIL_DATA } from "../../data/queries/mentors";

function MentorPage(props) {
  const { mentor } = props;
  const [user, setUser] = useState(false);
  const [languageList, setLanguageList] = useState("");
  const [countryList, setCountryList] = useState("");
  const { data } = useQuery(MENTEE_EMAIL_DATA, {
    variables: { id: user?.id },
  });

  const fetchData = async () => {
    const result = await getUser();

    if (result) {
      setUser(JSON.parse(result));
    }
  };

  useEffect(() => {
    fetchData();
    for (const value of mentor.languages.values()) {
      setLanguageList(languages.find((data) => data.value === value)?.label);
    }
  }, []);

  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <title>
          Meet {mentor.first_name} {mentor.last_name} | Designed.org
        </title>
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
        <meta
          name="twitter:title"
          content={
            "Meet " +
            mentor.first_name +
            " " +
            mentor.last_name +
            " | a mentor at Designed.org"
          }
        />
        <meta
          name="twitter:url"
          content={"https://designed.org/mentors/" + mentor.username}
        />
        <meta
          name="twitter:description"
          content="We empower the designers of tomorrow through educational tools and mentoring."
        />
        <meta name="twitter:site" content="@joindesigned" />
        <meta name="twitter:creator" content="@joindesigned" />
        <meta name="twitter:image" content={mentor.avatar_url} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={
            "Meet " +
            mentor.first_name +
            " " +
            mentor.last_name +
            " | a mentor at Designed.org"
          }
        />
        <meta
          property="og:description"
          content="We empower the designers of tomorrow through educational tools and mentoring."
        />
        <meta
          property="og:url"
          content={"https://designed.org/mentors/" + mentor.username}
        />
        <meta property="og:site_name" content="Designed.org" />
        <meta property="og:image" content={mentor.avatar_url} />
      </Head>

      <div className="portfolio">
        <div className="portfolio-header">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb">
              <Link href="/">
                <a href="#">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </a>
              </Link>
              <span>
                <svg
                  className="text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <a href="/our-mentors">Our Mentors</a>
              <span>
                <svg
                  className="text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <div className="d-ib">
                {mentor.first_name} {mentor.last_name}
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-body">
          <div className="main-profile">
            <div className="basic-information">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <div className="portfolio-avatar-placeholder">
                      <Image
                        src={mentor.avatar_url}
                        className="portfolio-avatar-placeholder"
                        layout="fill"
                        objectFit="cover"
                        alt={mentor.first_name}
                      />
                      <div className="availability-tag available">
                        Mentor Available
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h5 className="meet">Meet</h5>
                    <h1>
                      {mentor.first_name} {mentor.last_name}
                    </h1>
                    <h2>
                      {mentor.job_title} @ {mentor.job_employer}
                    </h2>
                    <div className="social-icons">
                      {mentor.social_facebook && (
                        <a
                          href={`http://facebook.com/${mentor.social_facebook}`}
                          target="_blank"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="mentor-social-icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Facebook</title>
                            <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                          </svg>
                        </a>
                      )}
                      {mentor.social_twitter && (
                        <a
                          href={`http://twitter.com/${mentor.social_twitter}`}
                          target="_blank"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="mentor-social-icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Twitter</title>
                            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                          </svg>
                        </a>
                      )}
                      {mentor.social_instagram && (
                        <a
                          href={`http://instagram.com/${mentor.social_instagram}`}
                          target="_blank"
                        >
                          <svg
                            role="img"
                            className="mentor-social-icon"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Instagram</title>
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                          </svg>
                        </a>
                      )}
                      {mentor.social_linkedin && (
                        <a
                          href={`https://www.linkedin.com/in/${mentor.social_linkedin}`}
                          target="_blank"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="mentor-social-icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>LinkedIn</title>
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {mentor.social_medium && (
                        <a
                          href={`http://medium.com/${mentor.social_medium}`}
                          target="_blank"
                        >
                          <svg
                            svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="mentor-social-icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z" />
                          </svg>
                        </a>
                      )}
                      {mentor.social_pinterest && (
                        <a
                          href={`http://pinterest.com/${mentor.social_pinterest}`}
                          target="_blank"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="mentor-social-icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Pinterest</title>
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                          </svg>
                        </a>
                      )}
                      {mentor.social_youtube && (
                        <a
                          href={`http://youtube.com/${mentor.social_youtube}`}
                          target="_blank"
                        >
                          <svg
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mentor-social-icon"
                            viewBox="0 0 24 24"
                          >
                            <title>YouTube</title>
                            <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                          </svg>
                        </a>
                      )}
                      {mentor.social_dribbble && (
                        <a
                          href={`http://dribbble.com/${mentor.social_dribbble}`}
                          target="_blank"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="mentor-social-icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Dribbble</title>
                            <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                          </svg>
                        </a>
                      )}
                      {mentor.social_producthunt && (
                        <a
                          href={`http://producthunt.com/${mentor.social_producthunt}`}
                          target="_blank"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="mentor-social-icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Product Hunt</title>
                            <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z" />
                          </svg>
                        </a>
                      )}
                    </div>
                    {mentor.website && (
                      <div className="portfolio-website">
                        <h5 className="d-ib website">
                          <a href={`https://${mentor.website}`} target="_blank">
                            {mentor.website}
                          </a>
                        </h5>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-section">
              <h2>About Me</h2>
              <p>{mentor.about}</p>
            </div>
            <div className="portfolio-section">
              <h2 className="mb-3">My Skills</h2>
              <ul className="mentor-tags">
                {mentor?.topics?.map((item) => (
                  <li className="big">{item}</li>
                ))}
              </ul>
            </div>
            <div className="portfolio-section">
              <h2>My Career</h2>
              <ul className="portfolio-table">
                <li>
                  <span className="title">{mentor.job_title}</span>
                  <span className="employer">{mentor.job_employer}</span>
                  <span className="employment-date current">Current</span>
                </li>
              </ul>
            </div>
            <div className="portfolio-section">
              <h2 className="mb-3">My Details</h2>
              <div className="flexBox">
                <div className="splitBox">
                  {mentor.country && (
                    <>
                      <h5 className="mt-3">Country</h5>
                      <ul className="simple-tags">
                        <li>{mentor.country}</li>
                      </ul>
                    </>
                  )}

                  {mentor.languages && (
                    <>
                      <h5 className="mt-3">Languages</h5>
                      <ul className="simple-tags">
                        <li>{languageList} </li>
                      </ul>
                    </>
                  )}

                  {mentor.years_of_experience && (
                    <>
                      <h5 className="mt-3">Years of Experience</h5>
                      <ul className="simple-tags">
                        <li>{mentor.years_of_experience} years</li>
                      </ul>
                    </>
                  )}
                </div>
                <div className="splitBox">
                  {mentor.timezone && (
                    <>
                      <h5>Timezone</h5>
                      <ul className="simple-tags">
                        <li>{mentor.timezone}</li>
                      </ul>
                    </>
                  )}
                  {mentor.created_at && (
                    <>
                      <h5 className="mt-3">Member Since</h5>
                      <ul className="simple-tags">
                        <li>
                          {moment(mentor.created_at).format("MMMM D, YYYY")}
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="hide">
              <div className="portfolio-section">
                <h2>My Education</h2>
                <ul className="portfolio-table">
                  <li>
                    <span className="title">Boston College</span>
                    <span className="employer">Bachelor of Arts</span>
                    <span className="employment-date current">
                      Graduated 2004
                    </span>
                  </li>
                </ul>
              </div>
              <div className="ff">
                <div className="portfolio-section">
                  <h2 className="mb-3">My Impact</h2>
                  <div className="container-fluid mentee-avatar-grid hide">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="mentee-avatar">
                          <div className="avatar large">
                            <Image
                              src="https://assets.designed.org/avatars/networking/184e3f23-f7f0-4ee0-a057-5a0acf10ea27/avatar.jpg"
                              className="avatar large"
                              layout="fill"
                              objectFit="cover"
                              alt="David Simpson"
                            />
                          </div>
                          <span>David Simpson</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mentee-avatar">
                          <div className="avatar large">
                            <Image
                              src="https://assets.designed.org/avatars/networking/184e3f23-f7f0-4ee0-a057-5a0acf10ea27/avatar.jpg"
                              className="avatar large"
                              layout="fill"
                              objectFit="cover"
                              alt="David Simpson"
                            />
                          </div>
                          <span>David Simpson</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mentee-avatar">
                          <div className="avatar large">
                            <Image
                              src="https://assets.designed.org/avatars/networking/184e3f23-f7f0-4ee0-a057-5a0acf10ea27/avatar.jpg"
                              className="avatar large"
                              layout="fill"
                              objectFit="cover"
                              alt="David Simpson"
                            />
                          </div>
                          <span>David Simpson</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mentee-avatar">
                          <div className="avatar large">
                            <Image
                              src="https://assets.designed.org/avatars/networking/184e3f23-f7f0-4ee0-a057-5a0acf10ea27/avatar.jpg"
                              className="avatar large"
                              layout="fill"
                              objectFit="cover"
                              alt="David Simpson"
                            />
                          </div>
                          <span>David Simpson</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mentee-avatar">
                          <div className="avatar large">
                            <Image
                              src="https://assets.designed.org/avatars/networking/184e3f23-f7f0-4ee0-a057-5a0acf10ea27/avatar.jpg"
                              className="avatar large"
                              layout="fill"
                              objectFit="cover"
                              alt="David Simpson"
                            />
                          </div>
                          <span>David Simpson</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mentee-avatar">
                          <div className="avatar large">
                            <Image
                              src="https://assets.designed.org/avatars/networking/184e3f23-f7f0-4ee0-a057-5a0acf10ea27/avatar.jpg"
                              className="avatar large"
                              layout="fill"
                              objectFit="cover"
                              alt="David Simpson"
                            />
                          </div>
                          <span>David Simpson</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mentee-avatar">
                          <div className="avatar large">
                            <Image
                              src="https://assets.designed.org/avatars/networking/184e3f23-f7f0-4ee0-a057-5a0acf10ea27/avatar.jpg"
                              className="avatar large"
                              layout="fill"
                              objectFit="cover"
                              alt="David Simpson"
                            />
                          </div>
                          <span>David Simpson</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mentee-avatar">
                          <div className="avatar large">
                            <Image
                              src="https://assets.designed.org/avatars/networking/184e3f23-f7f0-4ee0-a057-5a0acf10ea27/avatar.jpg"
                              className="avatar large"
                              layout="fill"
                              objectFit="cover"
                              alt="David Simpson"
                            />
                          </div>
                          <span>David Simpson</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="mt-4">2 Reviews</h5>
                  <div className="review">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam vitae tortor vel mi volutpat laoreet ut at urna. Cras
                      tempus mi lorem, quis facilisis orci placerat et. Nulla
                      ornare tellus sit amet arcu elementum suscipit. Class
                      aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos himenaeos. Nunc vehicula dolor
                      fringilla enim pharetra, ac ultrices nunc elementum.
                      Phasellus dictum sed dui viverra tempor.
                    </p>
                    <br />
                    <div className="avatar large">
                      <Image
                        src="https://assets.designed.org/avatars/networking/184e3f23-f7f0-4ee0-a057-5a0acf10ea27/avatar.jpg"
                        className="avatar large"
                        layout="fill"
                        objectFit="cover"
                        alt="David Simpson"
                      />
                    </div>
                    <div className="review-author">
                      <span className="author-name">David Simpson</span>
                      <span>May 2020</span>
                    </div>
                  </div>
                  <div className="review">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam vitae tortor vel mi volutpat laoreet ut at urna. Cras
                      tempus mi lorem, quis facilisis orci placerat et. Nulla
                      ornare tellus sit amet arcu elementum suscipit. Class
                      aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos himenaeos. Nunc vehicula dolor
                      fringilla enim pharetra, ac ultrices nunc elementum.
                      Phasellus dictum sed dui viverra tempor.
                    </p>
                    <br />
                    <div className="avatar large">
                      <Image
                        src="https://assets.designed.org/avatars/networking/184e3f23-f7f0-4ee0-a057-5a0acf10ea27/avatar.jpg"
                        className="avatar large"
                        layout="fill"
                        objectFit="cover"
                        alt="David Simpson"
                      />
                    </div>
                    <div className="review-author">
                      <span className="author-name">David Simpson</span>
                      <span>May 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-profile">
            {user ? (
              <div className="mentor-contact-box loggedIn">
                <h3>Connect with {mentor.first_name}</h3>
                <p>
                  We are excited about you wanting to connect with this mentor!
                  Here are some things to keep in mind:
                </p>
                <ul className="mentor-rules">
                  <li>Be polite at all times</li>
                  <li>Not every mentor is right for every mentee</li>
                  <li>
                    The mentor is providing you with their time, please be
                    respectful of their generosity
                  </li>
                </ul>
                {mentor.online_booking && (
                  <a href={mentor.online_booking} target="_blank">
                    <a className="button donate full-width mt-3">
                      <svg
                        className="left"
                        viewBox="0 0 17 17"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.99194 9.87889L8.1675 9.2225L4.8355 16.4806L13.3827 6.25128L8.01355 6.93128L10.1877 0.468445L2.99194 9.87889Z"
                        />
                      </svg>
                      <span>Book Online</span>
                    </a>
                  </a>
                )}
                <SendMessageModal mentor={mentor} user={data?.users[0]} />
              </div>
            ) : (
              <div className="mentor-contact-box">
                <h3>
                  Are you interested to be mentored by {mentor.first_name}?
                </h3>
                <p>
                  To connect with this mentor please login to your account or
                  sign up for a new account,{" "}
                  <strong>it is completely free!</strong>
                </p>
                <p>
                  Designed.org is a 501(c)(3) non-profit charity that is focused
                  on empowering designers around the world.
                </p>
                <br />
                <Link href="/login">
                  <a className="button primary full-width mt-3">Login</a>
                </Link>
                <Link href="/join">
                  <a className="button primary full-width mt-3">Join Us</a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MentorPage;

export async function getStaticProps({ params }) {
  // let host = req ? req.headers.host : window.location.host;
  // let host = "http://localhost:3000"
  let response = await GET_MENTOR(params.mentor);

  return {
    props: {
      mentor: {
        ...response.users[0].user_profile,
        email: response.users[0].email,
      },
    },
  };
}

export async function getStaticPaths(context) {
  // used custormized function for getting all mentors on profile page
  const res = await ALL_MENTORS_PROFILE();
  let mentors = res.user_profiles.map((data) => data.username);
  const paths = mentors.map((mentor) => {
    return {
      params: {
        mentor,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
