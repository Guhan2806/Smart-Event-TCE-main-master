import React from "react";
import TCELogo from "../../images/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-24  mx-auto px-4 text-white bg-[#a80202]">
      <div className="w-[200px]">
        <img
          src={TCELogo}
          alt="TCELogo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div class="event text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
        TCE EVENTS
      </div>
      <ul className="hidden md:flex font-medium ">
        <li className="p-4 hover:scale-125">
          <a href="/">Home</a>
        </li>
        <li className="p-4 hover:scale-125">
          <a href="/company">Company</a>
        </li>
        <li className="p-4 hover:scale-125">
          <a href="/resources">Resources</a>
        </li>
        <li className="p-4 hover:scale-125">
          <a href="/about">About</a>
        </li>
        <li className="p-4 hover:scale-125">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
