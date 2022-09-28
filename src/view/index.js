import { bookPage } from "../page/allStoryPage/bookPage/bookPage";
import { guidePage } from "../page/guidePage/guidePage";
import { homePage } from "../page/allStoryPage/homePage";
import { loginPage } from "../page/loginPage/loginPage";
import { mainPage } from "../page/mainPage/index";
import { registerPage } from "../page/registerPage/registerPage";
import { resetPasswordPage } from "../page/resetPasswordPage/resetPass";
import { musicListPage } from "../page/musicListPage/musicListPage";
import { loadSong, audio, setAudio, setTitle } from "../controller/index";
//truyện
//DamMy
import { reViewChu } from "../page/allStoryPage/bookPage/reviu/reviewdammy/chumuonduiom/index";
import { reViewMaDao } from "../page/allStoryPage/bookPage/reviu/reviewdammy/madaotosu/index";
import { reViewSauKetHon } from "../page/allStoryPage/bookPage/reviu/reviewdammy/saukhikethon/index";
import { reViewVanNhanMe } from "../page/allStoryPage/bookPage/reviu/reviewdammy/vannhanme/index";
import { reViewXuyenTieu } from "../page/allStoryPage/bookPage/reviu/reviewdammy/xuyenthanhtieu/index";
//KinhDi
import { reViewDaoQuy } from "../page/allStoryPage/bookPage/reviu/reviewkinhdi/daoquy/index";
import { reViewHacAm } from "../page/allStoryPage/bookPage/reviu/reviewkinhdi/nhungkehacam/index";
import { reViewNghiCan } from "../page/allStoryPage/bookPage/reviu/reviewkinhdi/phiasaunghican/index";
import { reViewTenCuaTroChoi } from "../page/allStoryPage/bookPage/reviu/reviewkinhdi/tencuatrochoi/index";
import { reViewVongTron } from "../page/allStoryPage/bookPage/reviu/reviewkinhdi/vongtronacnghiet/index";
//NgonTinh
import { reViewAnhTrang } from "../page/allStoryPage/bookPage/reviu/reviewngontinh/anhtrang/index";
import { reViewCungNhauLon } from "../page/allStoryPage/bookPage/reviu/reviewngontinh/cungnhaulonlen/index";
import { reViewStay } from "../page/allStoryPage/bookPage/reviu/reviewngontinh/olaicunganh/index";
import { reViewTieuNhan } from "../page/allStoryPage/bookPage/reviu/reviewngontinh/truoclatieunhan/index";
import { reViewYeu } from "../page/allStoryPage/bookPage/reviu/reviewngontinh/yeulamanh/index";
// end

import {
  validateLoginInfo,
  validateRegisterInfo,
  validateResetPassword,
} from "../controller/index";
import { getMusicList } from "../model/index";
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
      document
        .getElementsByClassName("music_list")[0]
        .addEventListener("click", () => {
          setContentActiveScreen("musicListPage");
        });
      document
        .getElementsByClassName("sign_out")[0]
        .addEventListener("click", () => {
          signOut();
        });
      setContentActiveScreen("guidePage");
      // getMusicStorage()
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
      let data = getMusicList().then((data) => {
        console.log(data.music);
        let songList = data.music;
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
      });
      // console.log(data);
      document.getElementById("home-page-btn").addEventListener("click", () => {
        setContentActiveScreen("homePage");
      });
      document
        .getElementById("guide-page-btn")
        .addEventListener("click", () => {
          setContentActiveScreen("guidePage");
        });

      break;
    // List song
  }
};
export let setContentActiveScreen = (screenName) => {
  let content = document.getElementById("content");
  switch (screenName) {
    case "homePage":
      if (content) {
        content.innerHTML = homePage;
      }
      loadReviewStory();
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
    case "musicListPage":
      if (content) {
        content.innerHTML = musicListPage;
      }
      break;
    case "reViewChu":
      if (content) {
        content.innerHTML = reViewChu;
      }
      break;
    case "reViewMaDao":
      if (content) {
        content.innerHTML = reViewMaDao;
      }
      break;
    case "reViewSauKetHon":
      if (content) {
        content.innerHTML = reViewSauKetHon;
      }
      break;
    case "reViewVanNhanMe":
      if (content) {
        content.innerHTML = reViewVanNhanMe;
      }
      break;
    case "reViewXuyenTieu":
      if (content) {
        content.innerHTML = reViewXuyenTieu;
      }
      break;
    case "reViewDaoQuy":
      if (content) {
        content.innerHTML = reViewDaoQuy;
      }
      break;
    case "reViewHacAm":
      if (content) {
        content.innerHTML = reViewHacAm;
      }
      break;
    case "reViewNghiCan":
      if (content) {
        content.innerHTML = reViewNghiCan;
      }
      break;
    case "reViewTenCuaTroChoi":
      if (content) {
        content.innerHTML = reViewTenCuaTroChoi;
      }
      break;
    case "reViewVongTron":
      if (content) {
        content.innerHTML = reViewVongTron;
      }
      break;
    case "reViewAnhTrang":
      if (content) {
        content.innerHTML = reViewAnhTrang;
      }
      break;
    case "reViewCungNhauLon":
      if (content) {
        content.innerHTML = reViewCungNhauLon;
      }
      break;
    case "reViewStay":
      if (content) {
        content.innerHTML = reViewStay;
      }
      break;
    case "reViewTieuNhan":
      if (content) {
        content.innerHTML = reViewTieuNhan;
      }
      break;
    case "reViewYeu":
      if (content) {
        content.innerHTML = reViewYeu;
      }
      break;
    // getAllMusic();
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
export let loadReviewStory = () => {
  let list = document.getElementsByClassName("item-list");
  console.log(list);
  for (let item of list) {
    item.addEventListener("click", (e) => {
      console.log("aaa");
      let userChoice = e.currentTarget.id;
      console.log(userChoice);
      setContentActiveScreen(`${userChoice}`);
    });
  }
};
export let signOut = () => {
  setAppActiveScreen("loginPage");
};
export let alwaysHomepage = () => {
  setContentActiveScreen("homePage");
};
