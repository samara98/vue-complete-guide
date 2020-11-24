<template>
  <b-row>
    <app-stock v-for="(stock, idx) in stocks" :stock="stock" :key="idx" />
  </b-row>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Stock from './Stock.vue';

  export default {
    name: 'Portfolio',
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio',
      }),
    },
    components: {
      appStock: Stock,
    },
  };
</script>
