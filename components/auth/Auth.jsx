import React, { useState } from "react";
import "./auth.scss";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function Auth() {
  const [signUp, setSignUp] = useState(false);
  return (
    <>
      <div
        className={`my-[35px] mx-auto bg-white shadow-shadowAuth relative overflow-hidden w-[768px] max-w-full min-h-[480px] ${
          signUp ? "right-panel-active" : ""
        }`}
        id="container"
      >
        <SignIn signUp={signUp} />
        <SignUp signUp={signUp} />
        <div className="overlay-container">
          <div className="overlay">
            <div className="absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 translate-x-0 transition-transform ease-in-out duration-[0.6s] overlay-left">
              <h1 className="font-bold m-0 text-[25px]">
                Đăng nhập vào Shoes Plus
              </h1>
              <p className="text-[14px] font-[300] leading-5 tracking-[0.5px] mt-5 mb-[30px]">
                Đã có tài khoản? Vui lòng đăng nhập ở đây
              </p>
              <button
                className="  border border-solid border-white bg-transparent text-white text-[13px] font-bold py-3 px-[45px] tracking-[1px] uppercase transition-transform ease-in duration-[80ms] active:scale-95 focus:outline-none"
                id="signIn"
                onClick={() => setSignUp(false)}
              >
                Đăng nhập
              </button>
            </div>
            <div className="absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 translate-x-0 transition-transform ease-in-out duration-[0.6s] overlay-right">
              <h1 className="font-bold m-0 text-[25px]">Chưa có tài khoản?</h1>
              <p className="text-[14px] font-[300] leading-5 tracking-[0.5px] mt-5 mb-[30px]">
                Nhập thông tin của bạn để thỏa sức mua sắm với Shoes Plus
              </p>
              <button
                className="border border-solid border-white bg-transparent text-white text-[13px] font-bold py-3 px-[45px] tracking-[1px] uppercase transition-transform ease-in duration-[80ms] active:scale-95 focus:outline-none"
                id="signUp"
                onClick={() => setSignUp(true)}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
