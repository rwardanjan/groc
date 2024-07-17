import React from "react";

const Header = () => {
  return (
    <header className="mb-3 mt-3 top-0 z-30 mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
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
      <form className="">
        <label
          htmlFor="email-address-icon"
          className="block mb-2 text-sm font-medium sr-only text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-100 text-gray-900 text-sm ps-10 rounded-xl focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
            placeholder="Zoek je favoriete gerecht"
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
