/**
 * Created by Shagun on 11/02/2017.
 */
var express=require('express');
var app=express();
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyBQzmefG5ff7jibUIlEcoAHUcA-YyXTJPQ",
    authDomain: "smart-home-e010c.firebaseapp.com",
    databaseURL: "https://smart-home-e010c.firebaseio.com",
    storageBucket: "smart-home-e010c.appspot.com",
    messagingSenderId: "318382701680"
};
firebase.initializeApp(config);
var rootref=firebase.database().ref();
var data={
    L1:"",
    L2:"",
    L3:"",
    L4:""
};

app.get('/api',function (req, res) {
   rootref.on('value', function (snapshot) {
      var data=snapshot.val();
      var ans=data.L1+data.L2+data.L3+data.L4;
       res.json({data:ans});
   });
});

var server = app.listen(process.env.PORT || 8000, function(){
    console.log('Server listening on port 8000');
});

