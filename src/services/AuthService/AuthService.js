import Firebase from "./Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const auth = getAuth(Firebase);

export const signIn = async (
  email,
  password,
  setEmailError,
  setPasswordError,
  clearErrors,
  clearInputs,
  toggleShowModal,
  setIsAuthenticated,
  setUser
) => {
  try {
    clearErrors();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    clearInputs();
    toggleShowModal();
    setIsAuthenticated(true);
    setUser(user);
    console.log(user);
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
        setEmailError(err.message);
        break;
      case "auth/wrong-password":
        setPasswordError(err.message);
        break;
      default:
        console.error(err.message);
    }
  }
};

export const signUp = async (
  email,
  password,
  setEmailError,
  setPasswordError,
  clearErrors,
  clearInputs,
  toggleShowModal,
  setIsAuthenticated,
  setUser
) => {
  try {
    clearErrors();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    clearInputs();
    toggleShowModal();
    setIsAuthenticated(true);
    setUser(user);
  } catch (err) {
    switch (err.code) {
      case "auth/email-already-in-use":
      case "auth/invalid-email":
        setEmailError(err.message);
        break;
      case "auth/weak-password":
        setPasswordError(err.message);
        break;
      default:
        console.error(err.message);
    }
  }
};

export const handleSignOut = async (setIsAuthenticated, setUser) => {
  try {
    await signOut(auth);
    setIsAuthenticated(false);
    setUser("");
  } catch (err) {
    console.error(err.message);
  }
};
