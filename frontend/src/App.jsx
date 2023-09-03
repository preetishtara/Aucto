import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./pages/home";
import LoginPage from "./pages/Login";

import Layout from "./layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<PrivateRoute Component={Home} />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
