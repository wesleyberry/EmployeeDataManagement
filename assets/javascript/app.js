 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyC8p-eQ6Kg7Zgq3heicb5fScHotxQm_iXM",
   authDomain: "employee-data-management-59292.firebaseapp.com",
   databaseURL: "https://employee-data-management-59292.firebaseio.com",
   projectId: "employee-data-management-59292",
   storageBucket: "",
   messagingSenderId: "939302088365"
 }
firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("child_added",function(){
    console.log("okay");
});

$("#add-employee-btn").on("click",function(event){
    event.preventDefault()
    console.log("b");
    database.ref().push({
        name:$("#employee-name-input").val().trim(),
        role:$("#role-input").val().trim(),
        start:$("#start-input").val().trim(),
        rate:$("#rate-input").val().trim()
    });
    console.log("a");
});

