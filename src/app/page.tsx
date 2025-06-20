'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();
  const user = session?.user?.name;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-2xl shadow-md">
        {session ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Hello, {user}!</h1>
            <p className="text-lg text-gray-600">
              Welcome back to GardenBook. Start exploring plants, connecting with others, or listing your own!
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to GardenBook!</h1>
            <p className="text-lg text-gray-600 mb-6">
              A place where you can browse plants from others, connect with fellow enthusiasts, and list your own plants for others to see. 
            </p>
            <p className="text-lg text-gray-600">
              Click <Link className='font-extrabold underline text-green-700' href={"/auth/signin"}>Sign In</Link> to get started now!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
