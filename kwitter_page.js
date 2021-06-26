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
  room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
like=message_data['like'];
message=message_data['message'];
name_with_tag="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";

}


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

function  update_like(message_id){
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    firebase.database().ref(room_name).child(message_id).update({like:updated_likes});
}