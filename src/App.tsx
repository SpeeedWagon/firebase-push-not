import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
function App() {
  const [count, setCount] = useState(0);
  const check = getApp().options;
  const messaging = getMessaging();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/messaging-sw.js");
  }
  Notification.requestPermission().then((data) => {
    console.log("thanks for granting persimission✨");
  });
  onMessage(getMessaging(), (payload) => {
    console.log("Message received. ", payload);
    // ...
  });
  return <code>{JSON.stringify(check)}</code>;
}

export default App;
