import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import MealForm from "./MealForm";
import {
  IoAddCircle,
  IoHomeOutline,
  IoHome,
  IoCalendarOutline,
  IoCalendar,
  IoBasketOutline,
  IoBasket,
  IoList,
} from "react-icons/io5";

const Footer = () => {
  const location = useLocation();
  console.log("Footer -> location", location);
  return (
    <div className="footer-nav fixed bottom-0 border-t border-gray-200 z-50 w-full -translate-x-1/2 bg-white left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <Link
          className="inline-flex flex-col items-center justify-center p-4 group"
          to="/"
        >
          {location.pathname === "/" ? (
            <IoHome className="w-6 h-6 text-primary" />
          ) : (
            <IoHomeOutline className="w-6 h-6 text-gray-500" />
          )}
          <span className="sr-only">Home</span>
        </Link>
        <Link
          className="inline-flex flex-col items-center justify-center p-4 group"
          to="/plan"
        >
          {location.pathname === "/plan" ? (
            <IoCalendar className="w-6 h-6 text-primary" />
          ) : (
            <IoCalendarOutline className="w-6 h-6 text-gray-500" />
          )}
          <span className="sr-only">Plan</span>
        </Link>
        <Drawer className="h-full">
          <DrawerTrigger className="inline-flex flex-col items-center text-left p-4 group border-transparent focus:border-transparent focus:ring-0 focus:outline-none">
            <IoAddCircle className="w-9 h-9 text-gray-500 text-primary" />
            <span className="sr-only">New post</span>
          </DrawerTrigger>
          <DrawerContent className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] focus:outline-none">
            <DrawerHeader className="text-left">
              <DrawerTitle>Voeg een nieuwe recept toe</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 max-w-md w-full mx-auto flex flex-col overflow-auto">
              <MealForm />
            </div>
            <DrawerFooter className="pb-[env(safe-area-inset-bottom)]">
              <Button>Voeg toe</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Link
          className="inline-flex flex-col items-center justify-center p-4 group"
          to="/list"
        >
          {location.pathname === "/list" ? (
            <IoBasket className="w-7 h-7 text-primary" />
          ) : (
            <IoBasketOutline className="w-7 h-7 text-gray-500" />
          )}
          <span className="sr-only">List</span>
        </Link>
        <Link
          className="inline-flex flex-col items-center justify-center p-4 group"
          to="/settings"
        >
          {location.pathname === "/settings" ? (
            <IoList className="w-7 h-7 text-primary" />
          ) : (
            <IoList className="w-7 h-7 text-gray-500" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
