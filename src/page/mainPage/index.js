import "./main.css";
import music1 from "../../../music/Payphone.mp3";
export let mainPage =
  /*html*/
  `<div id="main_page">
    <div id="menu">
        <div class="page_name"><img class="logo_img" src="./logo.png" alt="">
            <div>MooSook</div>
        </div>
        <ul class="nav_menu">
            <div class="menu_text">Trang Chủ</div>
            <div class="menu_text">Hướng dẫn sử dụng</div>
            <div class="menu_text catalog">
                <p>Thể loại</p>
                <div class="catalog_drop_down">
                    <p>Đam mỹ</p>
                    <p>Ngôn tình</p>
                    <p>Kinh dị Nhật Bản</p>
                </div>
            </div>
            <div class="menu_text">List nhạc khả dụng</div>
            <div class="menu_text sign_out">Đăng xuất</div>
            <p class="copy_right">Copy right by Code vip pro 9x</p>
        </ul>
    </div>
    <div id="content">
    </div>
    <div id="musicBot">
        <h3 class="musicBot-title">Tên bài hát</h3> 
        <div class="musicBot-player">
            <audio controls id="audio" src=""></audio>
            <div class="player-btns">
                <span class="musicBot-prev">
                <ion-icon name="play-back-outline"></ion-icon>
                </span>
                <span class="musicBot-play-pause">
                <ion-icon name="play-outline"></ion-icon>
                </span>
                <span class="musicBot-next">
                <ion-icon name="play-forward-outline"></ion-icon>
                </span>
            </div>
        </div>
    </div>
</div>`;
