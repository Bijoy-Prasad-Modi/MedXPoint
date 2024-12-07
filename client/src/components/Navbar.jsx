import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Context } from "../main";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  // console.log("Navbar: isAuthenticated =", isAuthenticated);
  // console.log("Navbar rerender: isAuthenticated =", isAuthenticated);
  

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };


  const navigateTo = useNavigate();



  const goToLogin = () => {
    navigateTo("/login");
  };



  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>

        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/appointment"}>Appointment</Link>
            <Link to={"/about"}>About Us</Link>
          </div>

          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout}>
              LOGOUT
            </button>
          ) : (
            <button className="loginBtn btn" onClick={goToLogin}>
              LOGIN
            </button>
          )}
        </div>

        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
