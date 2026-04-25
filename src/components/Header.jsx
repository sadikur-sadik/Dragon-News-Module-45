import React from 'react';
import  logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";


//=> '2014-02-11'

// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ];
// dates.sort(compareAsc);



const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10 gap-3'>
      <Image src={logo} alt="Logo" width={300} height={200}></Image>
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMM, dd, yyyy")}</p>
   </div>
  );
};

export default Header;