<template>
  <div>
    <app-stock v-for="(stock, idx) in stocks" :stock="stock" :key="idx" />
  </div>
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
