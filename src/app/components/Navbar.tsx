'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import logo from '../../../public/logo.png'
import { useSession } from 'next-auth/react';
import { logout } from '@/lib/auth';

const Navbar = () => {
  const {data: session} = useSession()
  
    return (
    <nav>
        <div>
            <div className='flex justify-around items-center p-4'>
                <div className='items-center'>
                    <Link className='flex items-center' href={"/"}>
                        <Image 
                        src={logo}
                        alt="Job Board Logo"
                        width={40}
                        height={40}
                        />
                        <span>Garden Book </span>
                    </Link>
                </div>
                <div className='flex justify-between'>
                    {session ? (<><div className='hidden lg:flex'>
                         <Link className='p-2 hover:text-green-700' href={"/plants"}> Browse Plants</Link>
                    <Link className='p-2 hover:text-green-700' href={"/plants/add"}> Add Plants</Link>
                    <Link className='p-2 hover:text-green-700' href={"/plants/mygarden"}> My Plants</Link>
                    </div>
                    <Link onClick={logout} className='p-2 flex px-5 hover:text-green-700' href={"/auth/signin"}>Log Out</Link>
                    </>): (<><Link className='p-2 px-5 hover:text-green-700' href={"/auth/signin"}>Sign In</Link></>)}
                    
                   

                    

                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;