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
import { storage } from "../index";
import { ref, listAll, getDownloadURL } from "firebase/storage";
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

export let getAllMusic = () => {
  // Create a reference under which you want to list
  const listRef = ref(storage, "music/");

  // Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        //   // All the prefixes under listRef.
        //   // You may call listAll() recursively on them.
        // listAll(folderRef);
        // console.log(folderRef);
      });
      res.items.forEach((itemRef) => {
        // All the items under listRef..ge
        // console.log(itemRef);
        getDownloadURL(itemRef).then((url) => {
          console.log(itemRef);
          console.log(url);
        });
        // .then((url) => {
        //   // `url` is the download URL for 'images/stars.jpg'

        //   // This can be downloaded directly:
        //   const xhr = new XMLHttpRequest();
        //   // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        //   xhr.responseType = "blob";
        //   xhr.onload = (event) => {
        //     const blob = xhr.response;
        //   };
        //   xhr.open("GET", url);
        //   xhr.send();

        //   console.log(url);
        // })
        // .catch((error) => {
        //   // Handle any errors
        // });
      });
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
    });
};
