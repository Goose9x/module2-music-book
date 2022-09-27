import { bookPage } from "../page/bookPage/bookPage";
import { guidePage } from "../page/guidePage/guidePage";
import { homePage } from "../page/homePage/homePage";
import { loginPage } from "../page/loginPage/loginPage";
import { mainPage } from "../page/mainPage/index";
import { registerPage } from "../page/registerPage/registerPage";
import { resetPasswordPage } from "../page/resetPasswordPage/resetPass";
import {
  playBtn,
  playSong,
  pauseSong,
  loadSong,
  songList,
  audio,
  setAudio,
  setTitle,
} from "../controller/index";
import {
  validateLoginInfo,
  validateRegisterInfo,
  validateResetPassword,
} from "../controller/index";
import swal from "sweetalert";

export let alertSucces = (message) => {
  return swal({
    // title: "thành công",
    text: message,
    icon: "success",
    button: "Ok!",
  });
};
export let setAppActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const signup = document.getElementById("signup");
      signup.onclick = function () {
        if (signup) {
          setAppActiveScreen("registerPage");
        }
      };
      const passLink = document.getElementById("passLink");
      passLink.onclick = function () {
        if (passLink) {
          setAppActiveScreen("resetPasswordPage");
        }
      };
      const formSignin = document.getElementById("formSignin");
      if (formSignin) {
        formSignin.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = formSignin.email.value;
          const password = formSignin.password.value;
          console.log(email);
          console.log(password);
          validateLoginInfo(email, password);
        });
      }
      break;
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      const signin = document.getElementById("signin");
      signin.onclick = function () {
        if (signin) {
          setAppActiveScreen("loginPage");
        }
      };
      const formSignup = document.getElementById("formSignup");
      if (formSignup) {
        formSignup.addEventListener("submit", (event) => {
          event.preventDefault();
          const firstName = formSignup.firstName.value;
          const lastName = formSignup.lastName.value;
          const email = formSignup.email.value;
          const password = formSignup.password.value;
          const confirmPassword = formSignup.confirmPassword.value;
          // console.log(firstName);
          // console.log(lastName);
          // console.log(email);
          // console.log(password);
          // console.log(confirmPassword);
          validateRegisterInfo(
            firstName,
            lastName,
            email,
            password,
            confirmPassword
          );
        });
      }
      break;
    case "resetPasswordPage":
      if (app) {
        app.innerHTML = resetPasswordPage;
      }
      const linkSignin = document.getElementById("linkSignin");
      linkSignin.onclick = function () {
        setAppActiveScreen("loginPage");
      };
      const formResetPassword = document.getElementById("formResetPassword");
      if (formResetPassword) {
        console.log(formResetPassword);
        formResetPassword.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = formResetPassword.email.value;

          console.log(email);
          validateResetPassword(email);
        });
      }
      break;
    case "mainPage":
      if (app) {
        app.innerHTML = mainPage;
      }
      getMusicStorage()
      let status = 0;
      // play or pause song on click
      const playPause = document.getElementsByClassName(
        "musicBot-play-pause"
      )[0];
      const prev = document.getElementsByClassName("musicBot-prev")[0];
      const next = document.getElementsByClassName("musicBot-next")[0];
      const audioPlayer = document.getElementById("audio");
      const titleMusic = document.getElementsByClassName("musicBot-title");
      setTitle(titleMusic);
      setAudio(audioPlayer);
      console.log(titleMusic);
      loadSong(songList[0]);
      let i = 0;
      playPause.addEventListener("click", () => {
        if (status == 0) {
          audio.play();
          status = 1;
          playPause.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`;
          playPause.classList.add("active");
        } else if (status == 1) {
          audio.pause();
          status = 0;
          playPause.innerHTML = `<ion-icon name="play-outline"></ion-icon>`;
          playPause.classList.remove("active");
        }
      });
      prev.addEventListener("click", () => {
        i--;
        if (i < 0) {
          i = songList.length - 1;
        }
        loadSong(songList[i]);
        audio.play();
      });
      next.addEventListener("click", () => {
        i++;
        if (i > songList.length - 1) {
          i = 0;
        }
        loadSong(songList[i]);
        audio.play();
      });
      break;
  }
};
export let setContentActiveScreen = (screenName) => {
  let content = document.getElementById("content");
  switch (screenName) {
    case "homePage":
      if (content) {
        content.innerHTML = homePage;
      }
      break;
    case "guidePage":
      if (content) {
        content.innerHTML = guidePage;
      }
      break;
    case "bookPage":
      if (content) {
        content.innerHTML = bookPage;
      }
      break;
  }
};
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};

export let renderSuccessMessage = (id, text) => {
  const successMessage = document.getElementById(id);
  if (successMessage) {
    successMessage.innerText = text;
  }
};
