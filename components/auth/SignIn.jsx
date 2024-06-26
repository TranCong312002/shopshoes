import React from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SignIn({ signUp }) {
  return (
    <>
      <div
        className={`absolute top-0 transition-all duration-[0.6s] ease-in-out h-full left-0 w-1/2 z-[2] ${
          signUp ? "translate-x-[100%]" : ""
        } `}
      >
        <form
          // onSubmit={handleSignIn}
          className="bg-white flex justify-center flex-col px-[50px] h-full"
        >
          <h1 className="font-bold m-0 text-[30px] text-center">Đăng nhập</h1>
          <NavLink
            // onClick={signInWithGoogle}
            className="w-full my-3 flex text-white gap-[15px] items-center justify-center cursor-pointer bg-[#dd4b39]"
          >
            <span className="no-underline flex h-[40px] text-[18px] items-center justify-center">
              <FontAwesomeIcon className="icon" icon={faGoogle} />
            </span>
            <p>Continue with Google</p>
          </NavLink>
          <span className="text-[13px] mb-3  flex items-center">
            <div className="flex-grow flex-shrink w-[30px] h-[2px] inline-block bg-[#ccc]"></div>
            <p className="mx-[5px]">Hoặc đăng nhập bằng tài khoản</p>
            <div className="flex-grow flex-shrink w-[30px] h-[2px] inline-block bg-[#ccc]"></div>
          </span>
          <input
            name="email"
            // onChange={handleInput}
            className="bg-[#f3f3f4] transition-all ease-linear duration-150 border border-[#fff] focus:bg-white outline-none focus:shadow-shadowPink focus:border focus:border-[#ea4c8966] py-3 px-[15px] my-2 w-full"
            type="text"
            placeholder="Email"
          />
          <input
            name="password"
            // onChange={handleInput}
            className="bg-[#f3f3f4] transition-all ease-linear duration-150 border border-[#fff] focus:bg-white outline-none focus:shadow-shadowPink focus:border focus:border-[#ea4c8966] py-3 px-[15px] my-2 w-full"
            type="password"
            placeholder="Password"
          />
          <NavLink
            onClick={() => setResetPassword(true)}
            className=" text-[#333] text-[14px] underline my-[15px]"
          >
            Quên mật khẩu?
          </NavLink>
          <button
            type="submit"
            className="bg-primary text-white text-[13px] leading-5 font-bold py-3 px-[45px] tracking-[1px] uppercase transition-transform ease-in delay-[80ms] focus:outline-none"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
