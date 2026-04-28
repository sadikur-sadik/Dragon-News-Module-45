"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegisterPage = () => {
   const [showPassword , setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = async (data) => {

    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({

      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/"
    })

    if(error){alert(error.message)};
    if(res){alert('SignUp successful')}
  }


  return (
    <div className="container mt-5 bg-slate-100 flex justify-center items-center mx-auto min-h-[80vh]">
      <div className="rounded-xl bg-white p-4">
        <h2 className="font-bold text-xl mb-5 text-center">Create Your Account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset relative bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-4">
            {/* <legend className="fieldset-legend">Login Your Account</legend> */}

            <label className="label">Name</label>
            <input {...register("name", { required: "Name is required" })} type="text" className="input" placeholder="Enter Name" />


            {errors.name && <p>{errors.name.message}</p>}

            <label className="label">Photo URL</label>
            <input {...register("photo", { required: "Photo URL required" })} type="text" className="input" placeholder="Enter Photo URL" />


            {errors.photo && <p>{errors.photo.message}</p>}

            <label className="label">Email</label>
            <input {...register("email", { required: "Email is required" })} type="email" className="input" placeholder="Enter Email" />

            {errors.email && <p>{errors.email.message}</p>}

            <label className="label">Password</label>
            <input {...register("password", { required: "At least 4 digits of password is needed" })} type={showPassword ? "text" : "password"} className="input" placeholder="Enter Password" />
            <span className="absolute right-7 bottom-23" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEye/> : <FaEyeSlash/>}</span>
            {errors.password && <p>{errors.password.message}</p>}
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>


      </div>
    </div>
  );
};

export default RegisterPage;