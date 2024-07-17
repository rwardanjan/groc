import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <div vaul-drawer-wrapper="" className="min-h-[100vh]">
        <div className="p-4 bg-white min-h-screen">
          <div className="container md:max-w-2xl mx-auto p-0">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
