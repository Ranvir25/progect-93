const firebaseConfig = {
    apiKey: "AIzaSyDT9WLfbtNW4Sw3c6Cf7FFMLztH9RK-GD8",
    authDomain: "kitter-806c8.firebaseapp.com",
    databaseURL: "https://kitter-806c8-default-rtdb.firebaseio.com",
    projectId: "kitter-806c8",
    storageBucket: "kitter-806c8.appspot.com",
    messagingSenderId: "292478256854",
    appId: "1:292478256854:web:0597c7f51bf8f02bb1ab77"}
    
  const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
   
    //End code
    });});}
getData();