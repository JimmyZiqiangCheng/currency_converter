import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";

const Weather = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading/>;
  }

  return (
    <>
      <h1>This is weather page</h1>
      <h2>user: {user.name}</h2>
      <p>user email: {user.email}</p>
    </>
  );
};

export default Weather;