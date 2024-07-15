import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default HomeLayout;
