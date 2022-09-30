import React, { Component } from "react";
import {Route ,Routes, Navigate} from "react-router-dom";
import Login from "../Component";
import Signup from "../component";
import Forget_Password from "../component";

function AppRoute() {
    return (
  <Routes>
    <Route path= "/Login">
    </Route>
    <Route path="/" element={<Home />} />
  </Routes>
    );
  }
  
  export default AppRoute;