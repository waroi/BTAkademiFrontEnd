import React from "react";
import MenuBar from "../components/MenuBar";
import { Outlet } from "react-router-dom";

const HomeView = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-white bg-gradient pt-4 vh-100 ">
          <MenuBar />
        </div>
        <div className="col-md-10 bg-light pt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
