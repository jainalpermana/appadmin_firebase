  (function (){  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCBtCvc4Bqeqj6hw8ExViEQ__M8dT8E0J8",
    authDomain: "projectadmin-a06b7.firebaseapp.com",
    databaseURL: "https://projectadmin-a06b7.firebaseio.com",
    projectId: "projectadmin-a06b7",
    storageBucket: "projectadmin-a06b7.appspot.com",
    messagingSenderId: "125242559054"
  };
  firebase.initializeApp(config);

var preLokasi = document.getElementById('lokasi');

var dbRefLokasi = firebase.database().ref().child('lokasi');

dbRefLokasi.on('value', snap=> {
  preLokasi.innerText = JSON.stringify(snap.val(), null, 3);

});

}());

