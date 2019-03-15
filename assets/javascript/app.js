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

database.ref().on("child_added",function(snap){
    var newLine=$("<tr>");
    var newName=$("<td>");
    var newRole=$("<td>");
    var newStart=$("<td>");
    var newRate=$("<td>");
    var newMonths=$("<td>");
    var newPaid=$("<td>");
    var elements=[newName,newRole,newStart,newRate,newMonths,newPaid];
    var fromDB=[snap.val().name,snap.val().role,snap.val().start,snap.val().rate];
    for (var i=0;i<elements.length;i++){
        if(i<fromDB.length){
            elements[i].text(fromDB[i]);
        }
        elements[i].attr("scope","col");
        console.log(elements[i].text());
    }
    var temp=elements[3];
    elements[3]=elements[4]
    elements[4]=temp;
    elements.forEach(function(element){
        newLine.append(element);
    });
    $("tbody").append(newLine);
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

