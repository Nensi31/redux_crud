import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Layout from "./layout/layout";
import App from "./App";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<Dashboard />} path="/pages/dashboard" />
      <Route element={<Home />} path="/pages/home" />
    </Routes>
  );
};

export default RoutesComponent;
