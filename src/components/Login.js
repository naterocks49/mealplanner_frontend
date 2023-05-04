import { useGoogleLogin } from "@react-oauth/google";
import { UserContext } from "../context/user";
import { useContext } from "react";

function Login() {
    const { handleUser } = useContext(UserContext);
    
    console.log('here')
    useGoogleLogin({
      onSuccess: (codeResponse) => handleUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
    });
  
    return <div>Login test</div>; // or some other component that you want to render during the login process
  }

export default Login;