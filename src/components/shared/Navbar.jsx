import Link from "next/link";
import useAvatar from "@/assets/user.png"
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" container mx-auto mt-3 flex justify-between items-center">
      <div></div>
      <ul className="flex gap-10">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/career">Career</Link></li>
      </ul>

      <div className="flex items-center gap-5">
        <Image src={useAvatar} alt="nav Logo"  width={45}  height={45}>

        </Image>

        <button className="btn bg-gray-900 text-white">
          <Link href="/login" className="p-3">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;