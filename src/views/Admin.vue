<template>
  <div class="home">
    <img alt="Quetzal Holdings LLC" src="https://quetzalholdings.com/logo.png" class="admin-logo">
    <button class="button is-primary admin-btn" v-on:click="updateBogos">UPDATE BOGO OFFERS</button>
  </div>
</template>

<script>

import firebase from 'firebase';

const db = firebase.firestore();

export default {
  name: 'Home',
  methods: {
    updateBogos() {
      console.log('updating bogos...');
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
          const currentYear = new Date().getFullYear();
          data.forEach((obj) => {
            console.log(obj.product);
            db.collection('bogos').doc(obj.product).set({
              img: obj.img,
              item: obj.product,
              type: obj.deal_type,
              date_start: `${obj.date_start}`,
              date_end: `${currentYear}/${obj.date_end}`,
              terms: obj.terms,
            });
            // Object.entries(obj).forEach(([key, value]) => {
            //   console.log(`${key} ${value}`);
            // });
            // console.log('-------------------');
          });
        } else {
          console.log('error');
        }
      };
      xmlhttp.open('GET', 'https://api.bogoalert.com/publix_bogos.json');
      xmlhttp.send();
    },
  },
};


</script>
<style lang="scss">
@import "../assets/sass/custom.scss";

.admin-logo {
  margin: 25px auto;
  display: block;
  width: 300px;
}
.admin-btn {
  margin: 0 auto;
  display: block;
}
</style>
