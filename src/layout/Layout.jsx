import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Routes from "../routes/Routes";
import SideBar from "../components/SideBar";
import Dashboard from "../components/Dashboard";
import RightBar from "../components/RightBar";
import Content from "../components/Content/Content";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={() => (
          <div id="wrapper">
            <Header />
            <SideBar />
            <RightBar />
            <Content />
            <Routes />
            <Footer />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
