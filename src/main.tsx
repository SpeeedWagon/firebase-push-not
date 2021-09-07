import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {initializeApp} from "firebase/app";

// Use your config values here.
  initializeApp({
  apiKey: "AIzaSyAmIHvAe-EOYY-TUPkcb_Byi74j7qqG9dY",
  projectId: "pushnotifications-8d42a",
  messagingSenderId: "677674369528",
  appId: "1:677674369528:web:1926ecb152fcb5a8e1160d",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
