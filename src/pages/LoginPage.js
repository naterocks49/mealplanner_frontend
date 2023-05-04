import { useState } from "react";
import './Login.css';
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

function LoginPage({ handleUser, user }) {
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
  
    function showLoginForm() {
      setShowLogin(true);
      setShowRegister(false);
      setShowForgotPassword(false);
    }
  
    function showRegisterForm() {
      setShowLogin(false);
      setShowRegister(true);
      setShowForgotPassword(false);
    }
  
    function showForgotPasswordForm() {
      setShowLogin(false);
      setShowRegister(false);
      setShowForgotPassword(true);
    }
  
    return (
      <div>
        {showLogin && <LoginForm />}
        {showRegister && <RegisterForm />}
        {showForgotPassword && <ForgotPasswordForm />}
      </div>
    );
  };

export default LoginPage;