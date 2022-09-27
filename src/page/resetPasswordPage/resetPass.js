import "./style.css"
import img from "../loginPage/logo.jpg"
export let resetPasswordPage =/*html*/`
<div class="containerResetPassword">
<div class="wrapperParrentResetPassword">
    <div class="logoResetImg"><img class="resetPasswordImg" src="${img}"></div>
    <h3>Reset Password</h3>
    <p class="textResetPassword">Enter<span>your MooSook username</span> , or <span>the email address</span> you used to sign up. We will email you with your username and a link to reset your password.</p>
    <form action="" id="formResetPassword">
        <p class="textFormResetPassword">Email</p>
        <input class="iFormResetPassword" type="text" name="email" placeholder="Please enter your email">
        <div><button id="btnResetPassword">Reset Password</button></div> 
    </form>
    <p class="text5">If you still need help? <a href="#">Contact MooSook Support.</a></p>
    <p id="linkSignin" class="text6">Already have an account? Signin here</p>
</div>
<div class="wrapperParrentResetPassword2">
    <span><a href="https://www.spotify.com/vn-vi/legal/end-user-agreement/">Uridical</a></span>
    <span><a href="https://www.spotify.com/vn-vi/legal/cookies-policy/"> Cookies</a></span>
    <span> <a href="https://www.spotify.com/vn-vi/legal/privacy-policy/#s13">Advertisement Introduction</a></span>
   <span class="abc"> © 2022 Spotify AB</span>
</div>
</div>
`