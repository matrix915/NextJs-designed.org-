import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Layout from "/src/layouts/main";
import Head from "next/head";
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER_PROFILE } from "/data/queries/users";
import LeftMenu from "/src/components/left-menu";
import { UPDATE_USER_PROFILE } from "/data/mutations/users";
import { getUserID } from "/src/shared/user";
import ToastComponent from "/src/components/toast";

const schema = Yup.object().shape({
  is_available: Yup.string().required("Availability is required").nullable(),
});

const Mentoring = () => {
  const [getuser, setGetuser] = useState();
  const [update_users] = useMutation(UPDATE_USER_PROFILE);
  const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
    variables: { id: getUserID() },
  });

  useEffect(() => {
    const user = data?.users.find((val) => val?.id === getUserID());
    if (user) {
      const data = {
        is_available: user?.user_profile?.is_available?.toString(),
        online_booking: user?.user_profile?.online_booking,
      };
      Object.keys(data).map((key) => {
        setValue(key, data[key]);
      });
      setGetuser(user);
    }
  }, [data?.users]);

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
          variables: { ...getuser?.user_profile, ...value, id: getUserID() },
        });
      }
      toast.success(
        <ToastComponent
          title={"Profile updated successfully!"}
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
            <h3 className="mb-3">Mentoring Settings</h3>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-input">
                      <label>Are you currently available to mentor?</label>
                      <label className="control control--radio mt-3">
                        Yes (Profile will be public)
                        <input
                          type="radio"
                          name="availableGroup"
                          value={true}
                          {...register("is_available")}
                        />
                        <div className="control__indicator" />
                      </label>
                      <label className="control control--radio">
                        No (Profile will be hidden)
                        <input
                          type="radio"
                          name="availableGroup"
                          value={false}
                          {...register("is_available")}
                        />
                        <div className="control__indicator" />
                      </label>
                    </div>
                    <span className="text-danger">
                      {errors?.is_available?.message}
                    </span>
                  </div>
                </div>

                <hr className="mt-3 mb-4" />
                <div className="row">
                  <div className="col-md-12">
                    <h4>Instant Booking</h4>
                    <p className="light-p">
                      We now offer the ability to link to any online booking
                      system you may use to manage your calendar. The link to
                      book online will show up on your profile page and lead
                      potential mentees directly to your scheduling site.
                    </p>
                    <p>
                      <span>We highly recommend using Calendly, </span>
                      <a href="https://calendly.com/" target="_blank">
                        sign up for free!
                      </a>
                    </p>
                    <div className="form-input mt-3">
                      <label>Online Booking URL:</label>
                      <input
                        type="text"
                        name="booking-url"
                        placeholder="https://calendly.com/username"
                        {...register("online_booking")}
                      />
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

export default Mentoring;
