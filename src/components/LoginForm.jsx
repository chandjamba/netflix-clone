import { useState } from "react";
import "./loginFormPage.scss";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="wrapper">
      <form action="">
        <h1>Sign In</h1>
        <div className="input-box">
          <input type="text" placeholder="Email or mobile number" required />
        </div>
        <div className="input-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <button type="button" onClick={togglePassword}>
            {showPassword ? "hide password" : "show password"}
          </button>
        </div>
        <div className="sign-in-btn">
          <button type="submit">Sign In</button>
          <span className="or">OR</span>
        </div>
        <div className="sign-code-btn">
          <button type="submit">Use a Sign-In Code</button>
        </div>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <div className="remember-forgot">
          <input type="checkbox" /> Remember me
        </div>
        <div className="register-link">
          <p>
            {" "}
            New to Netflix? <a href="#">Sign up now.</a>
          </p>
        </div>
        <div className="reCaptcha-protection">
          <p>
            {" "}
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot. <a href="#">Learn more.</a>
          </p>
        </div>
      </form>
    </div>
  );
}
