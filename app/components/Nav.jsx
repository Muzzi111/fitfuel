"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signOut, useSession } from "next-auth/react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session, status } = useSession();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setNavOpen(!navOpen);
  };

  const navItems = [
    { url: "/", label: "Workout" },
    { url: "/mealplan", label: "Meal plan" },
    { url: "/healthyliving", label: "Healthy living" },
    { url: "/membership", label: "Membership" },
  ];

  return (
    <nav className="bg-gray-700 h-30 flex items-center relative">
      <Link href={"/"} className="flex items-center md:px-20 md:py-5">
        <Image
          src="/fitgear logo.jpeg"
          alt="FitFuel Logo"
          width={100}
          height={100}
          className="md:w-20 w-10 md:h-20 h-10"
        />
        <p className="text-gray-300 md:text-4xl text-md font-bold">FITFUEL</p>
      </Link>

      <div className="flex item-center gap-8 max-lg:hidden absolute right-70">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            className="text-md hover:border-b-blue-500 hover:border-b-2 transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
        <p className="text-blue-600 text-lg hover:border-b-blue-500 hover:border-b-2 transition-colors duration-300">
          About
        </p>
      </div>

      {/* ONLY show Sign In if NOT logged in */}
      {!session && (
        <Link
          href={"/auth/signin"}
          className="gap-5 text-lg px-3 py-1 border border-blue-100 
          transition-colors duration-300 ml-8 max-lg:ml-auto z-50 md:absolute right-30"
        >
          <p className="max-lg:hidden text-sm text-gray-300 ">Hi sign In</p>
          <div className="flex items-center gap-2 hover:border-b-blue-500 hover:border-b-4">
            <h1 className="text-sm">MY FITNESS</h1>
            <IoMdArrowDropdown />
          </div>
        </Link>
      )}

      {/* ONLY show profile image and menu if logged in */}
      {session && (
        <div className="max-md:ml-auto z-50 md:absolute right-40">
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img
              src={session?.user?.image}
              alt={session?.user?.name?.slice(0, 1).toUpperCase() || "U"}
              className="w-20 h-20 rounded-full ml-8 max-lg:ml-auto z-50"
            />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href={"/profile"}>My Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href={"/register"}>Become a Member</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <button onClick={() => signOut()}>Sign Out</button>
            </MenuItem>
          </Menu>
        </div>
      )}

      <div className="flex items-center gap-5 ml-5 mr-10 max-lg:mr-5 md:absolute right-1">
        <IoSearch className="text-2xl hover:text-blue-500" />
        <BsCart4 className="text-2xl hover:text-blue-500" />
      </div>
    </nav>
  );
};

export default Nav;
