<template>
  <div id="app">
    <Header h1="Current Publix BOGO Offers"/>
    <section class="main">
      <div class="container">
        <br>
        <br>
        <div class="columns is-multiline" id="items">
          <!-- eslint-disable-next-line max-len -->
          <Deal product="Test" img="https://quetzalholdings.com/bogoalert.png" deal_type="BOGO" terms="BOGO TEST" date_start="01/01/2020" date_end="01/01/2020"/>
        </div>
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
import Deal from './components/Deal.vue';

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

// const db = firebase.firestore();


export default {
  name: 'App',
  components: {
    Header,
    Deal,
  },
};

const xmlhttp = new XMLHttpRequest();
let data = {};
xmlhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    data = this.responseText;
    console.log(data);
    data = JSON.parse(data);
    data = data.data.offer;
    console.log(data);
    // console.log(Object.keys(data));
    data.forEach((obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
      });
      console.log('-------------------');
    });
  } else {
    console.log('error');
  }
};
xmlhttp.open('GET', 'https://api.bogoalert.com/publix_bogos.json');
xmlhttp.send();

// console.log(data);

</script>

<style lang="scss">
@import 'assets/css/styles.css';
</style>
