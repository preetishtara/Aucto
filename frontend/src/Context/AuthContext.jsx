import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [user, setUser] = useState(
    localStorage.getItem("authToken")
      ? jwt_decode(localStorage.getItem("authToken"))
      : null
  );

  let navigateTo = useNavigate();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.emailid.value,
        password: e.target.passwordid.value,
      }),
    });
    let data = await response.json();
    console.log("data:", data);
    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
      navigateTo("/");
      alert("login successful");
    } else {
      alert("Something went wrong!");
    }
  }

  return (
    <AuthContext.Provider
      value={{ user: user, handleLoginSubmit: handleLoginSubmit }}
    >
      {children}
    </AuthContext.Provider>
  );
};
