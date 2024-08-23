import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-20 m-auto w-1/2">
      <p className=" border-b-4 border-stone-900 font-semibold tracking-wider w-fit m-auto p-2 b flex items-center justify-center text-2xl ">
        Login
      </p>
      <div className="flex flex-col items-center mt-10 gap-6">
        <input
          className="py-3 px-5 w-[500px] max-w-full tracking-wider mx-auto border border-[#c0c0c0] outline-none "
          type="email"
          placeholder="Email"
        />
        <input
          className="py-3 px-5 w-[500px] max-w-full  tracking-wider mx-auto border border-[#c0c0c0] outline-none "
          type="password"
          placeholder="Password"
        />
        <Link className="  tracking-wide text-[12px]  underline underline-offset-2 uppercase">
          Forgot your password?
        </Link>
        <Link className="py-3 px-5 w-[500px] flex items-center justify-center text-xl tracking-wider bg-[#ff7300] text-white max-w-full mx-auto border border-[#c0c0c0] outline-none ">
          Create
        </Link>
        <Link
          to="/register"
          className="  tracking-wide text-[14px]  underline underline-offset-2 uppercase"
        >
          Create account
        </Link>

      </div>
    </div>
  );
};

export default Login;
