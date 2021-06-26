var firebaseConfig = {
    apiKey: "AIzaSyApYt7W4eN_9jCIOApQCq-Ed0sCKNRLN0U",
    authDomain: "kwitter-74aa3.firebaseapp.com",
    databaseURL: "https://kwitter-74aa3-default-rtdb.firebaseio.com",
    projectId: "kwitter-74aa3",
    storageBucket: "kwitter-74aa3.appspot.com",
    messagingSenderId: "924440713802",
    appId: "1:924440713802:web:4eb7d7b2ab4ccbc40fa4b3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("room name-"+Room_names);
    row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function  addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}