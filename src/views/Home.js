import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";

const Home = () => {
  const { loading, user } = useAuth0();
  console.log(user.name);

  if (loading || !user) {
    return <Loading/>;
  }

  return (
    <>
      <h1>This is Home</h1>
      <h2>user: {user.name}</h2>
      <p>user email: {user.email}</p>
    </>
  );
};

export default Home;