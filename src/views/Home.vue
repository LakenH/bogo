<template>
  <Deals/>
</template>

<script>
// @ is an alias to /src
import Deals from '@/components/Deals.vue';

export default {
  name: 'Home',
  components: {
    Deals,
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      bogos: [],
    };
  },
};
</script>
