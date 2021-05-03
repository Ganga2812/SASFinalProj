import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDQ9fBNst3TX337YQI0hV4CSfaUex9NHAM",
    authDomain: "authapp-2e34c.firebaseapp.com",
    databaseURL: "https://authapp-2e34c-default-rtdb.firebaseio.com/",
    projectId: "authapp-2e34c",
    storageBucket: "authapp-2e34c.appspot.com",
    messagingSenderId: "31535714740",
    appId: "1:31535714740:web:a1cb29a2c2dfb73bd9e2e1",
    measurementId: "G-N9LQWT848S"
  };

  const fire = Firebase.initializeApp(firebaseConfig);

  export default fire;