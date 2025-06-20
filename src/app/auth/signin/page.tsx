"use client";

import Image from "next/image";
import React from "react";
import github from "@/../public/github.svg";
import { login } from "@/lib/auth";
import { motion } from "framer-motion";

const SignInPage = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen w-screen bg-gradient-to-b from-green-100 to-green-300">
      <motion.div
        className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-2xl shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.h2
            className="text-4xl font-extrabold text-green-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Garden Book
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Sign in to add plants or find other plants in your garden.
          </motion.p>
        </div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button
            onClick={login}
            className="flex items-center w-full justify-center gap-3 px-4 py-3 text-lg font-medium text-green-900 bg-green-100 border border-green-300 rounded-2xl hover:bg-green-200 hover:text-green-800 transition-all duration-200 focus:ring-2 focus:ring-green-500"
            aria-label="Sign in with GitHub"
          >
            <Image src={github} width={30} height={30} alt="GitHub logo" />
            <span>Continue with GitHub</span>
          </button>
        </motion.div>

        <motion.div
          className="text-center text-sm text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          By signing in, you agree to our{" "}
          <a
            href="#"
            className="text-green-600 underline hover:text-green-800 transition-colors"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-green-600 underline hover:text-green-800 transition-colors"
          >
            Privacy Policy
          </a>
          .
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignInPage;
