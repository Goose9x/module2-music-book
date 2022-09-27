import "./style.css"
import img from "../loginPage/logo.jpg"
export let registerPage =/*html*/`
<div class="containerSignup">
<div class="wrapperParrentSignup">
    <div class="logoSignup"><img class="logoSignupImg" alt="" src="${img}">
    </div>
    <p class="textSignup">Sign up for free to start listening</p>
    <div ><button class="btnSignupFb">Continue with facebook</button></div>
    <div><button class="btnSignupGg">Continue with Google</button></div>
    <p class="text1">----------------- or ----------------</p>
    <div id="server-error-message" class="error"></div>
    <div id="server-success-message" class="success"></div> 
    <form action="" id="formSignup">
        <p class="textFormSignup">Frist Name</p>
        <input class="iFormSignup" type="text" name="firstName" placeholder="Please enter your first name">
        <div id="firstName-error-message"></div>
        <p class="textFormSignup">Last Name</p>
        <input class="iFormSignup" type="text" name="lastName" placeholder="Please enter your last name">
        <div id="lastName-error-message"></div>
        <p class="textFormSignup">Email</p>
        <input class="iFormSignup" type="text" name="email" placeholder="Please enter your email">
        <div id="email-error-message"></div>
        <p class="textFormSignup">Password</p>
        <input class="iFormSignup" type="password" name="password" placeholder="Please enter your password">
        <div id="password-error-message"></div>
        <p class="textFormSignup">ConfirmPassword</p>
        <input class="iFormSignup" type="password" name="confirmPassword" placeholder="Confirm your password">
        <div id="confirmPassword-error-message"></div>
        <p class="text2">By clicking the Sign Up button, you agree to MooSook's Terms and Conditions of Use.</p>
        <p class="text2">To learn more about how MooSook collects, uses, shares and protects your personal data, please see MooSook's Privacy Policy</p>
        <div><button id="btnRegister">Register</button></div> 
    </form>
    <div id="signin" class="login">Already have an account?<a href="#">Login here</a> </div>
</div>
</div>
`