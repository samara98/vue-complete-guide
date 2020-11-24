<template>
  <b-row>
    <app-stock v-for="(stock, idx) in stocks" :stock="stock" :key="idx" />
  </b-row>
</template>

<script>
  import Stock from './Stock.vue';

  export default {
    name: 'Stocks',
    components: {
      appStock: Stock,
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      },
    },
  };
</script>
