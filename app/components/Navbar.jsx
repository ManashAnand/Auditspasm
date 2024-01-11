"use client";

import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import { logOut } from "@/redux/slices/UserSlice";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logOut());
  };

  console.log(state);

  return (
    <>
      <header className="text-gray-600 body-font bg-blue-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "
          >
            <Image src={logo} width={500} height={200} alt="" className="" />
            {/* <span className="ml-3 text-xl">AuditSpasm</span> */}
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer hover:underline">
              FAQ
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer hover:underline">
              Contact Us
            </a>
          </nav>
          {Object.keys(state).length === 0 ? (
            <button
              className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 text-gray-900 text-white border-gray-300  hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-200 font-medium"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          ) : (
            <>
              <a className="mr-5 mr-5 hover:text-gray-900 cursor-pointer hover:underline">
                Audit Form
              </a>
              <button
                className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 text-gray-900 text-white border-gray-300  hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-200 font-medium"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
