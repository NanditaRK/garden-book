"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const { data: session } = useSession();
  const user = session?.user?.name;

  return (
    <div className="relative left-0 top-0 min-h-screen w-screen bg-gradient-to-b from-green-100 to-green-300">
      {/* Hero Section */}
      {session ? (
        <div className="relative w-full h-[70vh]">
          <div className="absolute inset-0 z-0">
            
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-green-900">
            <motion.h1
              className="text-4xl font-extrabold sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome back, {user}!
            </motion.h1>
            <motion.p
              className="mt-4 text-lg sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Welcome back to GardenBook. Start exploring plants, connecting with others, or listing your own!
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link href="/plants">
                <button className="px-6 py-3 text-white bg-green-600 rounded hover:bg-green-700">
                  Browse Plants
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-[70vh]">
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-green-900">
            <motion.h1
              className="text-8xl mb-8 font-extrabold "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Garden Book
            </motion.h1>
            <motion.h2
              className="text-4xl font-extrabold sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Grow Your Garden, Grow Your Community
            </motion.h2>
            <motion.p
              className="mt-4 text-lg sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Discover unique plants, share your love for gardening, and connect with fellow gardeners.
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link href="/auth/signin">
                <button className="px-6 py-3 text-white bg-green-600 rounded hover:bg-green-700">
                  Sign Up
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
