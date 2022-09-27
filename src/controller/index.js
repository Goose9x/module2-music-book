import music1 from "../../music/Payphone.mp3";
import music2 from "../../music/999DoaHong.mp3";
const title = document.getElementsByClassName("musicBot-title");
const prev = document.getElementsByClassName("musicBot-prev");
const next = document.getElementsByClassName("musicBot-next");
let audio = document.getElementById("audio");
export { audio, setAudio };
export const songList = [
  {
    path: music2,
    songName: "999 Đóa hồng",
  },
  {
    path: music1,
    songName: "Payphone",
  },
];
export function loadSong(songList) {
  console.log(songList);
  title.innerText = songList.songName;
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
