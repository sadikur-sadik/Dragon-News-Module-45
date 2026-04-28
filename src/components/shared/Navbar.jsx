"use client"
import Link from "next/link";
import useAvatar from "@/assets/user.png"
import Image from "next/image";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {

  

  const { data: session , isPending} = authClient.useSession();
  const user = session?.user;
  
  
if(isPending){
  <div>Loading.....</div>
}
  

  return (
    <div className=" container mx-auto mt-3 flex justify-between items-center">
      <div></div>
      <ul className="flex gap-10">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/career">Career</Link></li>
      </ul>

      <div className="flex items-center gap-5">
        {user ?
          <div className="flex items-center gap-5">
            <h2>{user?.name}</h2>
            <Image src={user?.image || useAvatar} alt="nav Logo" width={45} height={45} className="rounded-full w-12 h-12">

            </Image>
            <button onClick={()=>authClient.signOut()} className="btn bg-gray-900 text-white">
              LogOut
            </button>
          </div> 
          
          
          
          :
          <div className="flex items-center gap-5">


            <button className="btn bg-gray-900 text-white">
              <Link href="/login" className="p-3">Login</Link>
            </button>
            <button className="btn bg-gray-900 text-white">
              <Link href="/register" className="p-3">Register</Link>
            </button>
          </div>}
      </div>
    </div>
  );
};

export default Navbar;