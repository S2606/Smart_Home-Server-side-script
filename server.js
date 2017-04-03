/**
 * Created by Shagun on 11/02/2017.
 */
var express=require('express');
var app=express();
var firebase = require('firebase');
var config = {
    apiKey: <YOUR API KEY>,
    authDomain: <YOUR AUTH DOMAIN>,
    databaseURL: <YOUR DATABASE URL>,
    storageBucket: <YOUR STORAGE BUCKET>,
    messagingSenderId: <YOUR ID>
};
var device={
    angle:"",
    name:"",
    status:""
};
firebase.initializeApp(config);
var rootref1=firebase.database().ref('devices').child('0');
var rootref2=firebase.database().ref('devices').child('1');
var rootref3=firebase.database().ref('devices').child('2');
var rootref4=firebase.database().ref('devices').child('3');
var l1,l2,l3,l4,count=0;
app.get('/api',function (req, res) {
    rootref1.on('value', function (snapshot) {
        var data = snapshot.val();
        l1 = data.status;
        count++;
    });
    rootref2.on('value', function (snapshot) {
        var data = snapshot.val();
        l2 = data.status;
        count++;
    });
    rootref3.on('value', function (snapshot) {
        var data = snapshot.val();
        l3 = data.status;
        count++;
    });
    rootref4.on('value', function (snapshot) {
        var data = snapshot.val();
        l4 = data.status;
        count++;
    });
    if (count > 0) {
        var ans = l1+l2+l3+l4;
        res.json({data: ans});
   }

});

var server = app.listen(process.env.PORT || 8000, function(){
    console.log('Server listening on port 8000');
});

