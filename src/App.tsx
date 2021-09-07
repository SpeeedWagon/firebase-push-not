import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {getApp} from 'firebase/app'
function App() {
  const [count, setCount] = useState(0)
  const check = getApp().options;
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/messaging-sw.js')    
  }
  return (
    <code>
      {JSON.stringify(check)}
    </code>
  )
}

export default App
