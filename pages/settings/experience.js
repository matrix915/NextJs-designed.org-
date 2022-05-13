import React, { useState, useEffect } from "react";
import MultiSelectTagList from "/src/helpers/TagList";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { useForm } from "react-hook-form";
import Layout from "/src/layouts/main";
import * as Yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import LeftMenu from "/src/components/left-menu";
import { GET_USER_PROFILE } from "/data/queries/users";
import { USER_TOPICS } from "/data/queries/topics";
import { UPDATE_USER_PROFILE } from "/data/mutations/users";
import { getUserID } from "/src/shared/user";
import ToastComponent from "/src/components/toast";

const schema = Yup.object().shape({
  years_of_experience: Yup.string()
    .required("Experience is required")
    .nullable(),
  job_title: Yup.string().required("Job title is required").nullable(),
});

const Experience = () => {
  const [getuser, setGetuser] = useState();
  const [areaOfExpertise, setAreaOfExpertise] = useState([]);
  const [topicslist, setTopicsList] = useState([]);

  const [update_users] = useMutation(UPDATE_USER_PROFILE);
  const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
    variables: { id: getUserID() },
  });
  const {
    data: topicList,
    error: topicerror,
    loading: topicloading,
    refetch: topicsRefetch,
  } = useQuery(USER_TOPICS);

  useEffect(() => {
    topicList?.user_topics.map((item) => {
      if (!topicslist?.some((val) => val?.value === item?.topic_name)) {
        topicslist.push({ label: item?.topic_name, value: item?.topic_name });
      }
    });
    const user = data?.users.find((val) => val?.id === getUserID());
    if (user) {
      const data = {
        years_of_experience: user?.user_profile?.years_of_experience,
        job_employer: user?.user_profile?.job_employer,
        job_title: user?.user_profile?.job_title,
      };
      Object.keys(data).map((key) => {
        setValue(key, data[key]);
      });
      setGetuser(user);
      setAreaOfExpertise(
        user?.user_profile?.topics?.map((val) =>
          topicslist?.find((x) => x?.value == val)
        )
      );
    }
  }, [data?.users, topicList?.user_topics]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (value) => {
    if (value) {
      if (getuser) {
        await update_users({
          variables: {
            ...getuser?.user_profile,
            ...value,
            topics: areaOfExpertise?.map((val) => val?.value),
            id: getUserID(),
          },
        });
      }
      toast.success(
        <ToastComponent
          title={"Experience update successfully!"}
          color="success"
        />,
        {
          autoClose: 3000,
          hideProgressBar: true,
          closeButton: false,
          position: "bottom-center",
        }
      );
      refetch();
    }
  };

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
            <div className="fixed-content small">
            <h3 className="mb-3">Experience</h3>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <h4>Areas of Expertise</h4>
                    <p>
                      To add topics to your profile for filtering, start typing
                      and hit return (enter) or click the result you want in the
                      typeahead search box.
                    </p>
                    <p>
                      <strong>You may enter up to 5 topics.</strong>
                    </p>
                    <div className="form-input mt-2 mb-3">
                      <MultiSelectTagList
                        optionsList={topicslist}
                        tagCreatable={true}
                        selectedValue={areaOfExpertise}
                        className="multiSelect"
                        handleSelectChange={(e) => setAreaOfExpertise(e)}
                      />
                    </div>
                  </div>
                </div>
                <hr className="mt-3 mb-4" />
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-input">
                      <label>How many years of experience do you have?</label>
                      <div className="form-group radio">
                        <label className="control control--radio inline">
                          Less than 3 years
                          <input
                            type="radio"
                            name="years_of_experience"
                            value="-3"
                            {...register("years_of_experience")}
                          />
                          <div className="control__indicator"></div>
                        </label>
                        <label className="control control--radio inline">
                          3-5 years
                          <input
                            type="radio"
                            name="years_of_experience"
                            value="3-5"
                            {...register("years_of_experience")}
                          />
                          <div className="control__indicator"></div>
                        </label>
                        <label className="control control--radio inline">
                          5-10 years
                          <input
                            type="radio"
                            name="years_of_experience"
                            value="5-10"
                            {...register("years_of_experience")}
                          />
                          <div className="control__indicator"></div>
                        </label>
                        <label className="control control--radio inline">
                          10-15 years
                          <input
                            type="radio"
                            name="years_of_experience"
                            value="10-15"
                            {...register("years_of_experience")}
                          />
                          <div className="control__indicator"></div>
                        </label>
                        <label className="control control--radio inline">
                          15+ years
                          <input
                            type="radio"
                            name="years_of_experience"
                            value="15+"
                            {...register("years_of_experience")}
                          />
                          <div className="control__indicator"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <span className="text-danger">
                    {errors?.years_of_experience?.message}
                  </span>
                </div>
                <hr className="mt-2 mb-4" />
                <div className="row">
                  <div className="col-md-12">
                    <h4>Work Experience</h4>
                    <div className="form-input mt-3">
                      <label>Where do you currently work?</label>
                      <input
                        type="text"
                        name="employer"
                        {...register("job_employer")}
                      />
                    </div>
                    <div className="form-input">
                      <label>What is your title?</label>
                      <input
                        type="text"
                        name="jobTitle"
                        {...register("job_title")}
                      />
                      <span className="text-danger">
                        {errors?.job_title?.message}
                      </span>
                    </div>
                    <button
                      className="button primary mt-3"
                      onClick={handleSubmit(onSubmitHandler)}
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
