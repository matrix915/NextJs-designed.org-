import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { getUserID } from "/src/shared/user";
import Head from "next/head";
import Layout from "/src/layouts/main";
import LeftMenu from "/src/components/left-menu";
import { GET_USER_PROFILE } from "/data/queries/users";
import { UPDATE_USER_PROFILE } from "/data/mutations/users";
import ToastComponent from "/src/components/toast";

const Social = () => {
  const [getuser, setGetuser] = useState();

  const [update_users] = useMutation(UPDATE_USER_PROFILE);
  const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
    variables: { id: getUserID() },
  });

  useEffect(() => {
    const user = data?.users.find((val) => val?.id === getUserID());
    if (user) {
      const data = {
        social_twitter: user?.user_profile?.social_twitter,
        social_facebook: user?.user_profile?.social_facebook,
        social_linkedin: user?.user_profile?.social_linkedin,
        social_dribbble: user?.user_profile?.social_dribbble,
        social_behance: user?.user_profile?.social_behance,
        social_github: user?.user_profile?.social_github,
        social_pinterest: user?.user_profile?.social_pinterest,
        social_instagram: user?.user_profile?.social_instagram,
        social_medium: user?.user_profile?.social_medium,
        social_slideshare: user?.user_profile?.social_slideshare,
        social_youtube: user?.user_profile?.social_youtube,
        social_codepen: user?.user_profile?.social_codepen,
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
  } = useForm();

  const onSubmitHandler = async (value) => {
    if (value) {
      if (getuser) {
        await update_users({
          variables: { ...getuser?.user_profile, ...value, id: getUserID() },
        });
      }
      toast.success(
        <ToastComponent
          title={"Social accounts update successfully!"}
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
            <div className="social-card">
              <div className="fixed-content small">
                <h3>Social Profiles</h3>
                <p>
                  Share your online profiles so the community can get to know
                  you!
                </p>
                <div className="form-input mt-3">
                  <label>Twitter</label>
                  <div className="form-group">
                    <div className="form-add-on">http://twitter.com/</div>
                    <input
                      type="text"
                      className="inline"
                      name="twitter"
                      placeholder="username"
                      {...register("social_twitter")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Facebook</label>
                  <div className="form-group">
                    <div className="form-add-on">http://facebook.com/</div>
                    <input
                      type="text"
                      className="inline"
                      name="facebook"
                      placeholder="username"
                      {...register("social_facebook")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>LinkedIn</label>
                  <div className="form-group">
                    <div className="form-add-on">http://linkedin.com/in/</div>
                    <input
                      type="text"
                      className="inline"
                      name="linkedin"
                      placeholder="username"
                      {...register("social_linkedin")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Dribbble</label>
                  <div className="form-group">
                    <div className="form-add-on">http://dribbble.com/</div>
                    <input
                      type="text"
                      className="inline"
                      name="dribbble"
                      placeholder="username"
                      {...register("social_dribbble")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Behance</label>
                  <div className="form-group">
                    <div className="form-add-on">http://behance.net/</div>
                    <input
                      type="text"
                      className="inline"
                      name="behance"
                      placeholder="username"
                      {...register("social_behance")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Github</label>
                  <div className="form-group">
                    <div className="form-add-on">http://github.com/</div>
                    <input
                      type="text"
                      className="inline"
                      name="userName"
                      placeholder="username"
                      {...register("social_github")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Pinterest</label>
                  <div className="form-group">
                    <div className="form-add-on">http://pinterest.com/</div>
                    <input
                      type="text"
                      className="inline"
                      name="userName"
                      placeholder="username"
                      {...register("social_pinterest")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Instagram</label>
                  <div className="form-group">
                    <div className="form-add-on">http://instagram.com/</div>
                    <input
                      type="text"
                      className="inline"
                      name="userName"
                      placeholder="username"
                      {...register("social_instagram")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Medium</label>
                  <div className="form-group">
                    <div className="form-add-on">http://medium.com/</div>
                    <input
                      type="text"
                      className="inline"
                      name="userName"
                      placeholder="username"
                      {...register("social_medium")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Slideshare</label>
                  <div className="form-group">
                    <div className="form-add-on">http://slideshare.com/</div>
                    <input
                      type="text"
                      className="inline"
                      name="userName"
                      placeholder="username"
                      {...register("social_slideshare")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Youtube</label>
                  <div className="form-group">
                    <div className="form-add-on">http://youtube.com/</div>
                    <input
                      type="text"
                      className="inline"
                      name="userName"
                      placeholder="username"
                      {...register("social_youtube")}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Codepen</label>
                  <div className="form-group">
                    <div className="form-add-on">http://codepen.com/</div>
                    <input
                      type="text"
                      className="inline"
                      name="userName"
                      placeholder="username"
                      {...register("social_codepen")}
                    />
                  </div>
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
    </Layout>
  );
};

export default Social;
