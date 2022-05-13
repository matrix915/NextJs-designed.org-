import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { getUserID } from "/src/shared/user";
import Head from "next/head";
import Layout from "/src/layouts/main";
import LeftMenu from "/src/components/left-menu";
import MultiSelectTagList from "/src/helpers/TagList";
import { languages } from "/src/constants/languages";
import { timezones } from "/src/constants/timezones";
import ReactFlagsSelect from "react-flags-select";
import { GET_USER_PROFILE } from "/data/queries/users";
import { UPDATE_USER_PROFILE } from "/data/mutations/users";
import ToastComponent from "/src/components/toast";

const schema = Yup.object().shape({
  city: Yup.string().required("City is required").nullable(),
  country_state: Yup.string().required("State/Region is required").nullable(),
});

const Social = () => {
  const [getuser, setGetuser] = useState();

  const [update_users] = useMutation(UPDATE_USER_PROFILE);
  const { data, error, loading, refetch } = useQuery(GET_USER_PROFILE, {
    variables: { id: getUserID() },
  });

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState([]);

  useEffect(() => {
    const user = data?.users.find((val) => val?.id === getUserID());
    if (user) {
      const data = {
        country_state: user?.user_profile?.country_state,
        city: user?.user_profile?.city,
      };
      Object.keys(data).map((key) => {
        setValue(key, data[key]);
      });
      setSelectedCountry(user?.user_profile?.country);
      setSelectedLanguage(
        user?.user_profile?.languages?.map((val) =>
          languages?.find((x) => x.value == val)
        )
      );
      setSelectedTimezone(
        timezones?.find((x) => x.value === user?.user_profile?.timezone)
      );
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
          variables: {
            ...getuser?.user_profile,
            ...value,
            country: selectedCountry,
            timezone: selectedTimezone?.value,
            languages: selectedLanguage?.map((val) => val?.value),
            id: getUserID(),
          },
        });
      }
      toast.success(
        <ToastComponent
          title={"Location details update successfully!"}
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
        <meta name="twitter:card" content="image" />
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
                <h3 className="mb-3">Location</h3>
                <div className="form-input mt-3">
                  <label>Country</label>
                  <div className="form-group">
                    <ReactFlagsSelect
                      selected={selectedCountry}
                      onSelect={(code) => setSelectedCountry(code)}
                      className="select-country"
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>State / Province / Region</label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="country_state"
                    placeholder="State"
                    {...register("country_state")}
                  />
                  <span className="text-danger">
                    {errors?.country_state?.message}
                  </span>
                </div>
                <div className="form-input">
                  <label>City</label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="city"
                    placeholder="City"
                    {...register("city")}
                  />
                  <span className="text-danger">{errors?.city?.message}</span>
                </div>
                <div className="form-input">
                  <label>Timezone</label>
                  <span className="span-label mb-2">
                  </span>
                  <MultiSelectTagList
                    optionsList={timezones}
                    className="multiSelect"
                    selectedValue={selectedTimezone}
                    handleSelectChange={(e) => setSelectedTimezone(e)}
                  />
                </div>
                <div className="form-input">
                  <label>Language</label>
                  <span className="span-label mb-2">
                    You may choose up to <strong>5 languages</strong> that you
                    are fluent in.
                  </span>
                  <MultiSelectTagList
                    optionsList={languages}
                    isMulti
                    className="multiSelect"
                    tagCreatable={true}
                    selectedValue={selectedLanguage}
                    handleSelectChange={(e) => setSelectedLanguage(e)}
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
    </Layout>
  );
};

export default Social;
