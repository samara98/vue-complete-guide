<template>
  <b-col :sm="6" :lg="4" class="mb-4">
    <b-card>
      <b-card-header header-text-variant="info">
        <b-card-title>
          {{ stock.name }}
          <b-card-text>
            <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
          </b-card-text>
        </b-card-title>
      </b-card-header>
      <b-card-body>
        <b-input-group>
          <b-input
            type="number"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: insufficientQuantity }"
          />

          <template #append>
            <b-btn
              variant="success"
              @click="sellStock"
              :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(+quantity)"
            >
              {{ insufficientQuantity ? 'Not enough' : 'Sell' }}
            </b-btn>
          </template>
        </b-input-group>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'PortfolioStock',
    props: ['stock'],
    data() {
      return {
        quantity: 0,
      };
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      },
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock',
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        };
        this.placeSellOrder(order);
        this.quantity = 0;
      },
    },
  };
</script>
