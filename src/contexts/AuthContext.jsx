import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const onLogin = () => {
    //     console.log("user has logged in");
    //     setIsLoggedIn(true);
    // }

    // const onLogout = () => {
    //     console.log("user has logged out");
    //     setIsLoggedIn(false);
    // };

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}
        >
            {children}
        </AuthContext.Provider>
    );
};