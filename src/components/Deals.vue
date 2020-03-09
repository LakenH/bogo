<template>
<div class="bogo-deals columns is-multiline" id="items">
  <!-- eslint-disable-next-line max-len -->
  <!-- <Deal product="Welcome to BOGO Alert!" img="https://quetzalholdings.com/bogoalert.png" deal_type="Create an account or sign in to view your list!" terms="BOGO TEST" date_start="01/01/2020" date_end="01/01/2020"/> -->
  <!-- eslint-disable-next-line max-len -->
  <Deal v-for="deal in bogoData" :product="deal.item" :key="deal.id" :deal_type="deal.type" :img="deal.img" :date_end="deal.date_end" :date_start="deal.date_start" :terms="deal.terms"/>
</div>
</template>

<script>
import Deal from '@/components/Deal.vue';
import firebase from 'firebase';

const db = firebase.firestore();

export default {
  name: 'Deals',
  components: {
    Deal,
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      bogoData: [],
    };
  },
  // data: {
  //   bogoData: []
  // },
  mounted() {
    this.loadBogos();
  },
  methods: {
    loadBogos() {
      const bogoArray = [];
      let today = new Date();
      today = today.toLocaleDateString('zh-Hans-CN');
      // eslint-disable-next-line prefer-arrow-callback
      db.collection('bogos').where('date_end', '>=', today).get().then(function (bogoDat) {
        console.log(bogoDat);
        let cnt = 0;
        // eslint-disable-next-line prefer-arrow-callback
        bogoDat.forEach(function (doc) {
          // eslint-disable-next-line prefer-template
          // console.log(doc.data());
          // cnt += 1;
          const tempBogoArray = {};
          tempBogoArray.id = cnt;
          tempBogoArray.item = doc.data().item;
          if (doc.data().img == null) {
            tempBogoArray.img = 'https://quetzalholdings.com/bogoalert.png';
          } else {
            // eslint-disable-next-line prefer-template
            tempBogoArray.img = 'https://' + doc.data().img;
          }
          // eslint-disable-next-line prefer-template
          tempBogoArray.date_end = doc.data().date_end.replace(new Date().getFullYear() + '/', '');
          tempBogoArray.date_start = doc.data().date_start;
          tempBogoArray.terms = doc.data().terms;
          tempBogoArray.type = doc.data().type;
          bogoArray.push(tempBogoArray);
          cnt += 1;
        });
        console.log(bogoArray);
      });
      this.bogoData = bogoArray;
    },
  },
};
</script>

<style lang="scss">
  @import "../assets/sass/custom.scss";

</style>
