"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";


const LoginPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = async (data) => {


    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/"

    })

    if (error) { alert(error.message) };
    if (res) { alert('SignUp successful') }


  }
  return (
    <div className="container mt-5 bg-slate-100 flex justify-center items-center mx-auto min-h-[80vh]">
      <div className="rounded-xl bg-white p-4">
        <h2 className="font-bold text-xl mb-5 text-center">Login Your Account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-4">
            {/* <legend className="fieldset-legend">Login Your Account</legend> */}


            <label className="label">Email</label>
            <input {...register("email")} type="email" className="input" placeholder="Enter Email" />

            <label className="label">Password</label>
            <input {...register("password", { required: "At least 4 digits of password is needed" })} type="password" className="input" placeholder="Enter Password" />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        {errors.password && <p>{errors.password.message}</p>}
        <p className="mt-4 text-sm text-gray-400">
          Do not Have an Account? <Link className="text-red-500" href="/register">Register.</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;