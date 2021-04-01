// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2uSWcl3naqRbO9qAD2PY5ZwsPQDkSicw",
    authDomain: "search-engine-2d9ce.firebaseapp.com",
    projectId: "search-engine-2d9ce",
    storageBucket: "search-engine-2d9ce.appspot.com",
    messagingSenderId: "904677781647",
    appId: "1:904677781647:web:bce0dacabf176c84e580fa",
    measurementId: "G-KQGVJD8EBN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider,db}
