import React, { useEffect, useState } from "react";
import localForage from "localforage";
import "./App.css";
import { getApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
function App() {
  useEffect(() => {
    onMessage(getMessaging(), (payload) => {
      setCount(payload.notification?.title + " " + payload.notification?.body!);
      console.log("Title", payload.notification?.title);
      console.log("Body", payload.notification?.body);
    });
  }, []);
  localForage.getItem("message").then((val) => setCount(val as string));
  const [count, setCount] = useState("nothing to show");
  const check = getApp().options;
  const messaging = getMessaging();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/messaging-sw.js");
  }
  Notification.requestPermission().then((data) => {
    console.log("thanks for granting persimission✨");
  });
  // localForage.getItem('notificationPayload',(err)=>{console.log(err)})
  return (
    <div>
      <code>{count}</code>
    </div>
  );
}

export default App;
