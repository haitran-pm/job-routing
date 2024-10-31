// import React, { createContext, useReducer, useEffect } from "react";

// const initialValue = {
//   username: "hai",
//   password: "123",
//   isLoading: false,
//   error: "",
//   isLoggedIn: false,
//   isModalShowed: false,
// };

// const loginReducer = (state, action) => {
//   switch (action.type) {
//     case "open":
//       return { ...state, isModalShowed: true };
//     case "close":
//       return { ...state, isModalShowed: false };
//     case "login":
//       return { ...state, isLoading: true };
//     case "error":
//       return {
//         ...state,
//         isLoading: false,
//         error: "Invalid username or password",
//         isLoggedIn: false,
//       };
//     case "success":
//       return {
//         ...state,
//         isLoading: false,
//         error: "",
//         password: "",
//         isLoggedIn: true,
//         isModalShowed: false,
//       };
//     case "logout":
//       return {
//         ...state,
//         username: "",
//         isLoggedIn: false,
//       };
//     case "field":
//       return { ...state, [action.payload.name]: action.payload.value };

//     default:
//       return state;
//   }
// };

// export function AuthProvider({ children }) {
//   const AuthContext = createContext();
//   const [state, dispatch] = React.useReducer(loginReducer, initialValue);

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

import React, { useState, createContext } from "react";

// const Auth = {
//   isAuthenticated: false,
//   signin(callback) {
//     Auth.isAuthenticated = true;
//     setTimeout(callback, 100); //fake async.
//   },
//   signout(callback) {
//     Auth.isAuthenticated = false;
//     setTimeout(callback, 100);
//   },
// };

function AuthProvider({ children }) {
  const AuthContext = createContext(null);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // let singin = (newUser, callback) => {
  //   return Auth.signin(() => {
  //     setUser(newUser);
  //     callback();
  //   });
  // };

  // let signout = (callback) => {
  //   return Auth.signout(() => {
  //     setUser(null);
  //     callback();
  //   });
  // };

  const login = async ({ username, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "hai" && password === "123") {
          setIsAuthenticated(true);
          resolve();
        } else {
          setIsAuthenticated(false);
          reject();
        }
      }, 1000);
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = { username, password, isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
