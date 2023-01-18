//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCoVDKcNqVq8CJuoH2ZwOLxhaxQQSH3UJ8",
      authDomain: "kwitter-67907.firebaseapp.com",
      databaseURL: "https://kwitter-67907-default-rtdb.firebaseio.com",
      projectId: "kwitter-67907",
      storageBucket: "kwitter-67907.appspot.com",
      messagingSenderId: "612629031289",
      appId: "1:612629031289:web:19481013d47e257f24a7a8",
      measurementId: "G-5M0C3F316Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name -" + Room_names);
                  row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  
                  //End code
            });
      });
}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";      
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "index.html";
}