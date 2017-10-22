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

exports.test = functions.https.onRequest((request, response) => {
    console.log("test function");
});

exports.compute = functions.https.onRequest((request, response) => {
    var name = request.body.val;
    Console.log(name);
    for (var i = 0; i < number(name); i++) {
        composeMessage(i);
        response.write(i);
    }
    response.end();

    function composeMessage(message) {
        console.log("Loading message %d".green, message);
    }

});