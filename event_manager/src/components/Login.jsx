import React from "react";
import Gif1 from "../images/event6.gif";
import Gif2 from "../images/event2.gif";

function Login() {
  return (
    // eslint-disable-next-line
    <div className="welcome relative">
      <img
        className="gif absolute center-[10rem] left-[8rem]"
        src={Gif2}
        alt="gif1"
      />
      <img
        className="gif absolute center-[10rem] right-[8rem]"
        src={Gif1}
        alt="gif2"
      />
      {/* <img className="gif" src={Gif3} alt=" " /> */}
      <div class="box my-36 flex flex-col items-center justify-between p-10 h-[500px] w-[350px] rounded-lg shadow-lg shadow-black">
        <h1 className="text-2xl text-white">Login To Proceed</h1>
        <input
          class="my-2 w-72 border p-2 rounded-lg shadow-lg focus:shadow-black"
          type="email"
          placeholder="Username"
        />
        <input
          class="my-2 w-72 border p-2 rounded-lg shadow-lg focus:shadow-black"
          type="password"
          placeholder="Password"
        />
        <div class="my-2 flex justify-center">
          <button class="w-72 bg-[#8B0000] text-white rounded-full p-2 border hover:font-bold hover:scale-105 shadow-md hover:shadow-black">
            Login
          </button>
        </div>
        <div className="flex flex-row items-center font-bold">
          <h6 className="relative right-10 text-[16px] text-white">
            New User?
          </h6>
          <div class="my-2 flex justify-center">
            <button class="p-1 w-[110px]  border bg-[#8B0000] text-white rounded-full hover:scale-105 shadow-md hover:shadow-black">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
