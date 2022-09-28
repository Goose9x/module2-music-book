import "./style.css"
import img from "./logo.jpg"
export let loginPage = /*html*/ `
<div class="containerSignin">
<div class="wrapperParrentSignin">
    <div class="logoSignin"><img class="logoSigninImg" alt="" src="${img}"></div>
    <p class="textSignin">To continue, login to MooSook.</p>
    <div ><button class="btnSigninFb">Continue with facebook</button></div>
    <div><button class="btnSigninGg">Continue with Google</button></div>
    <p class="text1">----------------- or ----------------</p>
    <div id="server-error-message" class="error"></div>
    <div id="server-success-message" class="success"></div> 
    <form action="" id="formSignin">
        <p class="textFormSignin">Email</p>
        <input class="iFormSignin" type="text" name="email" placeholder="Please enter your email">
        <div id="email-error-message"></div>
        <p class="textFormSignin">Password</p>
        <input class="iFormSignin" type="password" name="password" placeholder="Please enter your password">
        <div id="password-error-message"></div>
        <p id=passLink class="text">For your password? <a href="#">Clink here</a></p>
        <div><button id="btnSignin">Login</button></div> 
    </form>
    <p class="text4">Do not have an account?</p>
    <div id="signup" class="signup">New to MooSook? Create an account</div>
</div>
</div>
`;
