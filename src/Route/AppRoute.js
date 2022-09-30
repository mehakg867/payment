import React, { Component } from "react";
import {Route ,Routes, Navigate} from "react-router-dom";
import Login from "../component/auth/Login";
import Signup from "../component/auth/Signup";
import Forget_Password from "../component/auth/ForgotPassword";
import Home from "../component/Home"
import ForgotPassword from "../component/auth/ForgotPassword";

function AppRoute() {
    return (
  <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
  </Routes>
    );
  }
  
  export default AppRoute;