import { useState } from "react";
import NearLogo from "./assets/logo-black.svg";
import EducationalText from "./container/EducationalText";
import SignInButton from "./components/SignInButton";
import "./App.css";

function App() {
  return (
    <div className="app__container">
      <SignInButton/>
      <img src={NearLogo} className="near-logo" />
      <h1>
        The contract says: <span className="greeting">{"Hello"}</span>
      </h1>
      <div className="change_greeting_container">
        <span>Change Greeting:</span>
        <div>
          <input placeholder="Type Here" className="change_greeting_input" />
          <button className="save_btn">Save</button>
        </div>
      </div>
      <EducationalText/>
    </div>
  );
}

export default App;
