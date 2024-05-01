import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SignUp({ SignUp }) {
  return (
    <>
      <div
        className={`absolute top-0 transition-all duration-[0.6s] ease-in-out w-1/2 h-full left-0 opacity-0 z-[1] ${
          SignUp
            ? " translate-x-[100%] opacity-100 z-[5] animate-showSignUp"
            : ""
        }`}
      >
        <form
          // onSubmit={handleSignUp}
          className="bg-white flex justify-center flex-col px-[50px] h-full text-center"
        >
          <h1 className="font-bold m-0 text-[30px]">Tạo tài khoản</h1>
          <NavLink
            // onClick={signInWithGoogle}
            className="w-full my-3 flex text-white gap-[15px] items-center justify-center cursor-pointer bg-[#dd4b39]"
          >
            <span
              className="no-underline flex h-[40px] text-[18px] items-center justify-center"
              href="#"
            >
              <FontAwesomeIcon className="icon" icon={faGoogle} />
            </span>
            <p>Continue with Google</p>
          </NavLink>
          <span className="text-[13px] mb-3  flex items-center">
            <div className="flex-grow flex-shrink w-[30px] h-[2px] inline-block bg-[#ccc]"></div>
            <p className="mx-[5px]">Hoặc tạo tài khoản bằng email</p>
            <div className="flex-grow flex-shrink w-[30px] h-[2px] inline-block bg-[#ccc]"></div>
          </span>
          <input
            name="email"
            className="bg-[#f3f3f4] transition-all ease-linear duration-150 border border-[#fff] focus:bg-white outline-none focus:shadow-shadowPink focus:border focus:border-[#ea4c8966] py-3 px-[15px] my-2 w-full"
            type="text"
            placeholder="Email"
            // onChange={handleInput}
          />
          <input
            name="password"
            className="bg-[#f3f3f4] transition-all ease-linear duration-150 border border-[#fff] focus:bg-white outline-none focus:shadow-shadowPink focus:border focus:border-[#ea4c8966] py-3 px-[15px] my-2 w-full"
            type="password"
            placeholder="Password"
            // onChange={handleInput}
          />
          <input
            name="Cpassword"
            className="bg-[#f3f3f4] transition-all ease-linear duration-150 border border-[#fff] focus:bg-white outline-none focus:shadow-shadowPink focus:border focus:border-[#ea4c8966] py-3 px-[15px] my-2 w-full"
            type="password"
            placeholder="Nhập lại Password"
            // onChange={handleInput}
          />
          <button
            type="submit"
            className="mt-[10px] disabled:bg-blue-400 bg-primary text-white text-[13px] leading-5 font-bold py-3 px-[45px] tracking-[1px] uppercase transition-transform ease-in delay-[80ms] focus:outline-none"
          >
            Đăng kí
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
