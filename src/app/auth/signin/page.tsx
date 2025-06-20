'use client'
import Image from 'next/image';
import React from 'react';
import github from '@/../public/github.svg';
import { login } from '@/lib/auth';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-2xl shadow-lg backdrop-blur-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to GardenBook</h2>
          <p className="text-lg text-gray-600 mb-6">
            Sign in to add plants or find other plants in your garden.
          </p>
        </div>
        <div className="my-6">
          <button
            onClick={login}
            className="flex items-center w-full justify-center gap-3 px-4 py-3 text-lg font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-2xl hover:bg-gray-200 transition-all duration-200 focus:ring-2 focus:ring-green-500"
            aria-label="Sign in with GitHub"
          >
            <Image src={github} width={30} height={30} alt="GitHub logo" />
            <span>Continue with GitHub</span>
          </button>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4">
          By signing in, you agree to our{' '}
          <a href="#" className="text-green-600 underline hover:text-green-800">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-green-600 underline hover:text-green-800">
            Privacy Policy
          </a>.
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
