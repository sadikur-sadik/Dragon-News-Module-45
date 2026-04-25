import Navbar from "@/components/Navbar";

const AuthLayout = ({children}) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default AuthLayout; 