import { createContext, useState, useCallback } from "react";
import { googleLogout } from '@react-oauth/google';
import Login from "../components/Login";

const UserContext = createContext();

function Provider({ children }) {
    const [user, setUser] = useState(undefined);
      
    const logout = () => {
        googleLogout();
        setUser(undefined);
    };
    
    const handleUser = useCallback((newUser) => {
        setUser(newUser);
    }, []);
    
    const fetchUser = useCallback(() => {
        // render the Login component to initiate the login process
        return <Login handleUser={handleUser} />;
    }, [handleUser]);
    
    const valueToShare = {
        user,
        logout,
        fetchUser,
        handleUser
    };
  
    return (
      <UserContext.Provider value={valueToShare}>
        {children}
      </UserContext.Provider>
    );
};



export { Provider, UserContext };
