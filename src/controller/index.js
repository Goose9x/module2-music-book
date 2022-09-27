import music1 from "../../music/Payphone.mp3";
import music2 from "../../music/TamSuTuoi30.mp3";
import music3 from "../../music/999DoaHong.mp3";


import { renderErrorMessage, setAppActiveScreen } from "../view/index";
import { signIn, createNewUser, resetPassword } from "../model/index";
let title = document.getElementsByClassName("musicBot-title");
const prev = document.getElementsByClassName("musicBot-prev");
const next = document.getElementsByClassName("musicBot-next");
let audio = document.getElementById("audio");
export { audio, setAudio,setTitle };
export const songList = [
  {
    path: music2,
    songName: "Tâm Sự Tuổi 30 Trịnh Thăng Bình",
  },
  {
    path: music1,
    songName: "Payphone",
  },
  {
    path: music3,
    songName: "999DoaHong",
  },
];
export function loadSong(songList) {
  title[0].innerText = songList.songName;
  audio.src = `${songList.path}`;
}
// function play song
export function playSong() {
  audio.play();
}
// function pause song
export function pauseSong() {
  audio.pause();
}
function setAudio(value) {
  audio = value;
}
function setTitle(value) {
  title = value;
}
export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }

  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }
  if (email && password) {
    signIn(email, password);
  }
};

export let validateRegisterInfo = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!firstName) {
    renderErrorMessage(
      "firstName-error-message",
      "Please enter your firstName"
    );
  } else {
    renderErrorMessage("firstName-error-message", "");
  }

  if (!lastName) {
    renderErrorMessage("lastName-error-message", "Please enter your lastName");
  } else {
    renderErrorMessage("lastName-error-message", "");
  }

  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }

  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }

  if (!confirmPassword) {
    renderErrorMessage(
      "confirmPassword-error-message",
      "Please enter your confirmPassword"
    );
  } else {
    renderErrorMessage("confirmPassword-error-message", "");
  }

  if (
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    confirmPassword === password
  ) {
    createNewUser(firstName, lastName, email, password);
  }
};

export let validateResetPassword = (email) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }
  if (email) {
    resetPassword(email);
  }
};
