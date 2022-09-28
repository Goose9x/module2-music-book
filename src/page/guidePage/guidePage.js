import duc from "../guidePage/duc.jpg";
import dinh from "../guidePage/dinh.jpg";
import bien from "../guidePage/bien.jpg";
import dung from "../guidePage/dung.jpg";
import logo from "../guidePage/logo.jpg";

import "../guidePage/style.css";

export let guidePage = /*html*/ `
<div class="abc">
        <div class="containerGroupName">
            <div class="boxImg"><img class="groupImg" src="${logo}" alt=""></div>
            <p class="textGroup">Code vip promax HN 9x</p>
            
            <div class="groupBox">
                <div class="groupWrapperParrent">
                    <div class="boxImgMember">
                        <img class="memberImg" src="${duc}" alt="">
                        <p class="textMember">Vũ Hoàng Đức</p>
                        <p class="text1">Leader</p>
                    </div>
                </div>

                <div class="groupWrapperParrent">
                    <div class="boxImgMember">
                        <img class="memberImg" src="${dung}" alt="">
                        <p class="textMember">Đặng Tấn Dũng</p>
                        <p class="text1">Member</p>
                    </div>
                </div>

                <div class="groupWrapperParrent">
                    <div class="boxImgMember">
                        <img class="memberImg" src="${bien}" alt="">
                        <p class="textMember">Trần Văn Biên</p>
                        <p class="text1">Member</p>

                    </div>
                </div>

                <div class="groupWrapperParrent">
                    <div class="boxImgMember">
                        <img class="memberImg" src="${dinh}" alt="">
                        <p class="textMember">Phan Thị Dinh</p>
                        <p class="text1">Member</p>

                    </div>
                </div>
            </div>
            
        </div>
    </div>`;
