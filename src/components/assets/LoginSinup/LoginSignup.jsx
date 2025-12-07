import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginSignup = () => {
  const [action, setAction] = useState("Create account");

  const backgroundUrl =
    "https://images.unsplash.com/photo-1682964824039-8973ade8e681?q=80&w=1920&auto=format&fit=crop";


  return (
    <div className=" w-full min-h-screen flex items-center justify-center bg-cover bg-center "  style={{ backgroundImage: `url(${backgroundUrl})` }} >
      <div className="w-[550px] bg-transparent shadow-2xl  shadow-black rounded-2xl p-10 flex flex-col items-center">
        <div className=" flex flex-col items-center gap-[15px] w-full mt[30px]">
          <div className=" text-blue-400 font-bold text-[48px]">{action}</div>
          <div className="w-[61px] h-1 bg-blue-400 rounded-2xl"> </div>
        </div>
        <div className=" mt-[55px] flex items-center flex-col gap-5 ">
            {action != "Login" && (<div className="flex items-center gap-[25px] w-[480px] h-20 bg-gray-200 rounded-xl mx-auto px-5">
            <IoPersonCircle className="text-gray-500 text-4xl" />
            <input
              type="text"
              className="flex-1 h-[50px] bg-transparent border border-gray-300 rounded-lg px-3 outline-none text-gray-700 placeholder:text-gray-500"
              placeholder="Enter your name"
            />
          </div>)}
         
          <div className="flex items-center gap-[25px] w-[480px] h-20 bg-gray-200 rounded-xl mx-auto px-5">
            <MdEmail className="text-gray-500 text-4xl" />

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-[50px] bg-transparent border border-gray-300 rounded-lg px-3 outline-none text-gray-700 placeholder:text-gray-500"
            />
          </div>

          <div className="flex items-center gap-[25px] w-[480px] h-20 bg-gray-200 rounded-xl mx-auto px-5">
            <RiLockPasswordFill className="text-gray-500 text-4xl" />

            <input
              type="password"
              placeholder="Enter your password"
              className="flex-1 h-[50px] bg-transparent border border-gray-300 rounded-lg px-3 outline-none text-gray-700 placeholder:text-gray-500"
            />
          </div>
        </div>
        {action != "Create account" && (<div className="pr-[250px] mt-[17px] text-[#a8a4a4]">Forgot Password? <span className="text-blue-300 cursor-pointer" >Click Here!</span></div>)}
        
        <div className="flex gap-[30px]  mt-10">
          <div
          onClick={()=>{setAction("Create account")}}
            className={`cursor-pointer flex justify-center items-center w-[120px] h-10 rounded-full text-[15px] font-semibold 
    ${action === "Login" ? "bg-gray-200 text-black" : "bg-blue-400 text-white"}`}
          >
            Sign Up
          </div>

          <div
          onClick={()=>{setAction("Login")}}
            className={`cursor-pointer flex justify-center items-center w-[120px] h-10 rounded-full text-[15px] font-semibold 
    ${action === "Create account" ? "bg-gray-300 text-black" : "bg-blue-400 text-white"}`}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;