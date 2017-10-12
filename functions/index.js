const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.addnumbers = functions.https.onRequest((request, response) => {
    var name = request.body.first_name;

    var lname = request.body.last_name;


    var num1 = request.body.num1;
    var num2 = request.body.num2;
    response.send("welcome : " + name + "<br>Father name : " + lname + "<br>Sum = " + num1 + num2);

});