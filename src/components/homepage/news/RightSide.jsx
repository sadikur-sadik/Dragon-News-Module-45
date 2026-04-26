import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";


const RightSide = () => {
  return (
    <div>
      <h2 className='text-xl font-bold border-b pb-2 border-gray-200'>Login</h2>
      <div className='flex flex-col gap-4 mt-5'>
        <button className='flex border border-green-400 p-2  justify-center   rounded-md items-center font-semibold text-center text-lg gap-2'><FcGoogle /> Login with google</button>
        <button className='flex border border-orange-400 p-2 justify-center  rounded-md items-center font-semibold text-center text-lg gap-2'><FaGithub /> Login with github</button>
      </div>
    </div>
  );
};

export default RightSide;