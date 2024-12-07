import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, confirmPassword, role: "Admin" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      //console.log("Login Successful: isAuthenticated =", true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
    //console.log("Login: isAuthenticated =", isAuthenticated);
  }

  return (
    <>
      <div className="container form-component ">
        <img src="/logo.png" alt="logo" className="logo" />
        <h1 className="form-title">Welcome to Zeecare</h1>
        <p>Only Admins are allowed to access these resources</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            id="email-input"
            className="input-field input-email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password-input"
            className="input-field input-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            id="confirm-password-input"
            className="input-field input-confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
