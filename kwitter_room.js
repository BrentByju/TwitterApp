


document.addEventListener("DOMContentLoaded", function() {
  var Something = localStorage.getItem("PlayerName");
  document.getElementById("player").innerHTML = "Welcome " + Something + "!";
});



function addRoom(){

  window.location = 'kwitter_page.html';  


  var room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  


//-----------------------------------------------------------------




  }


firebase.initializeApp(firebaseConfig);
const firebaseConfig = {
  apiKey: "AIzaSyD-bzQYj-5JQEglybrzOWX7zUGF-XwQJaI",
  authDomain: "twitter-941b8.firebaseapp.com",
  projectId: "twitter-941b8",
  storageBucket: "twitter-941b8.appspot.com",
  messagingSenderId: "170371931209",
  appId: "1:170371931209:web:af19e05efb2a8bbd73b398",
  measurementId: "G-C64HGSWC2Y"
};

function logout(){
  window.location = 'index.html';
};

//---------------------------------------------------------------------




  //-------------------------------------------------------------------

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
var Room_names = childKey;
//Start code
var row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div> <hr>";
//End code
});});}
getData();

