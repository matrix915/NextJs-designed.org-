import { createContext, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { getUserID } from "../shared/user";
import { GET_USER_PROFILE } from "/data/queries/users";

export const UserContext = createContext({ user: {}, getLatestUserdetails: () => { } });

const UserProfileContext = ({ children }) => {

  const [user, setUser] = useState({});
  let [getLatestUserdetails, { data }] = useLazyQuery(GET_USER_PROFILE, { variables: { id: getUserID() } });

  useEffect(getLatestUserdetails, []);

  useEffect(() => {
    if (data?.users?.length) {
      let userData = data.users[0];
      let userState = { ...userData.user_profile, email: userData.email, id: userData.id };
      const userProfileUrl = userState?.avatar_url?.split("/user")?.[0];
      const userProfileUrls = {
        user: `${userProfileUrl}/user`,
        profile: `${userProfileUrl}/profile`,
        loading: `${userProfileUrl}/loading`,
        landscape: `${userProfileUrl}/landscape`,
      }
      userState = { ...userState, avatar_url: userProfileUrls }
      setUser(userState);
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ user, getLatestUserdetails }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProfileContext;