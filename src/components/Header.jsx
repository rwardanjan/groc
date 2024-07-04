import React from "react";

const Header = () => {
  return (
    <header className="mb-5 mt-2 top-0 z-30 mx-auto w-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black">Hello, Rudolf 👋</h1>
          <p className="text-sm text-gray-400 font-bold">
            What would you like to eat today?
          </p>
        </div>
        <img
          className="block h-14 w-14 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
