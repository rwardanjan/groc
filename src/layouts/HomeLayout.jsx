import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";

const HomeLayout = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
};

export default HomeLayout;
