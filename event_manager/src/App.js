import React from "react";
import "./App.css";
import Search from "./components/search.js";
import Logo from "./components/logo.js";
import Upcoming from "./components/upcoming";
import Profile from '../src/images/profile.png'
function App() {
  return (
    <div className="App">
      <div className="head">
        <Logo />
        <div className="titles">
        <h1>TCE EVENTS</h1>
        </div>
        <Search />
        <a id="reg" href="./">
          <b>My Events</b>
        </a>
        <div className="dropdown">
        <button id="sig">
        <img
          src={Profile}
          alt="Profile"
          width={60}
          height={50}
          className="rounded-full"
        />
        </button>
        <div className="dropdown-content">
          <a href="./">Account</a>
          <a href="./">Sign Out</a>
        </div>
        </div>
      </div>
      <div className="body">
      <Upcoming />
      </div>
    </div>
  );
}

export default App;
