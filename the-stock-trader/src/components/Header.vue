<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/portfolio" activeClass="active">Portfolio</b-nav-item>
        <b-nav-item to="/stocks" activeClass="active">Stocks</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right @click="endDay">End Day</b-nav-item>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>Save & Load</em>
          </template>
          <b-dropdown-item href="#" @click="saveData">Save Data</b-dropdown-item>
          <b-dropdown-item href="#" @click="loadData">Load Data</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item>
          <strong>Funds: {{ funds | currency }}</strong>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Header',
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData',
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks,
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      },
    },
  };
</script>
