"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useSession } from "next-auth/react";
import { logout } from "@/lib/auth";
import { motion } from "framer-motion";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <motion.nav
      className="bg-green-100 shadow-lg sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <Link className="flex items-center gap-3" href={"/"}>
          <Image
            src={logo}
            alt="Garden Book Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-3xl font-extrabold text-green-800 hover:text-green-900 transition-colors">
            Garden Book
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {session ? (
            <>
              {/* Links for Authenticated Users */}
              <div className="hidden lg:flex space-x-4">
                <Link
                  className="text-lg font-semibold text-green-900 hover:text-green-700 transition-colors"
                  href={"/plants"}
                >
                  Browse Plants
                </Link>
                <Link
                  className="text-lg font-semibold text-green-900 hover:text-green-700 transition-colors"
                  href={"/plants/add"}
                >
                  Add Plants
                </Link>
                <Link
                  className="text-lg font-semibold text-green-900 hover:text-green-700 transition-colors"
                  href={"/plants/mygarden"}
                >
                  My Plants
                </Link>
              </div>
              <motion.button
                onClick={logout}
                className="px-5 py-2 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 transition-all hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                Log Out
              </motion.button>
            </>
          ) : (
            <>
              {/* Link for Unauthenticated Users */}
              <motion.button
                className="px-5 py-2 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 transition-all hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                <Link href={"/auth/signin"}>Sign In</Link>
              </motion.button>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
