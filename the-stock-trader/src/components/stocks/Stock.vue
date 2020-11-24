<template>
  <b-col :sm="6" :lg="4" class="mb-4">
    <b-card>
      <b-card-header header-text-variant="success">
        <b-card-title>
          {{ stock.name }}
          <b-card-text>
            <small>(Price: {{ stock.price }})</small>
          </b-card-text>
        </b-card-title>
      </b-card-header>
      <b-card-body>
        <b-input-group>
          <b-input
            type="number"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: insufficientFunds }"
          />
          <template #append>
            <b-btn
              variant="success"
              @click="buyStock"
              :disabled="insufficientFunds || +quantity <= 0 || !Number.isInteger(+quantity)"
            >
              {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
            </b-btn>
          </template>
        </b-input-group>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script>
  export default {
    name: 'Stock',
    props: ['stock'],
    data() {
      return {
        quantity: 0,
      };
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      },
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: +this.quantity,
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      },
    },
  };
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
