import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading/>;
  }

  return (
    <div className="profileText">
      <img src={user.picture} alt="profile" className="avatar" width="200"/>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;