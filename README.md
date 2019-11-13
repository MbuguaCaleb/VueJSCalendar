# VueJSCalendar

A Vue JS Calendar with Vuetify and Firebase Backend

# FireBase

```
It is a type of NOSQL Database with documents and collections.

A Collection is like a table and the document
is a JSON Objects to be stored in the collection

```

```
A Config object is required as URI when connecting to a NOSQL Database

```

# commands

```
(a)Global VUEJS CLI-npm i -g @vue/cli

(b) sudo vue add vuetify

(c)sudo npm i firebase vue-textarea-autosize

```

```

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAsnZok9w0uZIBqpl8Q9-_o3nRBvb4eatM",
    authDomain: "vue-calendar-22ba9.firebaseapp.com",
    databaseURL: "https://vue-calendar-22ba9.firebaseio.com",
    projectId: "vue-calendar-22ba9",
    storageBucket: "vue-calendar-22ba9.appspot.com",
    messagingSenderId: "184442673249",
    appId: "1:184442673249:web:27e65d57c8ca51196e7220"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

```

# initialization

```
Main APP initializations like in node is done in the main.js file

Event listeners call unto methods

Passing props to componets is one of the important things

```
