import { useState,useEffect } from "react";
import NearLogo from "./assets/logo-black.svg";
import EducationalText from "./container/EducationalText";
import SignInButton from "./components/SignInButton";
import SignOutButton from "./components/SignOutButton";
import "./App.css";

const contractId=process.env.CONTRACT_NAME;

function App({wallet}) {
  const [message, setMessage] = useState();
  const [newMessage, setNewMessage] = useState();
  const getMessage = async ()=>{
    const message=await wallet.viewMethod({method: 'get_greeting',contractId})
    console.log("message: ",message)
    setMessage(message);
  }
  const saveMessage=async ()=>{
    if(!newMessage) {
      alert("Type some message");
      return;
    }
    wallet.callMethod({ method: 'set_greeting', args: { message: newMessage }, contractId })
      .then(async () => {
        getMessage();
        alert("Message saved successfully")
      })
  }
  useEffect(()=>{
    getMessage();
  },[])
  console.log("Wallet accound Id: ",wallet.accountId)
  return (
    <div className="app__container">
      {wallet.accountId ?<SignOutButton accountId={wallet.accountId} onClick={()=>{wallet.signOut()}}/>:<SignInButton onClick={()=>{wallet.signIn()}}/>}
      <img src={NearLogo} className="near-logo" />
      <h1>
        The contract says: <span className="greeting">{message}</span>
      </h1>
      <div className="change_greeting_container">
        <span>Change Greeting:</span>
        <div>
          <input placeholder="Type Here" className="change_greeting_input" onChange={(e)=>setNewMessage(e.target.value)}/>
          <button className="save_btn" onClick={saveMessage}>Save</button>
        </div>
      </div>
      <EducationalText/>
    </div>
  );
}

export default App;
