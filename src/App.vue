<template>
  <div id="app">
    <Header :email=email />
    <section class="main">
      <div class="container">
        <br>
        <br>
        <router-view/>
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>BOGOAlert has no affiliation with Publix Super Markets, Inc.</p>
        <p><a href="/legal.html">Privacy Policy</a> | <a href="/legal.html">Terms of Service</a></p>
        <p>&copy;2019 BOGOAlert, All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require('firebase/app');

// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAlMyyUTzvWWBXMvHz9t1xwKpEJmLctKZk',
  authDomain: 'publix-bogo-4f432.firebaseapp.com',
  databaseURL: 'https://publix-bogo-4f432.firebaseio.com',
  projectId: 'publix-bogo-4f432',
  storageBucket: 'publix-bogo-4f432.appspot.com',
  messagingSenderId: '78299533882',
  appId: '1:78299533882:web:c59d145b08807de9cd1b03',
  measurementId: 'G-3L3YMVMQHG',
});

// import Deal from './components/Deal.vue';
let userEmail = null;
if (firebase.auth().currentUser) {
  userEmail = firebase.user.email;
  console.log(userEmail);
} else {
  console.log('not signed in');
}

export default {
  data() {
    return {
      email: userEmail,
    };
  },
  name: 'App',
  components: {
    Header,
    // Deal,
  },
};

</script>

<style lang="scss">
@import 'assets/css/styles.css';
</style>
