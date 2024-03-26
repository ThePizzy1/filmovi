const firebaseConfig = {
  apiKey: "AIzaSyDqHBofhcN_uvSeSF4ANMSC3r3qOXdpa9M",
  authDomain: "filmovi-27cb5.firebaseapp.com",
  databaseURL: "https://filmovi-27cb5-default-rtdb.firebaseio.com",
  projectId: "filmovi-27cb5",
  storageBucket: "filmovi-27cb5.appspot.com",
  messagingSenderId: "6559065749",
  appId: "1:6559065749:web:686643c6cbf820d2465d9c"
};
  firebase.initializeApp(firebaseConfig);
  
  // Kreiranje objekta Firebase baze
  var oDb = firebase.database();
  var oDbBaza = oDb.ref('filmovi');


  var auth = firebase.auth();