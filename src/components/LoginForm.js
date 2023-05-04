import React from "react"
import useUserContext from "../hooks/use-user-context";

function LoginForm() {
    const { logout, fetchUser, user } = useUserContext();
    
    return (
        <div>
            <h4>Login to Mealplan-gpt</h4>
            <button onClick={() => fetchUser()}>Sign in with Google 🚀 </button>
            <button onClick={() => logout()}>Sign out with Google 🚀 </button>
            {user && 'success'}
        </div>
    );
};

export default LoginForm;