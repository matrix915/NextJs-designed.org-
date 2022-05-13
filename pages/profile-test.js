import axios from "axios";
import { useState } from "react";
import Profile from "../src/components/profile";
import imageLoader from "/src/components/utilities/imageLoader";

const ProfileTest = () => {

  const onChangeImage = async ({ file, name }) => {
    try {
      // const account_id = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_ID;
      // const account_token = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_TOEKN;
      var bodyFormData = new FormData();
      bodyFormData.append("file", file, file.name);
      const response = await axios.post(`/api/user-profile/image`, bodyFormData);
      console.log("response", response);
    }
    catch (error) {
      console.log("error", { ...error });
    }
  }

  return <Profile imageLoader={imageLoader} onChangeImage={onChangeImage} />
}

export default ProfileTest;