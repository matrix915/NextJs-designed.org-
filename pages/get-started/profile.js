import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_USER_PROFILE, CHECK_USERNAME } from "/data/queries/users";
import { UPDATE_USER_PROFILE, UPDATE_USER_PROFILE_IMAGE } from "/data/mutations/users";
import { getUserID } from "/src/shared/user";
import Link from "next/link";

// Page Images
import AuthHeader from "/src/components/auth/authHeader";
import AuthPageMedia from "/src/components/auth/auth_page_media";
import Profile from "/src/components/profile";
import imageLoader from "/src/components/utilities/imageLoader";
import { onChangeImage } from "../../src/components/profile";
import { UserContext } from "../../src/hooks/useUserProfile";

const schema = Yup.object().shape({
  avatar_url: Yup.string().required(),
  first_name: Yup.string().required("First name is required").nullable(),
  last_name: Yup.string().required("Last name is required").nullable(),
  username: Yup.string()
    .min(5, "Username must be at least 5 characters")
    .required("Username is required")
    .nullable(),
  gender: Yup.string().required("Gender is required").nullable(),
});

const OnboardingStep2 = () => {
  const router = useRouter();
  const [getuser, setGetuser] = useState();
  const [newUsername, setNewUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("https://imagedelivery.net/Biz-7_vJO6O8Q9HnNqYfHg/ce4cf9e7-d014-4e83-e449-f34429ae5100/landscape");
  const [usernameAvailable, setUsernameAvailable] = useState("");
  const [usernameStatus, setUsernameStatus] = useState(false);
  const { getLatestUserdetails } = useContext(UserContext);
  const [update_user_profiles] = useMutation(UPDATE_USER_PROFILE);
  const [update_user_image] = useMutation(UPDATE_USER_PROFILE_IMAGE);
  const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
    variables: { id: getUserID() },
  });
  const [
    getUsername,
    {
      data: checkUsername,
      error: checkUsernameError,
      loading: checkLoadingError,
    },
  ] = useLazyQuery(CHECK_USERNAME, { variables: { username: newUsername } });

  useEffect(() => {
    const user = data?.users?.find((val) => val?.id === getUserID());
    if (user) {
      const data = {
        avatar_url: user?.user_profile?.avatar_url,
        first_name: user?.user_profile?.first_name,
        last_name: user?.user_profile?.last_name,
        username: user?.user_profile?.username,
        gender: user?.user_profile?.gender,
      };
      Object.keys(data).map((key) => {
        setValue(key, data[key]);
      });
      setGetuser(user);
      setUsernameStatus(user?.user_profile?.username ? true : false)
      setNewUsername(user?.user_profile?.username);
      setAvatarUrl(user?.user_profile?.avatar_url);
    }
  }, [data?.users]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const username = register("username", { required: true });

  const handleUsername = async (name) => {
    if (name?.length >= 5 && name !== getuser?.user_profile?.username) {
      const findusername = await getUsername({
        variables: { username: name },
      });
      const getStatus = findusername?.data?.user_profiles?.some(
        (val) => val?.username === name
      );
      if (getStatus) {
        setUsernameAvailable(<span className="text-danger">Sorry, {name} is not available</span>);
        setUsernameStatus(false)
      }
      else {
        setUsernameAvailable(<span className="text-success"> The username {name} is available!</span>)
        setUsernameStatus(true)
      }
    }
  }

  const onSubmitHandler = async (value) => {
    if (value && usernameStatus) {
      if (getuser) {
        await update_user_profiles({
          variables: { ...getuser?.user_profile, ...value, id: getUserID() },
        });
      }
      refetch();
      router.push("/get-started/location");
    }
  };

  const onSubmitImageUpload = async ({ imageUrl }) => {
    await update_user_image({ variables: { id: getUserID(), avatar_url: imageUrl } });
  }

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Get Started | Designed.org</title>
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
      <div className="auth-wrapper">
        <div className="designed-auth">
          <div className="auth-container">
            <div className="auth-container-wrapper">
              <AuthHeader headerTitle="Your Profile Basics" />
              <div className="container-fluid">
                <Profile imageLoader={imageLoader} fileId={avatarUrl} onChangeImage={(image) => onChangeImage(image, setValue, "avatar_url", setAvatarUrl, getLatestUserdetails, onSubmitImageUpload)} />
                <div className="row  mt-2">
                  <div className="col-md-6">
                    <div className="form-input">
                      <label>First Name</label>
                      <input
                        type="text"
                        autocomplete="off"
                        name="firstname"
                        data-name="first-name"
                        placeholder="Jane"
                        {...register("first_name")}
                      />
                      <span className="text-danger">
                        {errors?.first_name?.message}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input">
                      <label>Last Name</label>
                      <input
                        type="text"
                        autocomplete="off"
                        name="lastname"
                        data-name="last-name"
                        placeholder="Smith"
                        {...register("last_name")}
                      />
                      <span className="text-danger">
                        {errors?.last_name?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-input">
                      <label className="mb-3">Your Username</label>
                      <input
                        type="text"
                        autoComplete="off"
                        name="username"
                        placeholder="Username"
                        {...username}
                        onChange={(e) => {
                          username.onChange(e);
                          handleUsername(e.target.value);
                        }}
                      />
                      <span className="text-danger">
                        {errors?.username?.message}
                      </span>
                      <div className="portfolio-link">
                        {!errors?.username?.message && usernameAvailable}
                        <br />
                        {getuser?.user_profile?.is_mentor && (
                          <>
                            <span>Your Designed URL is </span>
                            <a href="http://designed.org/" target="_blank">
                              http://designed.org/mentors/
                              {getuser?.user_profile?.username
                                ? getuser?.user_profile?.username
                                : "username"}
                            </a>
                          </>
                        )}
                      </div>
                      <div className="portfolio-link">
                        Please note, any changes to your profile can take up to
                        2 hours to show.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <div className="form-input">
                      <label>Gender</label>
                      <div className="form-group radio">
                        <label className="control control--radio inline">
                          Female
                          <input
                            type="radio"
                            name="genderGroup"
                            data-name="gender-group"
                            value="Female"
                            {...register("gender")}
                          />
                          <div className="control__indicator" />
                        </label>
                        <label className="control control--radio inline">
                          Male
                          <input
                            type="radio"
                            name="genderGroup"
                            data-name="gender-group"
                            value="Male"
                            {...register("gender")}
                          />
                          <div className="control__indicator" />
                        </label>
                        <label className="control control--radio inline">
                          Non-binary
                          <input
                            type="radio"
                            name="genderGroup"
                            data-name="gender-group"
                            value="Non-binary"
                            {...register("gender")}
                          />
                          <div className="control__indicator" />
                        </label>
                        <span className="text-danger">
                          {errors?.gender?.message}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-panel mt-4">
                <Link href="/get-started/intro/">
                  <a
                    data-name="previous-step"
                    className="button link no-h-padding left"
                  >
                    <span>Previous</span>
                  </a>
                </Link>
                <a
                  data-name="next-step"
                  className="button right primary svg right"
                  onClick={handleSubmit(onSubmitHandler)}
                >
                  <span>Next: Location</span>
                  <svg
                    className="right"
                    viewBox="0 0 27 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5833 8.62655L17.5145 0.557696C16.7709 -0.185899 15.5317 -0.185899 14.7881 0.557696C14.0445 1.30129 14.0445 2.54049 14.7881 3.28408L19.5525 8.07572H1.92766C0.853652 8.07572 0 8.92938 0 10.0034C0 11.0774 0.853652 11.931 1.92766 11.931H19.5525L14.7881 16.6952C14.0445 17.4388 14.0445 18.678 14.7881 19.4216C15.1736 19.8071 15.6694 20 16.165 20C16.6606 20 17.1564 19.8071 17.542 19.4216L25.5833 11.3803C25.9414 11.0222 26.1617 10.5266 26.1617 10.0033C26.1617 9.48005 25.9688 8.98445 25.5833 8.6264L25.5833 8.62655Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <AuthPageMedia />
        </div>
      </div>
    </>
  );
};

export default OnboardingStep2;
