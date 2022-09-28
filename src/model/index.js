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
import { doc, getDoc } from "firebase/firestore";
import { db } from "../index";
export let authUser = {};

export let getMusicList = async () => {
  const docRef = doc(db, "musicCollection", "MXkALEk429zlU4KjZHF3");
  const docSnap = await getDoc(docRef);
  return docSnap.data()
};
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
// export const songArrayList = [];
// export let getAllMusic = () => {
//   // Create a reference under which you want to list
//   const listRef = ref(storage, "music/");
//   // Find all the prefixes and items.
//   return listAll(listRef)
//   .then((res) => {
//     res.prefixes.forEach((folderRef) => {
//       //   // All the prefixes under listRef.
//       //   // You may call listAll() recursively on them.
//     });
//     res.items.forEach((itemRef) => {
//       // All the items under listRef..ge
//       // console.log(itemRef);
//       getDownloadURL(itemRef).then((url) => {
//         console.log(itemRef._location.path);
//         console.log(url);
//         songArrayList.push({
//           path: url,
//           songName: itemRef._location.path
//             .replace("music/", "")
//             .replace(".mp3", ""),
//         });
//       });
//     });
//   })
//   .catch((error) => {
//     // Uh-oh, an error occurred!
//     console.log(error);
//   })
//   .finally(() => {
//     console.log(songArrayList);
//   });
// };
