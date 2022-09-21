import React, { useContext } from "react";
import { AuthContext } from "../providers/authProvider/AuthProvider";
import styles from "../styles/welcome.module.scss";

const Welcome = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <div className={styles.welcome}>
      {isAuthenticated ? (
        <h1>Welcome to Jimmy's Tool Box, {user.email}</h1>
      ) : (
        <h1> Welcome to Jimmy's Tool Box, Please Log In First</h1>
      )}
    </div>
  );
};

export default Welcome;
