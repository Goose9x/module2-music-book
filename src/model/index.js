import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  renderErrorMessage,
  setAppActiveScreen,
  alertSucces,
} from "../view/index";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
export let getMusicStorage = () => {};
export let authUser = {};
export let signIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // console.log(userCredential);
      const user = userCredential.user;
      authUser.email = user.email;
      authUser.displayName = user.displayName;
    })
    .then(() => {
      return alertSucces("Đăng nhập thành công");
    })

    .then(() => {
      setAppActiveScreen("mainPage");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server-error-message", errorMessage);
    });
};

export let createNewUser = (firstName, lastName, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      // hiện thị ra là đăng kí thành công
      renderErrorMessage("successMessage", "Đăng kí thành công");
      const completed = userCredential.message;
      renderErrorMessage("completed", "");
      return updateProfile(auth.currentUser, {
        displayName: firstName + " " + lastName,
      })
        .then(() => {
          return alertSucces("Đăng kí thành công");
        })
        .then(() => {
          setAppActiveScreen("loginPage");
        });
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server-error-message", errorMessage);
    });
};

export let resetPassword = (email) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
