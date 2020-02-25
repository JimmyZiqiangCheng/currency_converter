import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "./Loading";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading/>;
  }

  return (
    <>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </>
  );
};

export default Profile;