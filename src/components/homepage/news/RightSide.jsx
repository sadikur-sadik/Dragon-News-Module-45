"use client"
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { authClient } from '@/lib/auth-client';


const RightSide = () => {

  const handleGoogleSignIn = async () => {

    const data = await authClient.signIn.social({
      provider:"google",
    })
    
  } 
  const handleGitHubSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
    console.log(data)
}
  return (
    <div>
      <h2 className='text-xl font-bold border-b pb-4 border-gray-200'>Login</h2>
      <div className='flex flex-col gap-4 mt-5'>
        <button onClick={handleGoogleSignIn} className='flex border border-green-400 p-2  justify-center   rounded-md items-center font-semibold text-center text-lg gap-2'><FcGoogle /> Login with google</button>
        <button onClick={handleGitHubSignIn} className='flex border border-orange-400 p-2 justify-center  rounded-md items-center font-semibold text-center text-lg gap-2'><FaGithub /> Login with github</button>
      </div>
    </div>
  );
};

export default RightSide;