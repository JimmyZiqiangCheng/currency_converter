import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";
import {Image} from "react-bootstrap";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading/>;
  }

  return (
    <div className="profileText">
      <Image src={user.picture} alt="profile" className="avatar" width="200px" roundedCircle/>
      <h2>{user.name}</h2>
      <br/>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;