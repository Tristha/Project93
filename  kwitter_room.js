//var firebaseConfig = {
    //apiKey: "AIzaSyDOE0ZDbapTYVYkiGUNdHPwOW50cEp5hJo",
    //authDomain: "kwitter-edb71.firebaseapp.com",
    //databaseURL: "https://kwitter-edb71-default-rtdb.firebaseio.com",
    projectId: "kwitter-edb71",
    storageBucket- "kwitter-edb71.appspot.com",
    messagingSenderId- "173797673656",
   appId- "1:173797673656:web:c5aca7ba5f361eedc4824d",
    measurementId- "G-WRW6DH8J02"
;
firebase.initializeApp(firebaseConfig);


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}