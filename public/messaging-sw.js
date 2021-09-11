importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyAmIHvAe-EOYY-TUPkcb_Byi74j7qqG9dY",
  projectId: "pushnotifications-8d42a",
  messagingSenderId: "677674369528",
  appId: "1:677674369528:web:1926ecb152fcb5a8e1160d",
});

const messaging = firebase.messaging();

console.log(messaging);
messaging.onBackgroundMessage((payload)=>{
    console.log(payload)
    console.log("✨🚀")
})
messaging.getToken().then((tok) => {
  console.log(tok);
});


// console.log("indeed");
// console.log(getToken())
