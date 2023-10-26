import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Wallet } from './utils/near-wallet.js'
import './index.css'

const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME })

window.onload = async () => {
  const isSignedIn = await wallet.startUp()
  ReactDOM.createRoot(document.getElementById('root')).render(
      <App wallet={wallet} />
  )
}
