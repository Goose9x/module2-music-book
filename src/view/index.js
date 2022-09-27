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
} from "../controller/index";

export let setAppActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      break;
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      break;
    case "resetPasswordPage":
      if (app) {
        app.innerHTML = resetPasswordPage;
      }
      break;
    case "mainPage":
      if (app) {
        app.innerHTML = mainPage;
      }
      let status = 0;
      // play or pause song on click
      const playPause = document.getElementsByClassName(
        "musicBot-play-pause"
      )[0];
      const audioPlayer = document.getElementById("audio");
      setAudio(audioPlayer);
      loadSong(songList[0]);
      // console.log(songList[1]);
      playPause.addEventListener("click", () => {
        if (status == 0) {
          audio.play();
          status = 1;
        } else if (status == 1) {
          audio.pause();
          status = 0;
        }
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
