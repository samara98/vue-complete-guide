import stocks from '../../data/stocks';

const state = {
  stocks: [],
};

const mutations = {
  SET_STOCKS(stateArg, stocksArg) {
    const newStateArg = stateArg;
    newStateArg.stocks = stocksArg;
  },
  RND_STOCKS(stateArg) {
    const newStateArg = stateArg;
    newStateArg.stocks.forEach((stockItem) => {
      const newStockItem = stockItem;
      // eslint-disable-next-line operator-linebreak
      newStockItem.price =
        newStockItem.price < 4
          ? Math.round(newStockItem.price * (2 + Math.random() - 1))
          : Math.round(newStockItem.price * (1 + Math.random() - 0.25));
    });
  },
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  },
};

const getters = {
  stocks: (stateArg) => stateArg.stocks,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
