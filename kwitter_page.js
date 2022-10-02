//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBL2lvxBh1LaAlt8T2hGXbU8ZaFOiSI3l8",
  authDomain: "kwitterrrr-c91d9.firebaseapp.com",
  databaseURL: "https://kwitterrrr-c91d9-default-rtdb.firebaseio.com",
  projectId: "kwitterrrr-c91d9",
  storageBucket: "kwitterrrr-c91d9.appspot.com",
  messagingSenderId: "201642024302",
  appId: "1:201642024302:web:0e9241831a1abf1180357f"
};

// Initialize Firebase
firebase.initializeApp = initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value = "";
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
