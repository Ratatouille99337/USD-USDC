import React from "react";

// ############  route-start  ################
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import NoPage from "./components/pages/NoPage";
import Cardlink from "./components/pages/Cardlink";
import Dashboard from "./components/pages/Dashboard";
import Bank from "./components/pages/Bank";
// ############  route-end  ################

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/cardlink" exact element={<Cardlink />} />
          <Route path="/bank" exact element={<Bank />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
