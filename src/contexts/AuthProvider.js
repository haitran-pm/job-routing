import React, { useReducer } from "react";
import AuthContext from "./AuthContext";

const initialValue = {
  username: "hai",
  password: "123",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isLoading: true };
    case "error":
      return {
        ...state,
        isLoading: false,
        error: "Invalid username or password",
        isLoggedIn: false,
      };
    case "success":
      return {
        ...state,
        isLoading: false,
        error: "",
        password: "",
        isLoggedIn: true,
        isModalShowed: false,
      };
    case "logout":
      return {
        ...state,
        username: "",
        isLoggedIn: false,
      };
    case "field":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(loginReducer, initialValue);

  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
