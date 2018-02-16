const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.addnumbers = functions.https.onRequest((request, response) => {
    var name = request.body.first_name;

    var lname = request.body.last_name;


    var num1 = request.body.num1;
    var num2 = request.body.num2;
    response.send("welcome : " + name + "<br>Father name : " + lname + "<br>Sum = " + num1 + num2);
});

exports.getRandom = functions.https.onRequest((request,response) =>{
    response.json({"status":"success","message":Math.floor((Math.random() * 10) + 1)});
});
