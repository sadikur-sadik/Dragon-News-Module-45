import Navbar from "@/components/Navbar";
import { montserrat } from "../layout"; 
const AuthLayout = ({children}) => {
  return (
    <div className={`${montserrat}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayout; 